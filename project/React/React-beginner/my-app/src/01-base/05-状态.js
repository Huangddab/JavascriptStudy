import React, { Component } from "react";

export default class App extends Component {
  state = {
    value: "收藏",
    isShow: false,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              //   value: "取消收藏",
              isShow: !this.state.isShow,
            });
          }}
        >
          {/* {this.state.value} */}
          {this.state.isShow ? "取消收藏" : "收藏"}
        </button>
      </div>
    );
  }

  handleClick = () => {
    console.log("click", this.myRef.current.value);
  };
}
