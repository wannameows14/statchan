import React, {Component} from 'react';

import InitialForm from './initial/InitialForm.js';

const style = {
  margin: 'auto',
  width: 800,
  position: 'absolute',
  top: window.innerHeight/2 - 260,
  left: 0,
  right: 0,
  zIndex: 20000
}

export default class Master extends Component {

  constructor(props){
    super(props);
    this.state = {
      child: []
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e){
    if (e.key == "s" && e.altKey) {
      this.setState({ child: <InitialForm /> });
    } else if (e.code == "Escape") {
      this.setState({ child: [] });
    }
  }

  componentWillMount(){
    window.addEventListener("keydown", this.handleKeyDown, true);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div style={style}>
        {this.state.child}
      </div>
    )
  }
}
