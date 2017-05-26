import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MessageBox extends Component {

	alertMe() {
		alert('you click me');
	}

	render() {
		return (
			<div>
				<h1 onClick = {this.alertMe}>this is first test </h1>
			</div>
		)
	}
}

ReactDOM.render(<MessageBox/>, document.getElementById('app'),console.log("finish"));
