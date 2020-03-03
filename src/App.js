import React from 'react';
import './App.css';
// import Parallax from './Components/Parallax/Parallax'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Works from './Components/Works/Works'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


function App() {


  return (
    <div className="">

      <Header />
      <About />
      <Services />
      <Works />
      <Contact />
      {/* <Parallax /> */}
      <Footer />
    </div>
  )
}

export default App;
