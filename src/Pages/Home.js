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
import Canada from '../Assets/canada.png';
import USA from '../Assets/usa.png';
import FlipCard from '../Components/FlipCard';
import { Link } from 'react-router-dom';

class HomePage extends Component{
    render(){
        return(
            <div id = 'home-container'>
                <Navbar/>
                <div id = 'slogan'>
                    <h1 id = 'slogan-text'>Navigate the Complexities of the Canadian Justice System</h1>
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
                        <FlipCard src = {Basics} name = 'Basics' info = 
                        ''
                        />
                    </div>
                    <div id = 'hwh-icon-2'>
                        <FlipCard src = {Pencil} name = 'Questionnaire' info = 
                        'Using our questionnaire, we are able to identify the applicable laws and provide beneficial information to users'
                        />
                    </div>
                    <div id = 'hwh-icon-3'>
                        <FlipCard src = {Light} name = 'Resources' info = 
                        'Based on your answers, we provide options for the potential next steps in the users legal journey'
                        />
                    </div>
                    <div id = 'hwh-icon-4'>
                        <FlipCard src = {Solution} name = 'Solution' info =
                        'We provide the necessary options to allow users to decide what the most beneficial next steps to solve their respective situations'
                        />
                    </div>
                </div>
                <hr id = 'seperator'></hr>
                <h1 id = 'survey-header'>Need assistance diagnosing a legal problem? Where are you located</h1>
                <div id = 'to-survey'>
                    
                    <Link id = 'canada' to = '/solution'><img src = {Canada}></img></Link>
                    
                    <Link id = 'usa' to = '/solution'><img src = {USA}></img></Link>
                </div>
                <hr id = 'seperator'></hr>
                <Footer/>
            </div>
        )
    }
}

export default HomePage;