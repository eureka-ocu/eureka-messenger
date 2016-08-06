export default (sequelize, dataTypes) =>
  sequelize.define('message', {
    body: dataTypes.STRING,
  });
