import http from 'http';
import Sequelize from 'sequelize';
import createApp from './app';
import startSocket from './socket';
import createModels from './models';
import config from './config/config';

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const models = createModels(sequelize, Sequelize);

const app = createApp(models);
const server = http.createServer(app);
const port = process.env.PORT || 5000;

startSocket(server, port, models);
