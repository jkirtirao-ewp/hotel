import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import BookOnline from "./Pages/BookOnline";
import "./index.css";
import Scroll from './components/Scroll';
import HappyRoom from './Pages/HappyRoom';
import SuperHappyRoom from './Pages/SuperHappyRoom';
import ScrollToTop from 'react-scroll-to-top';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <div style={{overflow:'hidden'}}>
      <Routes>
      
        <Route path="/" element={<Home />}  />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/bookonline" element={<BookOnline />} />
        <Route path="/happy-room" element={<HappyRoom />} />
        <Route path="/super-happy-room" element={<SuperHappyRoom/>} />
      </Routes>
      </div>

     {/* <Scroll/> */}
     
      <Footer />
      <ScrollToTop smooth top={300} color='#deb666'/>
    </BrowserRouter>
  );
}

export default App;
