const path = require('path');
exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(css|scss)$/i,
          use: [
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [path.resolve(__dirname, '../theme/theme.scss')],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      modules: ['node_modules'],
      alias: {
        '@components': path.resolve(__dirname, '../components'),
        '@node_modules': path.resolve(__dirname, '../node_modules'),
        '@root': path.resolve(__dirname, '../'),
      },
    },
  });
};
