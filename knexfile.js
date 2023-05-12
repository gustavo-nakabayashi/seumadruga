module.exports = {
  test: {
    client: 'pg',
    version: '14.7',
    connection: {
      host: 'localhost',
      user: 'newuser',
      password: 'password',
      database: 'barriga',
    },
    pool: {
      min: 0,
      max: 10,
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
