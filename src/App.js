import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Timer from './components/Timer';

const prettyMs = require('pretty-ms');

class App extends Component {
  state = {
  	time:60*25*1000,
  	start: Date.now(),
    on:false,
    alertOn:false,
    alert:null
  };


  
  startShortBreak = this.startShortBreak.bind(this);
  startLongBreak = this.startLongBreak.bind(this);
  startPomodoro = this.startPomodoro.bind(this);
  tick = this.tick.bind(this);

  startShortBreak(){
    this.setState({
      on:true,
      start: Date.now(),
      time:60*5*1000,
      length:60*5*1000,
      timer: setInterval(this.tick, 1),
      alertOn:false,
      alert:(<div class="alert alert-primary" role="alert">
            Now that you're rested take another crack at it!
            </div>)

    });
  }

    startLongBreak(){
    this.setState({
      on:true,
      start: Date.now(),
      time:60*10*1000,
      length:60*10*1000,
      timer: setInterval(this.tick, 1),
      alertOn:false,
      alert:(<div class="alert alert-primary" role="alert">
            Now that you're rested take another crack at it!
            </div>)

    });
  }

  startPomodoro(){
    this.setState({
      on:true,
      start: Date.now(),
      time:60*25*1000,
      length:60*25*1000,
      timer: setInterval(this.tick, 1),
      alertOn:false,
      alert:(<div class="alert alert-primary" role="alert">
            Good Work! Why don't you take a break?
            </div>
)
      });
  }
  tick(){
    this.setState({
        time:(this.state.length - (Date.now() - this.state.start))
      })
    if(this.state.time <= 0){
      this.setState({
        time:0,
        alertOn:true})
      clearInterval(this.state.timer);

    }
  }

  render() {
    return (
      <div className="App">
      {this.state.alertOn && this.state.alert}
      <Input 
      startShortBreak = {this.startShortBreak} 
      startLongBreak = {this.startLongBreak} 
      startPomodoro={this.startPomodoro}/>
      <h3>time left: { prettyMs(this.state.time,{verbose:false},{keepDecimalsOnWholeSeconds:false})}</h3>
      </div>
    );
  }
}

export default App;
