import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import OutputArea from './components/OutputArea';
import Button from './components/Button';
import Input from './components/Input';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentExcuse: 'test excuse',
      excuses : {
        new: [],
        good: ['I have to back up my wife and kids.', 'My kids are on drugs / sedated.'],
        bad:['bad', 'badbad', 'badbadnotgood', 'WTF'],
        funny:['funny', 'jk', 'lol']
      }
    }
  }

  handleClick(e){
    var type = e.target.id;
    var randomExcuse = this.state.excuses[type][Math.floor(Math.random() * this.state.excuses[type].length)];
    this.setState({currentExcuse: randomExcuse});
  }

  addExcuse(e){
    var newExcuse = document.getElementById('myNewExcuse');
    this.state.excuses['new'].push(newExcuse.value);
    console.log(this.state.excuses);
  }

  componentDidMount(){
    console.log('a');
    this.serverRequest = fetch('http://localhost:3000/data/data.json').then(function(response) {
      console.log(response);
    }).catch(function(err) {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Header />
            <OutputArea excuse={this.state.currentExcuse}/>
            <Button clickEvent={this.handleClick.bind(this)} name="Good :)" datatype="good" />
            <Button clickEvent={this.handleClick.bind(this)} name="Bad :/" datatype="bad" />
            <Button clickEvent={this.handleClick.bind(this)} name="Funny :D" datatype="funny" />

            <Input type="text" id="myNewExcuse" />
            <Button clickEvent={this.addExcuse.bind(this)} name="Submit" />
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;

