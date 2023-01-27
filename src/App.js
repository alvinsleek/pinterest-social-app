import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import PopularPosts from "./Components/PopularPosts";
import PostList from "./Components/PostList";
import CreatePostForm from "./Components/CreatePostForm";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="popularposts" element={<PopularPosts />} />
          <Route path="postlist" element={<PostList />} />
          <Route path="createpostform" element={<CreatePostForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
