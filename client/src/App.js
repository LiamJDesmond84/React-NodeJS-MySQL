
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './components/Dashboard';
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';

function App() {
	return (
	<Router>
    <div className="App">
	<Link to="/newPost">Add an Post</Link>
		<Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/newPost" element={<NewPost />} />
					<Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
    </div>
	</Router>
	);
}

export default App;
