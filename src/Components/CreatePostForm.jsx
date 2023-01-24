import React,{useState} from "react";

const CreatePostForm = () =>{
    const [formData, setFormData] = useState({
        name:"",
        pic:"",
        description:"",
        time:""
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('api/submit', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {'Content-type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            console.log('success',data);
        })
        
        }
        console.log(formData);
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value=" " onChange={handleChange} />
            </label>
            <label><label>
               
                Picture:
                <input type="image" name="picture" value=" " onChange={handleChange} />
            </label>
            <br />
            <br />
                Description:
                <input type="text" name="description" value=" " onChange={handleChange} />
            </label>
            <label>
                <br />
                Time:
                <input type="time" name="time" value=" " onChange={handleChange} />
          
           </label>
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};
export default CreatePostForm


