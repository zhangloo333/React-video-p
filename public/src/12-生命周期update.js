/**
讲一下生命周期

getDefaultProps --pros
constructor()  -- state`
componentWillMount() -- componentwill
render()  --render
componentDidMount() ---componentDidMount

更新的component
1.componentWillReceiveProps()
2.shouldComponentUpdate()
3.componentWillUpdate()
4.render()
5.componentDidUpdate()
*/

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MessageBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.killMyselt = this.killMyselt.bind(this);
    this.doUpdate = this.doUpdate.bind(this);

	}

  shouldComponentUpdate(nextProps,nextState) {
    console.log('shouldComponentUpdate');
    // if(nextState.count>3) return false;
    return true;
  }

  componentWillUpdate(nextProps,nextState) {
    console.log('componentWillUpdate');

  }
  componentDidUpdate(nextProps,nextState) {
    console.log('componentDidUpdate');

  }

  doUpdate() {
    this.setState({
      count: this.state.count+1
    })
  }

	killMyselt() {
		console.log('working');
			ReactDOM.unmountComponentAtNode(document.getElementById('app'));
				clearInterval(this.intervalId);

	}

	render() {
		console.log('render');
		return(
			<div>
				<h1>timer: {this.state.count}</h1>
				<button onClick={this.killMyselt}>uninstall this app</button>
        <button onClick={this.doUpdate}>update count</button>
        <SubMessage message ={this.state.count} />
			</div>
		)
	}
}

class SubMessage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProp) {
    console.log('sub component need get props' + nextProp);
  }
  shouldComponentUpdate(nextProp,nextState) {
    if(nextProp.message > 5) return false;
    return true;
  }

  render() {
    return(
      <h3>this is submessage{this.props.message}</h3>
    )
  }
}

ReactDOM.render(<MessageBox />, document.getElementById('app'),console.log("finish"));
