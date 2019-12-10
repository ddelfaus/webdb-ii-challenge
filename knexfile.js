// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: "./data/cars-dealer.db3" // where is the database file?
  },
  migrations: {
      directory: "./data/migrations" // will be created automatically
  },
  seeds: {
      directory: "./data/seeds" // also created automatically
  }
}

};
