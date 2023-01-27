import React,{useState,useEffect} from 'react'

function Feed() {
const [feed,setFeed] = useState([])

useEffect(()=>{
    fetch('  http://localhost:3000/Posts')
    .then(r=>r.json())
    .then(data=> setFeed(data))
},[])

  return (
    
    <div>
         {feed.map((posts)=>(
    <div className="card" style={{ boxShadow: "8px 8px 4px 0px grey" }}>
    <img
      src={posts.image}
      style={{ height: "80vh" }}
      className="card-img-top img-fluid"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{posts.name}</h5>
      <p className="card-text">{posts.description}</p>
      </div>
      </div>
     ))} 
        
    
    </div>

  )
};

export default Feed;