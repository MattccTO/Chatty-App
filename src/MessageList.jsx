import React, { Component } from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx'

export default class MessageList extends Component {
  render() {
    const createMessages = this.props.message.map(message => {
      if (message.type == 'incomingMessage') {
        return <Message key={message.id} message={message} />
      } else if (message.type === 'incomingNotification') {
        return <Notification key={message.id} message={message} />
      }
    });

    return (
      <main className='messages'>
        {createMessages}
      </main>
    );
  }
}
