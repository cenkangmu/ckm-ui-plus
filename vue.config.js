module.exports = {
  productionSourceMap:false,
  devServer:{
    host:'0.0.0.0',
  },
  configureWebpack: {
    module: {
      rules: [
        // 全局导入 scss
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'sass-resources-loader',
              options: {
                resources: ['./src/assets/css/index.scss']
              }
            }
          ]
        }
      ]
    }
  }
};