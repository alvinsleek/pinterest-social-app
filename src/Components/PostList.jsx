import React from "react";
import PostCard from "./PostCard";
import SearchBox from "./SearchBox";

// pass props 
// map postcard 
// connect searchbox- filter 
// declare search state here and pass to SearchBox as props
function PostList () {


    return (
        <>
         <SearchBox/>
        <PostCard />
       
        </>
    )
};
export default PostList;

