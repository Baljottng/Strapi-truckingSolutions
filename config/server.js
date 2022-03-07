module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://strapi4version.newweb.tngwebsolutions.ca/'
  app: {
    keys: env.array('APP_KEYS'),
  },
});
