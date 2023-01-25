import React,{useState,useEffect} from "react";
import PostList from "./PostList";
import CreatePostForm from "./CreatePostForm";

function HomePage ( ) {
//fetch data from db.json
//must use state and useEffect
// pass props to post list 
const [postData, setPostData]= useState([])


useEffect(()=>{
fetch( 'http://localhost:3000/Posts')
.then(r=>r.json())
.then(data=>setPostData(data))
}, [])



    return (
    <>
    <CreatePostForm setPostData={setPostData}/>
    <PostList postData ={postData}  setPostData={setPostData}/>
    </>
    )
};
export default HomePage;