import React,{useState} from 'react'

function EditPost({setPostData}) {
        const [isEditing, setIsEditing] = useState(false);
        const [updatedData, setUpdatedData] = useState({});
        
      
        const handleEditClick = () => {
          setIsEditing(true);
        };

        const handleSaveClick = () => {
            setIsEditing(false);
            fetch('http://localhost:3000/Posts', {
              method: 'POST',
              body: JSON.stringify(updatedData),
              headers: { 'Content-Type': 'application/json' },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Success:', data);
              })
              .catch((error) => {
                console.error('Error:', error);
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
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
          />
          <input
            type="url"
            name="image"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            onChange={handleInputChange}
          />
          
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <button   className="btn btn-dark text-white mx-3" onClick={handleEditClick}>Edit</button>
      )}
    </div>
  )
}

export default EditPost