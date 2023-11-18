module.exports = {
    configureWebpack: {
		plugins: [
			new CopyWebpackPlugin([
				{
					from: path.join(__dirname, '/static/js/sw.js'),
					to: path.join(__dirname, 'unpackage/dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, '')
				}
			]),
                        new CopyWebpackPlugin([
				{
					from: path.join(__dirname, '/static/json/mainfest.json'),
					to: path.join(__dirname, 'unpackage/dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, '')
				}
			])
		]
	},

