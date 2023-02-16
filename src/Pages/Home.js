import Banner from "../Components/Banner.js";
import Nav from "../Components/Nav.js";
import Section from "../Components/Section.js";
import Footer from "../Components/Footer.js";

import "../Styles/App.css";

function Home(){
    return (
        <div>
            <Banner/>
            <Nav/>
            <Section/>
            <Footer/>
        </div>
    )

}

export default Home;