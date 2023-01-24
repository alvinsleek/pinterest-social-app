import React from 'react';
import Comment from './Comment';

function PostCard({ post }) {
  return (
    <>
      <div className='display-card-container col-sm-6 col-md-4  my-2 mx-1.8' >
        <div className="card   " style={{ border: '2px solid black' }}>
          <img src={post.image}  style={{height:'80vh'}} className="card-img-top img-fluid " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{post.name}</h5>
            <p className="card-text">{post.description}</p>
            <a href="#" className="btn btn-primary">Delete</a>
          </div>
          <Comment />
        </div>
       
      </div>

     
    </>
  );
}

export default PostCard;
