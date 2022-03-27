import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


const PostDetails = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    // const { id } = props;
    const [post, setPost] = useState({})
    // const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/post/${id}`)
            .then(res => {console.log(res.data);
                setPost(res.data);})
            .catch(err => {console.log(err);navigate('/error');})
    }, [id])
    return (
        <div>
            <h1>Title:</h1>
            <p>{post.title}</p>
            <h1>Description:</h1>
            <p>{post.description}</p>
            <h1>Added by:</h1>
            <p>{post.username}</p>

            <hr/>
            <h3><Link to="/">Home</Link></h3>
        </div>
    )
}

export default PostDetails