import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import EditPost from "./EditPost";

const PostCard = ({ post, onDelete, setPostData, onEdit }) => {
  const [likeCount, setLikeCount] = useState();
  const [viewingComments, setviewingComments] = useState(false);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch(`https://my-server-sibuor.herokuapp.com/comments/${post.id}`)
      .then((r) => r.json())
      .then((data) => setComment(data));
  }, [post.id]);

  const handleViewClick = () => {
    setviewingComments(true);

    fetch(`https://my-server-sibuor.herokuapp.com/comments/${post.id}`)
      .then((response) => response.json())
      .then((data) => setComment(data))
      .catch((error) => console.error(error));
  };
  const handleSaveClick = () => {
    setviewingComments(false);
  };

  useEffect(() => {
    fetch(`https://my-server-sibuor.herokuapp.com/likes/${post.id}`)
      .then((res) => res.json())
      .then(({ likeCount }) => setLikeCount(likeCount));
  }, [post.id]);

  const handleClick = async (postId) => {
    try {
      const response = await fetch(
        `https://my-server-sibuor.herokuapp.com/likes/${postId}`
      );
      const { likeCount } = await response.json();
      const updatedLikeCount = likeCount + 1;
      setLikeCount(updatedLikeCount);
      await fetch(`https://my-server-sibuor.herokuapp.com/likes/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({ likeCount: updatedLikeCount }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://my-server-sibuor.herokuapp.com/Posts/${id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        onDelete(id);
        alert("Post is deleted");
      } else {
        throw new Error("Delete Unsuccessful");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="display-card-container col-sm-6 col-md-4  my-2 mx-1.8">
      <div className="card bg-dark text-white" style={{}}>
        <img
          src={post.image}
          style={{ height: "80vh" }}
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <div className="card-group">
            <h4 className="card-title">{post.name}:</h4>
            <p className="card-text">{post.description}</p>
          </div>
          <div
            className="card bg-dark text-white"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button
              onClick={() => handleClick(post.id)}
              className="fa-sharp fa-solid fa-heart mx-3 bg-danger rounded"
              style={{ width: "66px", height: "30px" }}
            >
              {likeCount} {likeCount === 1 ? "Like" : ""}
            </button>
            <div className="col-3">
              <EditPost post={post} setPostData={setPostData} onEdit={onEdit} />
            </div>
            <div className="col-3 mx-3">
              <Comment
                post={post}
                setPostData={setPostData}
                setComment={setComment}
              />
            </div>
            <a
              onClick={() => handleDelete(post.id)}
              style={{ width: "20px", height: "30px", padding: "5px" }}
              className="btn btn-dark text-white mx-3 bg-danger"
            >
              X
            </a>
          </div>
          <div>
            <div>
              {viewingComments ? (
                <>
                  <br />

                  <>
                    <div className="card-group">
                      <h5>{comment.name}:</h5>
                      <p>{comment.content}</p>
                    </div>
                  </>

                  <button onClick={handleSaveClick}>Close</button>
                  <br />
                </>
              ) : (
                <button
                  style={{ width: "150px", height: "30px", padding: "2px" }}
                  className="btn btn-dark text-white mx-3 "
                  onClick={handleViewClick}
                >
                  view comments
                </button>
              )}
            </div>
            <div className="card-group">
              <p className="fst-italic">time posted:</p>
              <p className="fst-italic"> {post.created_at}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
