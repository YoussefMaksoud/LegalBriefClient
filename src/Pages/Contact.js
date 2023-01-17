import {React, Component} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styling/Contact.css'
import Phone from '../Assets/phone.png';
import Email from '../Assets/emial.png';
import LinkedIn from '../Assets/linkedin.png';
import RequestHelpers from '../Helpers/RequestHelpers';
import GoogleAd from '../Components/GoogleAd';
import FaqPage from './Faq';

class ContactPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("Sent email");

        RequestHelpers.sendEmail(this.state);
    }


    render(){
        return(
            <div id = 'contact-container'>
                <Navbar/>
                <div id = 'contact-background'>
                    <h1 id = 'contact-title'>Contact Us</h1>
                </div>
                <FaqPage/>    
                <div>
                    <h2 id = 'any-questions'>Any Questions?</h2>
                    <div id = 'contact-content'>
                        <div id = 'contact-form-left'>
                            <form id = 'contact-form' onSubmit={this.handleSubmit}>
                                <label>
                                    First Name <br></br>
                                    <input className = 'cont-input' type = 'text' name = 'fname' onChange={this.handleChange}/>
                                </label>
                                <label>
                                    Last Name <br></br>
                                    <input type = 'text' name = 'lname' onChange={this.handleChange}/>
                                </label>
                                <label>
                                    Email <br></br>
                                    <input type = 'text' name = 'email' onChange={this.handleChange}/>
                                </label>
                                <label>
                                    Message <br></br>
                                    <textarea id = 'comments' type = 'text' name = 'message' onChange={this.handleChange} style={{color: "white"}}/>
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
                            <div id = 'ad-1'>
                                <GoogleAd slot = '6699527336'/>
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