import React,{useState} from 'react';
import Comment from './Comment';
import EditPost from './EditPost';
function PostCard({ post }) {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  }





  return (
    <>
      <div className='display-card-container col-sm-6 col-md-4  my-2 mx-1.8' >
        <div className="card   " style={{ boxShadow: "8px 8px 4px 0px grey" }}>
          <img src={post.image}  style={{height:'80vh'}} className="card-img-top img-fluid " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{post.name}</h5>
            <p className="card-text">{post.description}</p>

            <div className='card card-group'>
              
            <div>
            
            </div>
            <i onClick={handleClick}  className="fa-sharp fa-solid fa-heart mx-3" style={{width:'50px'}}>
                {likes} {likes === 1 ? '' : ''}
                </i>
                <EditPost/>
            <Comment />
               
               <a href="#" className="btn btn-dark text-white mx-3">Remove</a>
               
            </div>
          </div >





          
          </div>
         
        </div>
    </>
  );
}

export default PostCard;
