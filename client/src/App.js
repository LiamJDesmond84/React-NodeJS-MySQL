
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './components/Dashboard';
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';
import Login from './components/Login';
import Register from './components/Register';

function App() {
	return (
	<Router>
		<div className="navbar">
		<Link to="/">Home</Link>
		<Link to="/login">Login</Link>
		<Link to="/register">Register</Link>
		<Link to="/newPost">Add a Post</Link>
		</div>
    <div className="App">
	<h1><Link to="/">Home</Link></h1>
		<Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/newPost" element={<NewPost />} />
					<Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
    </div>
	</Router>
	);
}

export default App;
