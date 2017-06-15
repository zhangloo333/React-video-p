import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TimeCounter extends Component {
  constructor(props) {
    super(props);
    this.state= {
      counter: 0
    }
  }

  tick() {
    this.setState((prevState) => ({
      counter:prevState.counter+1
    }))
  }

  componentDidMount(){
    this.timeStamp = setInterval(()=>this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timeStamp)
  }

  render(){
    return(
      <div>Time counter: {this.state.counter}</div>
    )
  }
}

ReactDOM.render(<TimeCounter />, document.getElementById('app'),console.log("finish"));
