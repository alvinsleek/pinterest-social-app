import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import SearchBox from "./SearchBox";

function PostList({ postData, setPostData }) {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(postData);

  useEffect(() => {
    setFilteredData(postData.filter(post => !post.name || search === "" || post.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, postData]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} />
      <div className="">
        <div className=" row mx-2 my-2">
          {filteredData.map((post) => (
            <PostCard key={post.id} post={post} setPostData={setPostData} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PostList;
