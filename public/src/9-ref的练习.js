import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class FormApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVaule: 'input value',
			selectValue: 'A',
			radioValue:'B',
			checkValues:[],
			textareaValue: 'some tex here,......'
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRadio = this.handleRadio.bind(this);
		this.handleCheck = this.handleCheck.bind(this);

	}

	handleSubmit(e) {
		e.preventDefault();
		var formDate = {
			input: this.refs.goodInput.value,
			select: this.refs.goodSelect.value,
			redio:this.state.radioValue,
			check: this.state.checkValues,
			textarea: this.refs.goodTextarea.value
		}
		console.log('the form result is:')
		console.log(formDate);
	}

	handleRadio(e){
		this.setState({radioValue: e.target.value});
	};

	handleCheck(e){
			var checkValues = this.state.checkValues.slice();
			var newValue = e.target.value;
			console.log(e.target.value);
			var index = checkValues.indexOf(newValue);
			if(index == -1) {
				checkValues.push(newValue);
			} else{
				checkValues.splice(index,1);
			}
			this.setState({
				checkValues:checkValues,
			})
	};

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<h4>input feild</h4>
				<input type='text' ref = "goodInput" defaultValue={this.state.inputVaule}/> <br/>

				<h4>select box feild</h4>
				<select defaultValue ={this.state.selectValue} ref = "goodSelect">
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
					<option value="D">D</option>
					<option value="E">E</option>
				</select>

				<br />

				<h4>radio button</h4>
				<p>A B C</p>
				<input onChange ={this.handleRadio} name="goodRadio" type="radio" value="A" />
				<input onChange ={this.handleRadio} name="goodRadio" type="radio" defaultChecked vaule="B"/>
				<input onChange ={this.handleRadio} name="goodRadio" type="radio" vaule="C"/>
				<br />


				<h4>this new is checkbox</h4>
					<p>A B C</p>
					<input onChange = {this.handleCheck} name="goodRadio" type="checkbox" value="A"/>
					<input onChange = {this.handleCheck} name="goodRadio" type="checkbox" value="B"/>
					<input onChange = {this.handleCheck} name="goodRadio" type="checkbox" value="C"/>
				<br/>

				<h4>this is textarea feild</h4>
				<textarea defualtValue={this.state.textareaValue} ref = "goodTextarea"></textarea>
				<div>
					<button type="submit">submit</button>
				</div>
			</form>
		)
	}
}




ReactDOM.render(<FormApp/>, document.getElementById('app'),console.log("finish"));
