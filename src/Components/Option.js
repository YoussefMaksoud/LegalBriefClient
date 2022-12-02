import {React, Component} from 'react';
import '../Styling/Option.css';

class Option extends Component{
    render(){
        return(
            <div id = 'op-container'>
                <div id = 'check'></div>
                <div id = 'op-content'>
                    <h3 id = 'op-name'>Option Name</h3>
                    <p id = 'op-description'>Option Description</p>
                </div>
                <div id = 'more-info'>More Info</div>        
            </div>
        )
    }
}

export default Option;