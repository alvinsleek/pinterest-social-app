import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import SearchBox from "./SearchBox";
import PopularPosts from "./PopularPosts";

function PostList({ postData, setPostData }) {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(postData);

  

  useEffect(() => {
    if (!Array.isArray(postData)) {
      return;
    }
    setFilteredData(
      postData.filter(
        (post) =>
          !post.name ||
          search === "" ||
          post.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, postData]);

  const handleDeleteFunc = (id) => {
    setPostData((postData || []).filter((post) => post.id !== id));
    setFilteredData((postData || []).filter((post) => post.id !== id));
  };

  const handleEdit = () => {
    window.location.reload();
  };

  return (
    <>
      <PopularPosts postData={postData} />
      <SearchBox search={search} setSearch={setSearch} />
      <div className="">
        <h2 className="bg-dark text-white">Your Feed</h2>
        <div className="row mx-2 my-2">
          {(filteredData || [])
          .reverse()
          .map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onDelete={handleDeleteFunc}
              setPostData={setPostData}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PostList;
