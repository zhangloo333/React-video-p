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
			select: ReactDOM.findDOMNode(this.refs.goodSelect).childNodes[1].value,
			redio:this.state.radioValue,
			check: this.state.checkValues,
			textarea: this.refs.goodTextarea.value
		}
		this.refs.goodCheck.saySomething();

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
        <h4>直接focus</h4>
        <input type='text' ref = {function(comp) {
          ReactDOM.findDOMNode(comp).focus();
        }} defaultValue={this.state.inputVaule}/> <br/>

				<h4>input feild</h4>
				<input type='text' ref = "goodInput" defaultValue={this.state.inputVaule}/> <br/>

        <SelectBox ref = "goodSelect" selectValue={this.state.selectValue}/>


				<br />
				<RadioButton  handleRadio = {this.handleRadio}/>

				<CheckBox ref='goodCheck'handleCheck={this.handleCheck}/>

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

class SelectBox extends Component {
    constructor(props){
  		super(props);
      this.state ={
        selectValue: this.props.selectValue
      }
  	}

    render() {
      var storage = [];
  		var name = ['A','B','C','E','F'];
  			for(var ii=0; ii< name.length; ii++) {
  				storage.push(<option key = {ii} value={name[ii]}>{name[ii]}</option>);
  			}
      return(
        <div>
        <h4>select box feild</h4>
  				<select defaultValue ={this.state.selectValue}>
  				    {storage}
  				</select>
        </div>
      )
    }
}

class RadioButton extends Component {
	constructor(props){
		super(props);
	}
	render() {
		var storage = [];
		var name = ['A','B','C'];
			for(var ii=0; ii< name.length; ii++) {
				storage.push(<input key={ii} onChange ={this.props.handleRadio} name="goodRadio" type="radio" value={name[ii]} />)
			}
		return(
				<div>
					<h4>optimatize radio button</h4>
					<p>A B C</p>
					{storage}
					<br />
				</div>
		)
	}
}

class CheckBox extends Component {
      constructor(props) {
        super(props);
      }
      saySomething() {
          alert("you have submits");
      }

      render() {
        let storage = [];
        let index = ['A','B','C'];

        for(var ii = 0; ii < index.length; ii++) {
              storage.push(<input key={ii} onChange = {this.props.handleCheck} name="goodRadio" type="checkbox" value={index[ii]}/>)
        }
        return(
          <div>
              <h4>this new is checkbox</h4>
              <p>A B C</p>
              {storage}
          </div>
        )
      }

}




ReactDOM.render(<FormApp/>, document.getElementById('app'),console.log("finish"));
