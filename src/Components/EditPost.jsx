import React, { useState } from "react";

function EditPost({ setPostData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    fetch("http://localhost:3000/Posts", {
      method: "PATCH",
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
            placeholder="user name"
            type="text"
            name="name"
            onChange={handleInputChange}
            style={{width:'100%'}}
          />
          <br />
          <input
          className="mt-2"
            placeholder="image url"
            type="url"
            name="image"
            onChange={handleInputChange}
            style={{width:'100%'}}
          />
          <br />
          <input
          className="mt-2"
            placeholder="caption"
            type="text"
            name="description"
            onChange={handleInputChange}
            style={{width:'100%'}}
          />
          <br />
          <button onClick={handleSaveClick}>Save</button>
          <br />
        </>
      ) : (
        <button
          style={{ width: "60px", height: "40px" }}
          className="btn btn-dark text-white mx-3 "
          onClick={handleEditClick}
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default EditPost;
