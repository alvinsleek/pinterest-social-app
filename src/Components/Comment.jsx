import React, { useState } from "react";

//comment prompt form

function Comment({ setPostData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name:'',
    content:''
  });

  

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    fetch("http://localhost:3000/comments", {
      method: "POST",
      body: JSON.stringify(updatedData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleInputChange = (event) => {
    setUpdatedData({
      ...updatedData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {isEditing ? (
        <>
          <br /> <br />
          <input
            className="rounded"
            placeholder="user"
            type="text"
            name="name"
            onChange={handleInputChange}
            style={{ width: "100px" }}
          />
          <br />
          <textarea
            className="mt-1 rounded"
            placeholder="Comment"
            type="text"
            name="content"
            onChange={handleInputChange}
            style={{ width: "100px", height: "30px" }}
          />
          <br />
          <br />
          <button className="mt-1" onClick={handleSaveClick}>
            Save
          </button>
          <br />
        </>
      ) : (
        <button
          style={{ width: "100px", height: "30px", padding: "2px" }}
          className="btn btn-dark text-white mx-3"
          onClick={handleEditClick}
        >
          Comment
        </button>
      )}
    </div>
  );
}

export default Comment;
