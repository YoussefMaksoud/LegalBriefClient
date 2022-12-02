import {React, Component} from 'react';
import '../Styling/Faq.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

class FaqPage extends Component{
    render(){
        return(
            <div id = 'faq-container'>
                <Navbar/>
                <div></div>
                <Footer/>
            </div>
        )
    }
}

export default FaqPage;