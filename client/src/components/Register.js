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
                navigate("/dashboard");
                // setHasBeenSubmitted(!hasBeenSubmitted);
                })
            .catch((err) => {
            console.log(err.response.data);
            setErrors(err.response.data)});
            console.log(errors);

            
        };
    }


    return         <div className="modern-form">
    
    <form onSubmit={loginUser}>
    <h4>Register New User</h4>
    <label>User Name</label>
    <fieldset className='float-label-field'>
        <input id="txtName" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}  />
        {
            errors?
            <p>{errors.error}</p>
            :null
        }
    </fieldset>
    <label>Password</label>
    <fieldset className='float-label-field'>
        <input id="txtName" type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

    </fieldset>
    <label>Confirm Password</label>
    <fieldset className='float-label-field'>
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
    <small class="text-muted">Already a User? <a class="ml-2" href="/">Sign In!</a></small>
</div>
};

export default Register;
