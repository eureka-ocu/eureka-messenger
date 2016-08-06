import { Router as createRouter } from 'express';
import bodyParser from 'body-parser';

export default (userModel, messageModel) => {
  const router = createRouter();
  router.use(bodyParser.urlencoded({ extended: true }));

  router.get('/', (req, res) => {
    messageModel
      .findAll()
      .then(result => res.send(result))
      .catch(error => res.send(error));
  });

  return router;
};
