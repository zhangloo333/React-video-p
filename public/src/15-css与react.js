import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends Component {



  render() {
    const divStyle= {
      color: 'red',
      background:'yellow'
    }
    const pstyle = {
      color: 'blue',
      background: 'red'
    }
    return(
      <div style={divStyle}>
        Hello {this.props.name}
        <p >you are sb</p>
      </div>
    )
  }
}

ReactDOM.render(<HelloMessage name ={"lei"} />, document.getElementById('app'));
