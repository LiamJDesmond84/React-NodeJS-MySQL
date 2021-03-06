
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './components/Dashboard';
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';
import Login from './components/Login';
import Register from './components/Register';
import UpdatePost from './components/UpdatePost';

function App() {
	return (
	<Router>
		<div className="navbar">
		<Link to="/dashboard">Home</Link>
		<Link to="/">Login</Link>
		<Link to="/register">Register</Link>
		<Link to="/newPost">Add a Post</Link>
		</div>
    <div className="App">

		<Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/posts/edit/:id" element={<UpdatePost />} />

                    <Route path="/newPost" element={<NewPost />} />
					<Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
    </div>
	</Router>
	);
}

export default App;
