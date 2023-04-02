import {React, Component} from 'react';
import '../Styling/FaqItem.css';
import Collapsible from 'react-collapsible';

class FaqItem extends Component{
    render(){
        return(
            <Collapsible classParentString ='faq-item-container' trigger = "Question">
                <p id = 'response'>response</p>
            </Collapsible>
        )
    }
}

export default FaqItem;