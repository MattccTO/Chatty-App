import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import messagesStatic from './MessageStaticData.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Dev',
      message: []
    };
  }

  changeUser = (user) => {
    const userNotification = user;
    userNotification.type = 'postNotification';
    this.setState({ currentUser: user.username });
    this.socket.send(JSON.stringify(userNotification));
  }

  addNewMessage = (message, user) => {
    const newMessage = {
      type: 'postMessage',
      username: user,
      content: message
    };
    this.socket.send(JSON.stringify(newMessage));
  };

  componentDidMount() {
    this.socket = new WebSocket('ws:localhost:3001');

    this.socket.addEventListener('open', (event) => {
      console.log('Connected to server!');
    });

    this.socket.addEventListener('message', (event) => {
      const newMessage = JSON.parse(event.data);
      console.log(newMessage);
      const oldMessage = this.state.message;
      this.setState({ message: [...oldMessage, newMessage] });
    });
  }

  render() {
    return (
      <div className='container'>
        <MessageList message={this.state.message} />
        <ChatBar currentUser={this.state.currentUser} addMsg={this.addNewMessage} chgUser={this.changeUser} />
      </div>
    );
  }
}
