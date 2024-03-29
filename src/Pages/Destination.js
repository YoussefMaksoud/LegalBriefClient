import {React, Component} from 'react';
import '../Styling/Destination.css'
import GoogleAd from '../Components/GoogleAd';
// ES Modules
import parse from 'html-react-parser';

class Destination extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id = 'dest-container'>
                <div id = 'dest-left'>
                    <h1 id = 'dest-title'>{this.props.title}</h1>
                    <hr id = 'dest-break'></hr>
                    <div id = 'dest-description'>{parse(this.props.description)} </div>
                </div>
                <div id = 'dest-sep'></div>
                <div id = 'dest-right'>
                    ad
                    <GoogleAd slot = "8950518636"/>
                </div>
            </div>
        );
    }
}

export default Destination;