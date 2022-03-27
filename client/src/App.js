
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NewPost from './components/NewPost';

function App() {
	return (
	<Router>
    <div className="App">
		<Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/new" element={<NewPost />}/>
        </Routes>
    </div>
	</Router>
	);
}

export default App;
