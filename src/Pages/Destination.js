import {React, Component} from 'react';
import '../Styling/Destination.css'
import GoogleAd from '../Components/GoogleAd';

class Destination extends Component{
    render(){
        return(
            <div id = 'dest-container'>
                <div id = 'dest-left'>
                    <h1 id = 'dest-title'>Destination title</h1>
                    <hr id = 'dest-break'></hr>
                    <div id = 'dest-description'>Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took 
                    a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with 
                    desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                    </div>
                    <button id = 'close'>close</button>
                </div>
                <div id = 'dest-right'>
                    ad
                    <GoogleAd slot = "8950518636"/>
                </div>
            </div>
        );
    }
}

export default Destination;