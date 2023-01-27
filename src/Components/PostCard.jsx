import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import EditPost from "./EditPost";

const PostCard = ({ post, onDelete, setPostData }) => {
  const [likeCount, setLikeCount] = useState();
  const [viewingComments, setviewingComments] = useState(false);
  const [comment, setComment] = useState([]);

  

  const handleViewClick = () => {
    setviewingComments(true);

    fetch('http://localhost:3000/comments')
  .then(response => response.json())
  .then(data => {
    data.forEach(comment => {
      console.log(comment.name);
      console.log(comment.content);
      setComment(data)
    },[]);
  })
  .catch(error => console.error(error));

  };
  const handleSaveClick = () => {
    setviewingComments(false);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/likes/${post.id}`)
      .then((res) => res.json())
      .then(({ likeCount }) => setLikeCount(likeCount));
  }, [post.id]);

  const handleClick = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3000/likes/${postId}`);
      const { likeCount } = await response.json();
      const updatedLikeCount = likeCount + 1;
      setLikeCount(updatedLikeCount);
      await fetch(`http://localhost:3000/likes/${postId}`, {
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
      const response = await fetch(`http://localhost:3000/Posts/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
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
            <h5 className="card-title">{post.name}:</h5>
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
              <EditPost post={post} setPostData={setPostData} />
            </div>
            <div className="col-3 mx-3">
              <Comment post={post} setPostData={setPostData} />
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
                  <p>{comment.name} great post!</p>
                  <p>{comment.content} must be nice</p>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
