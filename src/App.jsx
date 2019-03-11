import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Message />
        <ChatBar />
      </div>
    );
  }
}
