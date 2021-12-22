module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '98b0e524df28118e012659535c1ef661'),
  },
});
