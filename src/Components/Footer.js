import {React, Component} from 'react';
import '../Styling/Footer.css';
import {Link} from 'react-router-dom';
import Phone from '../Assets/phone.png';
import Email from '../Assets/emial.png';
import LinkedIn from '../Assets/linkedin.png';

class Footer extends Component{
    render(){
        return(
            <div id = 'footer-container'>
                <div id = 'footer-top'>
                    <div id = 'footer-left'>
                        <h2 id = 'footer-title-left'>ABOUT</h2>
                        <p id = 'footer-content-left'>
                            At LegalBrief, we want to make Legal 
                            information accessible to everyone 
                            regardless of economic resources,
                            prior knowledge, or familiarity with 
                            legislation. 
                        </p>
                    </div>
                    <div id = 'footer-right'>
                    <h2 id = 'footer-title-right'>QUICK LINKS</h2>
                    <ul id = 'footer-content-right'>
                        <li>
                            <Link to = '/'>Home</Link>
                        </li>
                        <li>
                            <Link to = '/solution'>Solution</Link>
                        </li>
                        <li>
                            <Link to = '/about'>About</Link>
                        </li>
                        <li>
                            <Link to = '/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to = '/faq'>FAQs</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <hr></hr>
                <div id = 'footer-bottom'>
                    <div id = 'placeholder'>none</div>
                    <div id = 'footer-icon-1'><img src = {Phone}></img></div>
                    <div id = 'footer-icon-2'><img src = {Email}></img></div>
                    <div id = 'footer-icon-3'><img src = {LinkedIn}></img></div>
                </div>
            </div>
        )
    }
}

export default Footer;