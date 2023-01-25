import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import EditPost from './EditPost';

const PostCard = ({ post }) => {
  const [likeCount, setLikeCount] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/likes/${post.id}`)
      .then(res => res.json())
      .then(({ likeCount }) => setLikeCount(likeCount));
  }, [post.id]);

  const handleClick = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3000/likes/${postId}`);
      const { likeCount } = await response.json();
      const updatedLikeCount = likeCount+1;
      setLikeCount(updatedLikeCount);
      await fetch(`http://localhost:3000/likes/${postId}`, {
        method:'PATCH',
        body: JSON.stringify({ likeCount: updatedLikeCount }),
        headers: { 'Content-Type': 'application/json' }
        });
        } catch (error) {
        console.error(error);
        }
        };
        
        return (
        <div className='display-card-container col-sm-6 col-md-4  my-2 mx-1.8'>
        <div className="card" style={{ boxShadow: "8px 8px 4px 0px grey" }}>
        <img src={post.image} style={{ height: '80vh' }} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{post.name}</h5>
        <p className="card-text">{post.description}</p>
        <div className='card card-group'>
        <button onClick={() => handleClick(post.id)} className="fa-sharp fa-solid fa-heart mx-3" style={{ width: '66px', height: '40px' }}>
        {likeCount} {likeCount === 1 ? 'Like' : ''}
        </button>
        <EditPost post={post} />
        <Comment post={post} />
        <a style={{ width: '60px', height: '40px' }} href="#" className="btn btn-dark text-white mx-3">X</a>
        </div>
        </div>
        </div>
        </div>
        );
        };


export default PostCard;