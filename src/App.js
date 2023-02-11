import React from "react";
import Header from "./Component/Header/Header";
import Nav from "./Component/Nav/Nav";
import About from "./Component/about/About";
import Experience from "./Component/Experience/Experience";
import Service from "./Component/Services/Service";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
