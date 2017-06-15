import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MessageBox extends Component {

	alertMe() {
		alert('you click me');
	}

	render() {
		var Submessages = [];

		for(var ii = 0; ii < 10 ; ii++) {
			Submessages.push(<Submessage key = {"subtitle" + ii}/>)
		}

		return (
			<div>
				<h1 onClick = {this.alertMe}>this is first test </h1>
				{Submessages}
			</div>
		)
	}
}

class Submessage extends Component {
	render(){ 
		return(
			<div>
				<h3>this is Submessage</h3>
				<Footer/>
			</div>
		)
	}
}

class Footer extends Component {
	render() {
		return (
			<small>there is we are</small>
		)
	}
}

ReactDOM.render(<MessageBox/>, document.getElementById('app'),console.log("finish"));
