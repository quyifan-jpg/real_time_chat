import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/Chat" element={<Signup></Signup>}></Route>
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
