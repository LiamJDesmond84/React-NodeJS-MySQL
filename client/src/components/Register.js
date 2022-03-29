import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
// import { Link } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [passError, setPasserror] = useState("");

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const loginUser = (e) => {
        e.preventDefault();
        if (password !== confirm) {
            setPasserror("Password & Confirm Password must match");
        }
        else {
        axios.post("http://localhost:8000/api/users/register", {username, password})
            .then((res) => {
                console.log(res);
                setUsername("");
                setPassword("");
                setConfirm("");
                navigate("/");
                // setHasBeenSubmitted(!hasBeenSubmitted);
                })
            .catch((err) => {
            console.log(err.response.data);
            setErrors(err.response.data.errors[0])});
            console.log(errors);

            
        };
    }


    return         <div className="modern-form">
    
    <form onSubmit={loginUser}>
    <h4>Add a Post</h4>
    <fieldset className='float-label-field'>
    <label htmlFor="txtName">User Name</label>
        <input id="txtName" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}  />
        {
            errors.path === "username"?
            <p>{errors.message}</p>
            :null
        }
    </fieldset>
    <fieldset className='float-label-field'>
    <label htmlFor="txtName">Password</label>
        <input id="txtName" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {
            errors.path === "password"?
            <p>{errors.message}</p>
            :null
        }
    </fieldset>
    <fieldset className='float-label-field'>
    <label htmlFor="txtName">Confirm Password</label>
        <input id="txtName" type="text" name="confirm" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        {
            passError !== ""?
            <p>{passError}</p>
            :null
        }
    </fieldset>
        <input className="button" type="submit" placeholder="Submit" />
    <button className="button" onClick={() => navigate("/")}>Cancel</button>
    </form>
</div>
};

export default Register;
