import '../App.css';
import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
// import { Link } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";


const NewPost = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [username, setUsername] = useState("")


    const createPost = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/posts", {title, description, username})
            .then((res) => {
                console.log(res);
                setTitle("");
                setDescription("");
                setUsername("");
                navigate("/");
                // setHasBeenSubmitted(!hasBeenSubmitted);
                })
            .catch((err) => {
            // console.log(err.response.data.errors[0]);
            setErrors(err.response.data.errors[0])});
            console.log(errors);

            
        };

    return (

            <div className="modern-form">
    
                <form onSubmit={createPost}>
                <h4>Add a Post</h4>
                <fieldset class='float-label-field'>
                <label for="txtName">Title</label>
                    <input id="txtName" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}  />
                    {
                        errors.path === "title"?
                        <p>{errors.message}</p>
                        :null
                    }
                </fieldset>
                <fieldset class='float-label-field'>
                <label for="txtName">Description</label>
                    <input id="txtName" type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    {
                        errors.path === "description"?
                        <p>{errors.message}</p>
                        :null
                    }
                </fieldset>
                <fieldset class='float-label-field'>
                <label for="txtName">UserName</label>
                    <input id="txtName" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {
                        errors.path === "username"?
                        <p>{errors.message}</p>
                        :null
                    }
                </fieldset>
                    <input className="button" type="submit" placeholder="Submit" />
                <button className="button" onClick={() => navigate("/")}>Cancel</button>
                </form>
            </div>
        
        

    )
}

export default NewPost