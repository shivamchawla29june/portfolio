import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
  Study,
} from "./containers";

import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/study" element={<Study />} />
        {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        <Route path="/contact" element={<Footer />} />
      </Routes>
      {/* <Navbar />
      <Header />
      <About />
      <Work />
      <Skills /> */}
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
