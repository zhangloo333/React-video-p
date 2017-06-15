import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MessageBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isVisible: true,
			titleMessage: 'this is state' 
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
				<h1 onClick = {this.alertMe}>{this.state.titleMessage}</h1>
				<Submessage/>
			</div>
		)
	}
}

ReactDOM.render(<MessageBox/>, document.getElementById('app'),console.log("finish"));
