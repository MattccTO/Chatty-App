import React, { Component } from 'react';

export default class ChatBar extends Component {
  submitMsg = (event) => {
    // this.props.addMsg()
    if (event.keyCode == 13) {
      const message = event.target.value;
      this.props.addMsg(message);
      event.target.value = '';
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.currentUser} placeholder="Your Name (Optional)" />
        <input className="chatbar-message" onKeyDown={this.submitMsg} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}