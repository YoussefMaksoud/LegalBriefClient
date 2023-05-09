import React, { Component } from 'react';
import '../Styling/Option.css';
import Modal from './Modal';
import parse from 'html-react-parser';

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="opt-cont">
        <div id="opt-name" onClick={this.props.onClick}>{this.props.option_name}</div>
        <div id="check"></div>
        <Modal style= "text-align:right" option_name={this.props.option_name} option_description={parse(this.props.option_description)}></Modal>
      </div>
    );
  }
}

export default Option;
