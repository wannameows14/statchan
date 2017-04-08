import React from 'react'

import InitialForm from './initial/InitialForm'
import StatsTable from './table/StatsTable'

const style = {
  margin: 'auto',
  width: 800,
  position: 'absolute',
  top: window.innerHeight/2 - 100,
  left: 0,
  right: 0,
  zIndex: 20000
}

export default class Master extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      child: []
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e){
    if (e.code == "KeyS" && e.altKey) {
      this.setState({ child: (<InitialForm />) });
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
