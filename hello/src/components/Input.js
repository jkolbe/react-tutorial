import React, { Component } from 'react';

class Input extends Component {
  render() {

    return (
      <div className="newExc">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor={this.props.id}> Enter your new excuse: </label>
            <input className="form-control" type={this.props.type} id={this.props.id} name={this.props.id} />
          </div>
        </form>
      </div>
    );
  }
}

export default Input;

