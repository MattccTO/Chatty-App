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

  addNewMessage = (message) => {
    const newMessage = {
      type: 'incomingMessage',
      username: this.state.currentUser,
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
      const oldMessage = this.state.message;
      this.setState({ message: [...oldMessage, newMessage] });
    });
  }

  render() {
    return (
      <div className='container'>
        <MessageList message={this.state.message} />
        <ChatBar currentUser={this.state.currentUser} addMsg={this.addNewMessage} />
      </div>
    );
  }
}
