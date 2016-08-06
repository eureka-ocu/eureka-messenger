/* eslint no-console: 0 */
import socketIo from 'socket.io';

export default (server, port, models) => {
  const { userModel, messageModel } = models;
  const io = socketIo(server);

  io.on('connection', socket => {
    socket.on('new message', data => {
      const { name, message } = data;
      if (name === null || typeof name === 'undefined') {
        socket.emit('error', { error: 'Name must be included' });
        return;
      }
      if (message === null || typeof message === 'undefined') {
        socket.emit('error', { error: 'Message must be included' });
        return;
      }

      userModel
        .find({
          where: { name },
        })
        .then(foundUser => {
          if (foundUser === null || typeof foundUser === 'undefined') {
            throw new Error('User not found');
          }
          messageModel
            .create({
              userId: foundUser.id,
              body: message,
            })
            .then(newMessage => socket.emit('new message', { newMessage, user: foundUser }));
        })
        .catch(error => socket.emit('error', { error }));
    });
  });

  server.listen(port, error => {
    if (error !== null && typeof error !== 'undefined') {
      console.log(error);
    } else {
      console.log(`Listening on ${port}.`);
    }
  });
};
