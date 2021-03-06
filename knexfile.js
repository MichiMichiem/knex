// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: //'postgres://postgres:postgres@localhost:5432/myapp_test'
    {
      host : '127.0.0.1',
      port : '8000',
      user : 'postgres',
      password : 'docker',
      database : 'myapp_test'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
