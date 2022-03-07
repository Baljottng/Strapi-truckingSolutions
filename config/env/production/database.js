module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '185.214.10.151'),
      port: env.int('DATABASE_PORT', 1002),
      database: env('DATABASE_NAME', 'stripidb'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Iamnumber!23'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    useNullAsDefault: true,
  },
});
