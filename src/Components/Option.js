import {React, Component} from 'react';
import '../Styling/Option.css';
import Collapsible from 'react-collapsible';

class Option extends Component{
    render(){
        return(
                <div id = "opt-cont">
                        <div id = 'opt-name' onClick = {this.props.onClick}>{this.props.option_name}</div>
                        <div id = "check"></div>
                        <Collapsible contentInnerCLassName = 'content' classParentString = "op-container" trigger = "More-Info">
                            <div id = 'op-desc'>{this.props.option_description}</div>
                        </Collapsible>  
                </div>
                
        )
    }
}

export default Option;