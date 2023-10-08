import Navbar from './component/NavBar/Navbar';
import './App.css'
import Intro from "./component/intro/Intro";
import Services from "./component/services/Services";
import Experience from "./component/Experience/Experience";
import Works from "./component/Works/Works";
import Portfolio from "./component/Portfoluo/Portfolio";
import Testimonials from "./component/Testimonials/Testimonials";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

import { useContext } from "react";
import { themeContext } from "./Context";



function App(){

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return(
    <div className="App"
    
    style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    
    >
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Works/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     
     <Footer/>
     

    </div>
  );
}

export default App;
