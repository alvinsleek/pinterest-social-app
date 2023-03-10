import React, { useState, useEffect } from "react";

function PopularPosts({ postData }) {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    fetch(`https://my-server-sibuor.herokuapp.com/Posts`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [postData]);

  //const sortedPosts = postData.sort((a, b) => b.likeCount - a.likeCount);

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = (data || []).slice(indexOfFirstPost, indexOfLastPost);

  const postCards = currentPosts.map((post) => (
    <div
      key={post.id}
      className="display-card-container col-sm-6 col-md-4 my-2 mx-1.8"
    >
      <div className="card bg-dark text-white" style={{ borderRadius: "20px" }}>
        <img
          src={post.image}
          className="card-img-top img-fluid img-responsive"
          alt="..."
          style={{ height: "60vh" }}
        />
        <div className="card-body card-group">
          <h5 className="card-title">{post.name}:</h5>
          <p className="card-text">{post.description}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="bg-dark text-white mt-2">Popular Posts</h1>
      <div className="row">{postCards}</div>
    </>
  );
}

export default PopularPosts;
