import '../App.css';
import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

const NewPost = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [username, setUsername] = useState("")


    const createAuthor = (e) => {
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
            console.log(err);
            setErrors(err.response.data.errors)});
            
        };

    return (
        <div>

            <h4>Add a Post</h4>
            <form className="create" onSubmit={createAuthor}>
                <label>Title</label>
                <input type="text" name="name" value={title} onChange={(e) => setTitle(e.target.value)} />
                {
                    errors.name?
                    <p>{errors.name.message}</p>
                    :null
                }
                <label>Description</label>
                <input type="text" name="name" value={description} onChange={(e) => setDescription(e.target.value)} />
                {
                    errors.name?
                    <p>{errors.name.message}</p>
                    :null
                }
                <label>Created By</label>
                <input type="text" name="name" value={username} onChange={(e) => setUsername(e.target.value)} />
                {
                    errors.name?
                    <p>{errors.name.message}</p>
                    :null
                }
                <input type="submit" placeholder="Submit" />
            </form>
            <button onClick={() => navigate("/")}>Cancel</button>
            <h1><Link to="/">Home</Link></h1>
        </div>
    )
}

export default NewPost