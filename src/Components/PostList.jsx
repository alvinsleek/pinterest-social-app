import React, { useState } from "react";
import PostCard from "./PostCard";
import SearchBox from "./SearchBox";

function PostList({ postData, setPostData }) {
  const [search, setSearch] = useState([]);

  const postPageList = postData.map((post) => (

 <PostCard key={post.id} post={post} setPostData={setPostData} />
    
 ));

  return (
    <>
     <SearchBox search={search} setSearch={setSearch} />
    
       
     
      <div className="">
        <div className=" card-group mx-2 my-2" >
        {postPageList}
        </div>
        </div>
        
    </>
  );
}

export default PostList;
