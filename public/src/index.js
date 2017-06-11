import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class DeletNode extends Component {

  render() {
    return(
      <div>
          <h4>this is for deleteNode</h4>
          <button onClick={function(e){
            e.target.previousSibling.remove();
          }}>delete</button>
      </div>
    )
  }
}

ReactDOM.render(<DeletNode/>, document.getElementById('app'),console.log("finish"));
