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

	}



	componentWillMount() {
		console.log('compoenetWillMount');
		var self = this;

		this.intervalId = setInterval(function() {
			self.setState({
				count: self.state.count +1
			})
		},1000);
	}

	componentDidMount(){
		console.log('compoenetDidMount');
	}

	// componentWillMount(){
	// 	alert('I will be kill');
	// 	// clearInterval(this.intervalId);
	// }

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
			</div>
		)
	}
}

ReactDOM.render(<MessageBox />, document.getElementById('app'),console.log("finish"));
