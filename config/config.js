module.exports = {
  username: process.env.POSTGRES_USERNAME || 'eureka',
  password: process.env.POSTGRES_PASSWORD || 'hogehoge',
  database: process.env.POSTGRES_DATABASE || 'eureka_messenger',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  dialect: 'postgres',
};
