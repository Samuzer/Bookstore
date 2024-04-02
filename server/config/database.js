const dbHost = process.env.DB_HOST;
const dbDatabase = process.env.DB_DATABASE;
const mongoURI = `mongodb://${dbHost}/${dbDatabase}`;

module.exports = {
  host: dbHost,
  database: dbDatabase,
  mongoUri: mongoURI
};
