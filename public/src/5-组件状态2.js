import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ClickApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clickCount : 0
		}
		this.onEvent = this.onEvent.bind(this);
		this.onClear = this.onClear.bind(this);
	}

	onEvent() {
		this.setState({clickCount: this.state.clickCount+1});
	}
	onClear(){
		this.setState({clickCount: 0})
	}

	render() {
		return(
			<div>
				<h2> clicl app</h2>
				<button onClick ={this.onEvent}>Click Me!</button>
				<button onClick ={this.onClear}>Clear</button>
				<p>this is click count {this.state.clickCount}</p>
			</div>
		)
	}
}

ReactDOM.render(<ClickApp/>, document.getElementById('app'),console.log("finish"));
