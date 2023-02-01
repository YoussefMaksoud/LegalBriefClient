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
                        <div id = 'about-us'>About Us</div>
                        <div id = 'about-left'>
                            <h1 id = 'about-title'>Who we Are</h1>
                            <p id = 'about-content'>
                                At LegalBrief, we want to make Legal 
                                information accessible to everyone 
                                regardless of economic resources, 
                                prior knowledge, or familiarity with 
                                legislation. We want to provide users with a 
                                seamless diagnostic to identify and provide
                                the applicable legislation in an accessible manner 
                                and provide nearby resources that match each 
                                individual situation.
                            </p>
                            <h1 id = 'inspiration-title'>Inspiration</h1>
                            <p id = 'inspiration'>
                                Everybody is affected by the legal system, in 
                                one way or another. It can be overwhelming and 
                                disparaging when you are put in complex legal 
                                situations. Our goal is to provide an accessible 
                                way for the everyday individual to approach these 
                                situations from a strong, which comes from knowledge
                                of their specific situations
                            </p>
                            <h1 id = 'why-title'>Why Legalbrief</h1>
                            <p id = 'why'>
                                Here at LegalBrief, we believe that the legal system
                                should be something that protects and represents everyone.
                                In order to achieve this, it needs to be accessible to everyone, 
                                not just those who have access to legal representation
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
                            Provide nearby resources that 
                            match each individual situation in 
                            an accessible manner. We want to provide users with a 
                            seamless diagnostic to identify and 
                            provide the applicable legislation.
                        </p>
                        <h2 id = 'core-value-2'>Education</h2>
                        <p id = 'core-content-2'> 
                        </p>
                    </div>
                    <div id = 'executive-team'>
                        <h1 id = 'executive-title'>Executive Team</h1>
                        <div id = 'julian-picture'>pic</div>
                        <h3 id = 'founder-title'>Julian Jenkins Founder/ CEO</h3>
                        <p id = 'founder-bio'>
                            Julian Jenkins is our Founder and brought a plethora of experience to LegalBrief. 
                            With experience in the professional sports industry facilitating team operations and 
                            working with a major Legal firm in Vancouver, British Columbia managing, and facilitating a 
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