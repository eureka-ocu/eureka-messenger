export default (sequelize, dataTypes) =>
  sequelize.define('user', {
    name: dataTypes.STRING,
  }, {
    timestamps: false,
  });
