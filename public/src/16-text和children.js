import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ChildText extends Component {

  render(){
    console.log(this.props.children[1]);
    return(
      <div>
        <h1>{this.props.text}</h1>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <div>
  <ChildText text="hello word">
   <p>this is a children</p>
   <p>this is second children</p>
  </ChildText>
</div>
,document.getElementById('app'))
