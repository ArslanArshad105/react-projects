import "./App.css";
import Navigationbar from "./Components/Navigationbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Blogs from "./Components/Blogs";
import Airbnb from "./Components/AirbnbPage/Airbnb";
// import DisplayTodosList from "./Components/ToDoList/DisplayTodosList";
import SaveToLocalStorage from "./Components/ToDoList/SaveToLocalStorage";
import PomodoroClock from "./Components/PomodoroClock/PomodoroClock";
import SignUp from "./SignupPage/SignUp";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <>
      <Navigationbar
        title="Arslan"
        aboutus="About Us"
        blogs="Blogs"
        contactus="Contact Us"
        btnnmbrurl="tel: +923070949488"
        button="+923070949488"
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us/" element={<ContactUs />}></Route>
        <Route path="/about-us/" element={<AboutUs />}></Route>
        <Route path="/blogs/" element={<Blogs />}></Route>
        <Route path="/airbnb/" element={<Airbnb />}></Route>
        <Route path="/todolist/" element={<SaveToLocalStorage />}></Route>
        <Route path="/pomodoro-clock" element={<PomodoroClock />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
