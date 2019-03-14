import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div>
        <div className='message'>
          <span className='message-username' style={this.props.message.colour}>{this.props.message.username}</span>
          <span className='message-content'>{this.props.message.content}</span>
          {this.props.message.imgUrl ? <img className='message-img' src={this.props.message.imgUrl} width='60%' /> : ''}
        </div>
      </div>
    );
  }
}