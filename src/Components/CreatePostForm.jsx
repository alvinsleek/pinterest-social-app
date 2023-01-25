import React, { useState, useEffect } from 'react';

const CreatePostForm = ({setPostData}) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    created_at: '',
  });


  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
    fetch('http://localhost:3000/Posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
      });
  };
  
  const fetchData = () => {
    fetch('http://localhost:3000/Posts')
      .then((res) => res.json())
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => console.error(error));
  }

  return (
    <form className="mt-3 mx-2 col-sm-6 col-md-4 col-" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="whats on your mind?"
        name="description"
        onChange={handleChange}
        style={{ border: 'none' }}
      />
      <br />
      <input type="url" placeholder="image url" name="image" onChange={handleChange} />
      <br />
      <input type="text" placeholder="Your Name" name="name" onChange={handleChange} />
      <br />
      <input type="time" placeholder="posting time" name="created_at" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePostForm;


// Create a form that has inputs able to post name, pic,description and time 
// must have state 
//Post to the database
