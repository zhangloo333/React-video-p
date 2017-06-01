import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class FormApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputVaule: 'input value',
			selectValue: 'A',
			radioValue:'B',
			textareaValue: 'some tex here,......'
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var formDate = {
			input: this.ref.goodInput.value;
			select: this.ref.goodSelect.value
			textarea: this.ref.goodTextarea.value
		}

		console.log('the form result is:')
		console.log(formDate);
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input type='text' ref = "goodInput" defaultValue={this.state.inputVaule}/> <br/>

				<select defaultValue ={this.state.selectValue} ref = "goodSelect">
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
					<option value="D">D</option>
					<option value="E">E</option>
				</select>
				<br />

				<p>radio button</p>
				<input onChange ={handleRadio} name="goodRadio" type="radio" value="A" />
				<input onChange ={handleRadio} name="goodRadio" type="radio" defaultChecked vaule="B"/>
				<input onChange ={handleRadio} name="goodRadio" type="radio" vaule="C"/>
				<br />
				<p>this is checkbox</p>
				<input onChange = {handleCheck} name="goodRadio" type="checkbox" vaule="A"/>
				<input onChange = {handleCheck} name="goodRadio" type="checkbox" vaule="B"/>
				<input onChange = {handleCheck} name="goodRadio" type="checkbox" defaultChecked vaule="C"/>

				<br/>
				<textarea defualtVonChange ={handleRadio}alue={this.state.textareaValue} ref = "goodTextarea"></textarea>
				<button type="submit">submit</button>
			</form>
		)
	}
}
ReactDOM.render(<FormApp/>, document.getElementById('app'),console.log("finish"));