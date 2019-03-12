import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import messagesStatic from './MessageStaticData.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Dev',
      message: messagesStatic
    };
  }

  addNewMessage = (message) => {
      const newMessage = {
        id: (this.state.message.length + 1),
        type: 'incomingMessage',
        username: this.state.currentUser,
        content: message
      };
      const messages = this.state.message.concat(newMessage);
      this.setState({message: messages});
  };

  componentDidMount() {
    // // console.log('componentDidMount');
    // setTimeout(() => {
    //   console.log('Simulating incoming message');
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {
    //     id: 8,
    //     type: 'incomingMessage',
    //     username: 'Michelle',
    //     content: 'Hello there!'
    //   };
    //   const messages = this.state.message.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({message: messages})
    // }, 3000);
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
