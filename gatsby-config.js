module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('node-sass'),
      },
    },
  ]
};
