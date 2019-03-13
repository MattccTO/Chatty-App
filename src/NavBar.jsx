import React, { Component } from 'react';

export default class MessageList extends Component {
  render() {

    return (
      <nav className='navbar'>
        <a href='/' className='navbar-brand'>Chatty</a>
        <span className='user-counter'>{ this.props.userCount } user{this.props.userCount === 1 ? '' : 's'} online</span>
      </nav>
    );
  }
}
