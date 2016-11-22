import React, { Component } from 'react';

class OutputArea extends Component {
  render() {
    return (
    	<div id="yourExcuse">{this.props.excuse}</div>
    );
  }
}

export default OutputArea;

