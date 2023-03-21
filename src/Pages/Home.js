import React from 'react';
import { Component } from 'react';
import '../Styling/Home.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Light from '../Assets/light.svg';
import Basics from '../Assets/basics.svg';
import Pencil from '../Assets/pencil.svg';
import Solution from '../Assets/solution.svg';
import Cons from '../Assets/home_cons.png';

class HomePage extends Component{
    render(){
        return(
            <div id = 'home-container'>
                <Navbar/>
                <div id = 'slogan'>
                    <h1 id = 'slogan-text'>Get Help Navigating the Complexities of the Canadian Justice System</h1>
                </div>
                <div id = 'goal'>
                    <div id = 'goal-right'>
                        This Is LegalBrief
                    </div>
                    <div id = 'goal-left'>
                        <p id = 'goal-content-1'>Here at LegalBrief, we want to provide the legal
                                                information that you may need to guide the various 
                                                legal situations you may come across in your life.
                        </p>
                        <p id = 'goal-content-2'>We understand how difficult times can leave people 
                                                not knowing their next steps. We want to provide users
                                                with the information they need in order to take the next 
                                                steps in their lives and provide the resources to be 
                                                successful in their ventures.  
                        </p>
                    </div>
                </div>
                <hr id = 'seperator'></hr>
                <h2 id = 'how-we-help-title'>How We Help</h2>
                <div id = 'how-we-help'>
                    <div id = 'hwh-icon-1'>
                        <img src = {Basics}></img>
                        <h4>Basics</h4>
                    </div>
                    <div id = 'hwh-icon-2'>
                        <img src = {Pencil}></img>
                        <h4>Questionnaire</h4>
                    </div>
                    <div id = 'hwh-icon-3'>
                        <img src = {Light}></img>
                        <h4>Resources</h4>
                    </div>
                    <div id = 'hwh-icon-4'>
                        <img src = {Solution}></img>
                        <h4>Solutions</h4>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;