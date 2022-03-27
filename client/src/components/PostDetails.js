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
        axios.get(`http://localhost:8000/api/posts/byId/${id}`)
            .then(res => {console.log(res.data);
                setPost(res.data);})
            .catch(err => {console.log(err);navigate('/error');})
    }, [id])
    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title"> {post.title} </div>
                    <div className="body">{post.description}</div>
                    <div className="footer">{post.username}</div>
                </div>
            </div>
        <div className="rightSide">Comment Section</div>
    </div>
    )
}

export default PostDetails