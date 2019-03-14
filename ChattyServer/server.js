// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

let id = 0;
const colours = ['#097f09', '#4776b4', '#ff1493', '#ffa500'];
// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.user = {
    id: ++id,
    colour: colours[Math.floor(Math.random()*4)]
    };

  const numUsersMsg = {
    type: 'userCountChanged',
    userCount: wss.clients.size
  }

  wss.clients.forEach(function each(client) {
    if (client.readyState === client.OPEN) {
      client.send(JSON.stringify(numUsersMsg));
    }
  });

  ws.on('message', (incomingData) => {
    const postObject = JSON.parse(incomingData);
    postObject.id = uuidv1();
    if (postObject.type === 'postMessage') {
      postObject.type = 'incomingMessage';
      postObject.colour = { color: ws.user.colour };
    } else if (postObject.type === 'postNotification') {
      postObject.type = 'incomingNotification';
    }
    wss.clients.forEach(function each(client) {
      if (client.readyState === client.OPEN) {
        client.send(JSON.stringify(postObject));
      }
    });
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected')

    numUsersMsg.userCount = wss.clients.size;
    wss.clients.forEach(function each(client) {
      if (client.readyState === client.OPEN) {
        client.send(JSON.stringify(numUsersMsg));
      }
    });
  });
});