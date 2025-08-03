import React from "react";
import './App.css';
import './styles/global.css';
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Amenities from "./pages/amenities/amenities";
import Gallery from "./pages/gallery/gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/header/footer";
import Stories from "./pages/stories/stories";
import Contact from "./pages/contact/contact";
const App=()=>{
  return(
    // <div>
    //   <Header />
    //   <Home />
    //   {/* <About /> */}
      
    // </div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/stories" element={<Stories />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;