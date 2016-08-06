import Express from 'express';
import createMessagesRouter from './routers/messages';

export default models => {
  const { userModel, messageModel } = models;
  const app = new Express();
  const messagesRouter = createMessagesRouter(userModel, messageModel);
  app.use('/messages', messagesRouter);

  return app;
};
