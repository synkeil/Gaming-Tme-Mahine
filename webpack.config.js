module.exports = {
  entry: {
    'searchBundle':[ __dirname+'/js/src/script_search.js', __dirname+'/js/src/calendar.js'],
    'createBundle':[ __dirname+'/js/src/create.js', __dirname+'/js/src/calendar.js'],
  },
  output:{
    path: __dirname+'/js/dist/',
    filename: '[name].js'
  }
  ,
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
