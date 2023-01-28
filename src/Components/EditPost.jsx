import React, { useState, useEffect } from "react";

function EditPost({ post, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({});
  const [postData, setPostData] = useState(post);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (id) => {
    setIsEditing(false);
    try {
      const response = await fetch(
        `https://my-server-sibuor.herokuapp.com/Posts/${postData.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      onEdit(postData.id);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setData(postData);
  }, [postData]);

  return (
    <div>
      {isEditing ? (
        <>
          <br />
          <textarea
            className="mt-2 rounded"
            placeholder="new caption"
            required
            type="text"
            name="description"
            onChange={(e) => setData({ ...data, description: e.target.value })}
            style={{ width: "200px", height: "30px" }}
          />
          <button onClick={handleSaveClick}>Save</button>
          <br />
        </>
      ) : (
        <button
          style={{ width: "60px", height: "30px", padding: "2px" }}
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
