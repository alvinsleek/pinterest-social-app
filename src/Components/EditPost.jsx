import React, { useState } from "react";

function EditPost() {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({});

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      const response = await fetch('http://localhost:3000/Posts', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {isEditing ? (
        <>
          <br />
          <textarea
            className="mt-2 rounded"
            placeholder="new caption"
            type="text"
            name="description"
            onChange={(e) => setData({ ...data, name: e.target.value })}
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
