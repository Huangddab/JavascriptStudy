import React, { Component } from "react";

export default class App extends Component {
  myRef = React.createRef();

  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }

  handleClick = () => {
    console.log("click", this.myRef.current.value);
  };
}

// 现在的版本不支持
