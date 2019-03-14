import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './NavBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Bub',
      message: [],
      userCount: 0
    };
  }

  // Function to handle user name change
  changeUser = (user) => {
    const userNotification = user;
    userNotification.type = 'postNotification';
    this.setState({ currentUser: user.username });
    this.socket.send(JSON.stringify(userNotification));
  }

  // Function to handle a new user message
  addNewMessage = (message) => {
    const newMessage = message;
    newMessage.type = 'postMessage';
    this.socket.send(JSON.stringify(newMessage));
  };

  componentDidMount() {
    this.socket = new WebSocket('ws:localhost:3001');
    this.socket.addEventListener('open', (event) => {
      console.log('Connected to server!');
    });

    // Handle message broadcasts from web socket server
    this.socket.addEventListener('message', (event) => {
      const newMessage = JSON.parse(event.data);
      if (newMessage.type === 'userCountChanged') {
        this.setState({ userCount: newMessage.userCount })
      } else {
        const oldMessage = this.state.message;
        this.setState({ message: [...oldMessage, newMessage] });
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <NavBar userCount={this.state.userCount} />
        <MessageList message={this.state.message} />
        <ChatBar currentUser={this.state.currentUser} addMsg={this.addNewMessage} chgUser={this.changeUser} />
      </div>
    );
  }
}
