import React, { useState, useEffect } from "react";

const CreatePostForm = ({ setPostData }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    created_at: "",
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
    e.target.reset();
    fetch("https://my-server-sibuor.herokuapp.com/Posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
      });
  };

  const fetchData = () => {
    fetch("https://my-server-sibuor.herokuapp.com/Posts")
      .then((res) => res.json())
      .then((data) => {
        setPostData(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-sm-6 col-md-12 col-lg-12">
        <div className="bg-dark">
          <form className="mt-3 mx-2 post-form" onSubmit={handleSubmit}>
            <div style={{display: "flex", flexDirection: "row", border: "2px solid black", justifyContent:"space-between"}}>
              <input type="text" placeholder="caption?" name="description" onChange={handleChange} className="form-control " />
              <input type="url" placeholder="image url" name="image" onChange={handleChange} className="form-control"  style={{width:'130px'}}/>
              <input type="text" placeholder="Name" name="name" onChange={handleChange} className="form-control" style={{width:'80px'}}/>
              <input type="time" placeholder="time" name="created_at" onChange={handleChange} className="form-control" style={{width:'90px'}} />
              <button className="btn btn-primary" type="submit" style={{width:'60px'}}>POST</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default CreatePostForm;

// Create a form that has inputs able to post name, pic,description and time
// must have state
//Post to the database
