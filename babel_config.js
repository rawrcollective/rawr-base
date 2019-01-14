module.exports = function (api) {
    const presets = [ "@babel/preset-env", "@babel/preset-react", "babel-preset-react" ];
    const plugins = ['transform-class-properties'];
    api.cache(true)
  
    return {
      presets,
      plugins
    };
  }