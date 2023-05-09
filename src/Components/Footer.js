import React, { Component } from 'react';
import '../Styling/Footer.css';
import { Link } from 'react-router-dom';
import Phone from '../Assets/phone.svg';
import Email from '../Assets/email.svg';
import LinkedIn from '../Assets/linkedin.svg';

class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
        <div id="footer-top">
          <div id="footer-left">
            <h2 id="footer-title-left">ABOUT</h2>
            <p id="footer-content-left">
              At LegalBrief, we want to make Legal information accessible to everyone regardless of economic resources, prior knowledge, or familiarity with legislation.
            </p>
          </div>
          <div id = 'footer-middle'>
          <h2 id="footer-title-middle">LEGAL ACTION</h2>
          <form id = 'footer-content-middle' onSubmit={this.handleSubmit}>
                                    <label>
                                        First Name <br></br>
                                        <input className = 'form-input' type = 'text' name = 'fname' onChange={this.handleChange}/>
                                    </label>
                                    <label>
                                        Last Name <br></br>
                                        <input className = 'form-input' type = 'text' name = 'lname' onChange={this.handleChange}/>
                                    </label>
                                    <label>
                                        Email <br></br>
                                        <input className = 'form-input' type = 'text' name = 'email' onChange={this.handleChange}/>
                                    </label>
                                    <label>
                                        Message <br></br>
                                        <textarea id = 'comm' type = 'text' name = 'message' onChange={this.handleChange}/>
                                    </label>
                                    <input id = 'sub' type = 'submit' value = 'SUBMIT'/>
                                </form>
          </div>
          <div id="footer-right">
            <h2 id="footer-title-right">QUICK LINKS</h2>
            <ul id="footer-content-right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/solution">Solution</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div id="footer-bottom">
          <div id="footer-icon-1">
            <img src={Phone} alt="Phone" />
          </div>
          <div id="footer-icon-2">
            <img src={Email} alt="Email" />
          </div>
          <div id="footer-icon-3">
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
