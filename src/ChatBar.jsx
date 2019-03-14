import React, { Component } from 'react';

export default class ChatBar extends Component {

  // Handle user submitted message and send to root app.jsx
  submitMsg = (event) => {
    if (event.keyCode == 13) {
      const urlRegex = /http.*(jpg|png|gif)$/;
      const newMessage = {
        username: this.props.currentUser,
        content: event.target.value
      };
      if (newMessage.content.match(urlRegex) !== null) {
        newMessage.imgUrl = newMessage.content.match(urlRegex)[0];
        newMessage.content = newMessage.content.replace(newMessage.imgUrl, '');
      }
      this.props.addMsg(newMessage);
      event.target.value = '';
    }
  }

  // Handle username change and send to root app.jsx
  submitUser = (event) => {
    if (event.keyCode == 13 && event.target.value !== this.props.currentUser) {
      const user = {
        content: `${this.props.currentUser} has changed their name to ${event.target.value}`,
        username: event.target.value
      };
      this.props.chgUser(user);
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" onKeyDown={this.submitUser} defaultValue={this.props.currentUser} placeholder="Your Name (Optional)" />
        <input className="chatbar-message" onKeyDown={this.submitMsg} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}