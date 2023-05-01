import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "./Context";





const App = () => {

        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode;


    return ( 
        <div className="App" 
            style={
                {background : darkMode ? 'black' : '',
                color : darkMode ? "#fff" : ''
            }
            }
        >
            <Navbar />
            <Intro />
            <Services />
            <Experience />
            <Works />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
     );
}
 
export default App;