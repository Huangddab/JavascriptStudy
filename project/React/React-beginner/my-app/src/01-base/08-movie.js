import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, text: "肖申克的救赎" },
        { id: 2, text: "霸王别姬" },
        { id: 3, text: "这个杀手不太冷" },
      ],
      mume: [
        { id: 1, text: "电影" },
        { id: 2, text: "影院" },
        { id: 3, text: "我的" },
      ],
    };
  }

  render() {
    return (
      <div>
        <ul className="flex fixed bottom-0 left-0 h-[50px] line-height-[50px] bg-gray-200">
          {this.state.mume.map((item) => (
            <li className="flex text-center" key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
