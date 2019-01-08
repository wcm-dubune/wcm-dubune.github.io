# WCM Dubune

### Pre-installation
- webpack
    - `webpack.config.js`
    - webpack-dev-server
```
$ npm install webpack webpack-cli webpack-dev-server
```

- babel
    - `.babelrc`
```
$ npm install @babel/core @babel/preset-env babel-loader
```

- run script
    - `package.json`
```
"scripts": {
    "devserver": "webpack-dev-server --open --progress",
    "dev": "webpack",
    "build": "webpack --mode production"
},
```

### Reference
- [3DRestaurantMenu](https://github.com/codrops/3DRestaurantMenu)