import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Private from "./component/Private";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App m-auto bg-black min-h-screen text-white lg:w-5/12">
      <Navbar />
      <Routes>
        <Route element={<Private/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/create" element={<CreatePost/>}/>
        <Route path="/profile/:id"/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Outlet/>
    </div>
  );
}

export default App;
