import {React, Component} from 'react';
import '../Styling/Option.css';

class Option extends Component{
    render(){
        return(
            <div id = 'op-container'>
                <div id = 'check'></div>
                <div id = 'op-content'>
                    <h3 id = 'op-name'>{this.props.option_name}</h3>
                    <p id = 'op-description'>{this.props.option_description}</p>
                </div>
                <div id = 'more-info'>More Info</div>        
            </div>
        )
    }
}

export default Option;