import {React, Component} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Option from '../Components/Option';
import '../Styling/Solution.css';


class SolutionPage extends Component{
    render(){
        return(
            <div id = 'sol-container'>
                <Navbar/>
                <div id = 'option-container'>
                    <h1>Questionnaire</h1>
                    <h2>Please select the option that applies best:</h2>
                    <Option/>
                    <Option/>
                    <Option/>
                    <Option/>
                    <Option/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default SolutionPage;