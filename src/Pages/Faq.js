import {React, Component} from 'react';
import '../Styling/Faq.css'
import FaqItem from '../Components/FaqItem';


class FaqPage extends Component{
    render(){
        return(
            <div id = 'faq-container'>
                <h1 id = 'faq-title'>Frequently asked questions</h1>
                <div id = 'faq-content'>
                    <div id = 'left-faq'>
                        <FaqItem/>
                        <FaqItem/>
                        <FaqItem/>
                        <FaqItem/>
                    </div>
                    <div id = 'right-faq'>
                        <FaqItem/>
                        <FaqItem/>
                        <FaqItem/>
                        <FaqItem/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FaqPage;