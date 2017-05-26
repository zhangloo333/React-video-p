import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class MessageBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isVisible: true,
			// titleMessage: 'this is state',
			submessages: [
				'i can move',
				'the diverse move',
				'i do not want to talk, i need to go back to work....'
			] 
		};
		this.alertMe = this.alertMe.bind(this);//必须进行绑定
	}

	alertMe() {
			if(this.state.isVisible){
				this.setState({ isVisible: false});
			} else{
				this.setState({ isVisible: true});
			}
			
		}

	render() {
		var styleOb ={
			color:this.state.isVisible ? 'red' : 'yellow'
		}

		return (
			<div style = {styleOb}>
				{/*<h1 onClick = {this.alertMe}>{this.state.titleMessage}</h1>*/}
				<h1 onClick = {this.alertMe}>{this.props.title}</h1>
				<Submessage messages={this.state.submessages}/>
			</div>
		)
	}
}

class Submessage extends Component {
	constructor(props){
		super(props);

	}


	render() {
		var msgs = [];
		this.props.messages.forEach((msg,index) => {
			msgs.push(
				<p key={'keys' + index}>developers said: {msg}</p>
			)
		}) 

		return(
			<div>{msgs}</div>
		)
	}
}

Submessage.defaultProps = {
		messages:['this is defualt messages array']
};
Submessage.propTypes = {
		messages: PropTypes.array
};
var titlemessage = 'this is props title'

ReactDOM.render(<MessageBox title={titlemessage}/>, document.getElementById('app'),console.log("finish"));
