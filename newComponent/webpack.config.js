var webpack=require('webpack');
var path=require('path');

 var BUILD_DIR=path.resolve(__dirname,'build');
 var APP_DIR=path.resolve(__dirname,'src');

 var config={
 	entry:['webpack-hot-middleware/client',APP_DIR+'/index.js'],
 	output:{
 		path:BUILD_DIR,
 		filename:'bundle.js',
 		publicPath: '/build/'
 	},
 	plugins: [
    new webpack.HotModuleReplacementPlugin()
    ],
    module:{
    	loaders:[
    	{
    		test:/\.jsx?/,
    		include:APP_DIR,
    		loaders: ['react-hot', 'babel']
    	}]
    }
 };
 module.exports=config;
