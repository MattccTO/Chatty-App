Chatty-App
=====================

Chatty is a primarily client-side single page chat app built with ReactJS.

### Setup

Clone the project and install the dependencies for both the root project and and the server.

In the root project folder, install dependencies and start the Webpack-Dev-Server:
```
npm install
npm start
```

In the ./ChattyServer folder, install dependencies and start the Web Socket Server:
```
npm install
npm start ws
```

### Usage/Functionality

Access Chatty app by opening a web browser and navigating to localhost:3000/.

On loading the chat app, users are given the default username ('Bub') and randomly assigned a colour which is applied to their username in the chat window. This colour will remain consistent to the user if they change their name.

Users can change their username by updating the bottom left field and pressing 'ENTER'. A notification will be broadcast to all users announcing the updated name.

Pic Here.

Users can submit messages by entering text in the message field and pressing 'ENTER'. Submitted messages are automatically broadcast to all users, and their pages will be updated in real time.

Pic Here.

Users can submit images by including a valid URL in their text message.

Pics Here

Users can submit gifs in the same way.

Gif here.

The app also keeps a count of live users in the upper right. The counter is automatically updated for all users whenever someone joins of leaves the chat app.


### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [node-sass](https://github.com/sass/node-sass)
* [express](https://expressjs.com/)
* [uuid](https://www.npmjs.com/package/uuid)
* [ws](https://www.npmjs.com/package/ws)

