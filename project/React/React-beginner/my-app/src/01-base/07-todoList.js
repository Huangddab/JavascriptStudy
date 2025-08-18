import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [], // 存储待办事项的数组
    inputValue: "", // 存储输入框的值
  };

  handleDelete = (index) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        />
        <button
          onClick={() => {
            if (this.state.inputValue.trim()) {
              this.setState({
                todos: [...this.state.todos, this.state.inputValue],
                inputValue: "", // 清空输入框
              });
            }
          }}
        >
          添加待办事项
        </button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              <span dangerouslySetInnerHTML={{ __html: todo }}></span>
              <button onClick={() => this.handleDelete(index)}>删除</button>
            </li>
          ))}
          {this.state.todos.length === 0 && <div>暂无待办事项</div>}
        </ul>
      </div>
    );
  }
}
