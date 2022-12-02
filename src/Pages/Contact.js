import {React, Component} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styling/Contact.css'
import Phone from '../Assets/phone.png';
import Email from '../Assets/emial.png';
import LinkedIn from '../Assets/linkedin.png';

class ContactPage extends Component{
    render(){
        return(
            <div id = 'contact-container'>
                <Navbar/>
                <div id = 'contact-background'>
                    <h1 id = 'contact-title'>Contact Us</h1>
                </div>    
                <div>
                    <h2 id = 'any-questions'>Any Questions?</h2>
                    <div id = 'contact-content'>
                        <div id = 'contact-form-left'>
                            <form id = 'contact-form'>
                                <label>
                                    First Name <br></br>
                                    <input className = 'cont-input' type = 'text' name = 'First Name'/>
                                </label>
                                <label>
                                    Last Name <br></br>
                                    <input type = 'text' name = 'Last Name'/>
                                </label>
                                <label>
                                    Email <br></br>
                                    <input type = 'text' name = 'Email'/>
                                </label>
                                <label>
                                    Comments <br></br>
                                    <textarea id = 'comments' type = 'text' name = 'Comments'/>
                                </label>
                                <input id = 'sub' type = 'submit' value = 'SUBMIT'/>
                            </form>
                        </div>
                        <div id = 'point-of-contact'>
                            <h3 id = 'poc-title'>Points of Contact</h3>
                            <div className = 'poc-item'>
                                <div className = 'poc-icon'><img src = {Email}></img></div>
                                <div className = 'poc-content'>
                                    <h4 className = 'poc-type'>Email</h4>
                                    <h4 className = 'poc'>julianjenkins9@gmail.com</h4>
                                </div>
                            </div>
                            <div className = 'poc-item'>
                                <div className = 'poc-icon'><img src = {LinkedIn}></img></div>
                                <div className = 'poc-content'>
                                    <h4 className = 'poc-type'>LinkedIn</h4>
                                    <h4 className = 'poc'>https://www.linkedin.com/in/julian-jenkins-3645721a4/</h4>
                                </div>
                            </div>
                            <div className = 'poc-item'>
                                <div className = 'poc-icon'><img src = {Phone}></img></div>
                                <div className = 'poc-content'>
                                    <h4 className = 'poc-type'>Phone Number</h4>
                                    <h4 className = 'poc'>+1 (403) 999-9720</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default ContactPage;