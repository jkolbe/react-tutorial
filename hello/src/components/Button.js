import React, { Component } from 'react';

class Button extends Component {
  

  render() {

  	var boostrapClass = '';

  	if(this.props.datatype === 'funny'){
  		boostrapClass = 'btn-warning';
  	} else if (this.props.datatype === 'bad') {
		boostrapClass = 'btn-danger';
  	}
    else if (this.props.datatype === 'good') {
      boostrapClass = 'btn-success';
    } else {
  		boostrapClass = 'btn-primary';
  	}

    return (
      <button id={this.props.datatype} onClick={this.props.clickEvent} className={boostrapClass + " btn btn-default"}> {this.props.name} </button>
    );
  }
}

export default Button;