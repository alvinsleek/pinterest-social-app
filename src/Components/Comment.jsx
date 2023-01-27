import React,{useState} from 'react'

//comment prompt form 

function Comment({ setPostData }) {
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
            placeholder="user"
            type="text"
            name="name"
            onChange={handleInputChange}
            style={{width:'90%'}}
            
          />
          <br />
          <textarea
          className='mt-2'
            placeholder="Comment"
            type="text"
            name="content"
            onChange={handleInputChange}
            style={{width:'90%'}}
          />
          <br />
        
          <br />
          <button onClick={handleSaveClick}>Save</button>
          <br />
        </>
      ) : (
        <button
          style={{ width: "100px", height: "40px" }}
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