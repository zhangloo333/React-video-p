/**
讲一下生命周期

getDefaultProps --pros
constructor()  -- state`
componentWillMount() -- componentwill
render()  --render
componentDidMount() ---componentDidMount
*/

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MessageBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			titleMessage: 'this is for test life cycle'
		}
	}

	componentWillMount() {
		console.log('compoenetWillMount');
	}

	componentDidMount(){
		console.log('compoenetDidMount');
	}

	render() {
		console.log('render');
		return(
			<div>
				<h1>{this.state.titleMessage}</h1>
			</div>
		)
	}
}



ReactDOM.render(<MessageBox />, document.getElementById('app'),console.log("finish"));
