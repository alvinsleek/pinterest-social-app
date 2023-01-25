import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import CreatePostForm from './Components/CreatePostForm';

function App() {
  return (
    <>
    <Navbar />
    <CreatePostForm />
    <HomePage />
   
    </>
  );
}

export default App;
