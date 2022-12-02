import {React, Component} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styling/About.css';
import Scale from '../Assets/about_scale.png';

class AboutPage extends Component{
    render(){
        return(
            <div>
                <div id = 'about-container'>
                    <Navbar/>
                    <div id = 'about-legalbrief'>
                        <div id = 'about-left'>
                            <h1 id = 'about-title'>About Legalbrief</h1>
                            <p id = 'about-content'>
                                At LegalBrief, we want to make Legal <br></br>
                                information accessible to everyone <br></br>
                                regardless of economic resources, <br></br>
                                prior knowledge, or familiarity with <br></br>
                                legislation. 
                            </p>
                        </div>
                        <div id = 'about-right'>
                            <div id = 'about-pic'><img src = {Scale}></img></div>
                        </div>
                    </div>
                    <div id = 'core-values'>
                        <h1 id = 'core-values-title'>Core Values</h1>
                        <h2 id = 'core-value-1'>Accessibility</h2>
                        <p id = 'core-content-1'> 
                            Provide nearby resources that <br></br>
                            match each individual situation in <br></br>
                            an accessible manner
                        </p>
                        <h2 id = 'core-value-2'>Seamlessness</h2>
                        <p id = 'core-content-2'>
                            We want to provide users with a <br></br>
                            seamless diagnostic to identify and <br></br>
                            provide the applicable legislation. 
                        </p>
                    </div>
                    <div id = 'executive-team'>
                        <h1 id = 'executive-title'>Executive Team</h1>
                        <div id = 'julian-picture'>pic</div>
                        <h3 id = 'founder-title'>Julian Jenkins Founder/ CEO</h3>
                        <p id = 'founder-bio'>
                            Julian Jenkins is our Founder and brought a plethora of experience to LegalBrief. <br></br>
                            With experience in the professional sports industry facilitating team operations and <br></br>
                            working with a major Legal firm in Vancouver, British Columbia managing, and facilitating a <br></br>
                            variety of corporate files. 
                        </p>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default AboutPage;