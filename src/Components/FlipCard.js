import '../Styling/FlipCard.css';
import {React, Component, useState} from 'react';
import ReactCardFlip from 'react-card-flip';


function FlipCard(props){
        const [flip, setFlip] = useState(false);
        return(
            <ReactCardFlip isFlipped={flip} 
            flipDirection="vertical">
            <div id = 'front' onClick={() => setFlip(!flip)}>
                <img id = 'icon' src = {props.src}></img>
                <h4 id = 'card-header'>{props.name}</h4>
            </div>
            <div id = 'back' onClick={() => setFlip(!flip)}>
                <h1>?</h1>
                <div id = 'info'>{props.info}</div>
            </div>
        </ReactCardFlip>
        )
    }

export default FlipCard;