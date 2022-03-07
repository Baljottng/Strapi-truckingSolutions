module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5953fc20533f0e3ee17b9ce4e1841fbe'),
  },
});
