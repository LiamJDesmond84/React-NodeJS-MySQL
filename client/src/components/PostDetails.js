import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


const PostDetails = (props) => {
    const { id } = useParams();
    // const navigate = useNavigate();
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [post, setPost] = useState({})

    const [errors, setErrors] = useState({});
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("")
    const PostId = id;



    const createComment = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/comments", {comment, PostId})
            .then((res) => {
                console.log(res);
                setComment("");
                setHasBeenSubmitted(!hasBeenSubmitted)
                setComments([...comments, comment]);
                })
            .catch((err) => {
            // console.log(err.response.data.errors[0]);
            setErrors(err.response.data.errors[0])});
            console.log(errors);

            
        };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/byId/${id}`)
            .then(res => {
                console.log(res.data);
                setPost(res.data);})
            .catch(err => {console.log(err);})
    
        axios.get(`http://localhost:8000/api/comments/byId/${id}`)
            .then(res => {
                console.log(res.data);
                setComments(res.data);
                })
            .catch(err => {console.log(err);})

    }, [hasBeenSubmitted]);

    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title"> {post.title} </div>
                    <div className="body">{post.description}</div>
                    <div className="footer">{post.username}</div>
                </div>
            </div>
        <div className="rightSide">
        <div className="modern-form">
        <div className="addCommentContainer">
                <form onSubmit={createComment}>
                <h4>Add a Comment</h4>
                <fieldset className='float-label-field'>

                    <input type="text" name="comment" value={comment} onChange={(e) => setComment(e.target.value)}  />
                    {
                        errors.path === "comment"?
                        <p>{errors.message}</p>
                        :null
                    }
                </fieldset>

                    {/* <input id="txtName" type="hidden" value={PostId} /> */}
                    <input className="button" type="submit" placeholder="Submit" />

                </form>
            </div>
            </div>
            <div className="listOfComments">
            {comments.map((x, i) => {
            return (
                <div key={i} className="comment">
                    {x.comment}
                </div>
            );
        })}
        </div>
            </div>
    </div>
    )
}

export default PostDetails