import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class DeletNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
      e.target.previousSibling.remove();
      this.setState({flag:false});
  }

  render() {
    return(
      <div>
          <h4>this is for deleteNode</h4>
          <button onClick={this.onClick}>delete</button>
          {
            this.state.flag ?
              <p>this is ture</p>
            :
              <p>this is false</p>

          }
      </div>
    )
  }
}

ReactDOM.render(<DeletNode/>, document.getElementById('app'),console.log("finish"));
