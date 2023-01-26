import React, { useState, useEffect } from 'react';

function PopularPosts({ postData }) {
  const [likeCount, setLikeCount] = useState();
  const [page, setPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    fetch(`http://localhost:3000/likes/${postData.id}`)
      .then((res) => res.json())
      .then(({ likeCount }) => setLikeCount(likeCount));
      
  }, [postData.id]);

  const sortedPosts = postData.sort((a, b) => b.likeCount - a.likeCount);

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const postCards = currentPosts.map((post) => (
    <div key={post.id} className="display-card-container  col-sm-6 col-md-4  my-2 mx-1.8 ">
      <div className="card  " style={{ boxShadow: '8px 8px 4px 0px grey',borderRadius:'20px' }}>
        <img src={post.image}  className="card-img-top img-fluid img-responsive" alt="..." style={{height:'60vh'}} />
        <div className="card-body">
          <h5 className="card-title">{post.name}</h5>
          <p className="card-text">{post.description}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
    <h1 className='bg-dark text-white mt-2'>Popular Posts</h1>
    <div className='row'>
      {postCards}
     
    </div>
    </>
  );
}

export default PopularPosts;
