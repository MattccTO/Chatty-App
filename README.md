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

!['Username Change'](https://github.com/MattccTO/Chatty-App/blob/master/Docs/Screenshot%20from%202019-03-14%2015-58-08.png?raw=true)

Users can submit messages by entering text in the message field and pressing 'ENTER'. Submitted messages are automatically broadcast to all users, and their pages will be updated in real time.

!['Multiple user messages'](https://github.com/MattccTO/Chatty-App/blob/master/Docs/Screenshot%20from%202019-03-14%2016-01-46.png?raw=true)

Users can submit images by including a valid URL in their text message.

!['User input img'](https://github.com/MattccTO/Chatty-App/blob/master/Docs/Screenshot%20from%202019-03-14%2016-10-45.png?raw=true)
!['User post img'](https://github.com/MattccTO/Chatty-App/blob/master/Docs/Screenshot%20from%202019-03-14%2016-11-39.png?raw=true)

Users can submit gifs in the same way.

!['User post gif'](https://github.com/MattccTO/Chatty-App/blob/master/Docs/Chatty%20Swanson.gif?raw=true)

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

