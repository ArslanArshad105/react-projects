import "./App.css";
import Navigationbar from "./Components/Navigationbar";
import ContactForm from "./Components/ContactForm";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Blogs from "./Components/Blogs";
import Airbnb from "./Components/AirbnbPage/Airbnb";
import ToDoListP from "./Components/ToDoList/ToDoListP";

function App() {
  return (
    <>
      <Navigationbar
        title="Arslan"
        aboutus="About Us"
        smm="Social Media Marketing"
        sem="Search Engine Marketing"
        ppc="PPC Management"
        blogs="Blogs"
        contactus="Contact Us"
        btnnmbrurl="tel: +923070949488"
        button="+923070949488"
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us/" element={<ContactForm />}></Route>
        <Route path="/about-us/" element={<AboutUs />}></Route>
        <Route path="/blogs/" element={<Blogs />}></Route>
        <Route path="/airbnb/" element={<Airbnb />}></Route>
        <Route path="/todolist/" element={<ToDoListP />}></Route>
      </Routes>
    </>
  );
}

export default App;
