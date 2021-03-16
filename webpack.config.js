const path = require('path');

module.exports = {
	entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
						],
					}
				}
			},
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', 
          'css-loader', 
					'sass-loader',
        ],
      },
		]
	},
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api/workouts': 'http://localhost:3000'
    },
  },
};