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
		this.handleInput = this.handleInput.bind(this);
		this.handleSelect = this.handleSelect.bind(this);

	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('form submitting....');
		console.log(e);
	}

	handleInput(e) {
		this.setState({
			inputVaule: e.target.value,
		})
	}

	handleSelect(e) {
		this.setState({
			selectValue:e.target.value,
		})
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.inputVaule} onChange={this.handleInput}/> <br/>

				<select value ={this.state.selectValue} onChange={this.handleSelect}>
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
					<option value="D">D</option>
					<option value="E">E</option>
				</select>
				<br />

				<p>radio button</p>
				<input name="goodRadio" type="radio" value="A" />
				<input name="goodRadio" type="radio" defaultChecked vaule="B"/>
				<input name="goodRadio" type="radio" vaule="C"/>
				<br />
				<p>this is checkbox</p>
				<input name="goodRadio" type="checkbox" vaule="A"/>
				<input name="goodRadio" type="checkbox" vaule="B"/>
				<input name="goodRadio" type="checkbox" defaultChecked vaule="C"/>

				<br/>
				<textarea value={this.state.textareaValue} onChange={this.handleInput}></textarea>
				<button type="submit">submit</button>
			</form>
		)
	}
}
ReactDOM.render(<FormApp/>, document.getElementById('app'),console.log("finish"));