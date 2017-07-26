# react-example

Simple starter kit to get started with [React]. [Webpack], [Babel] and [Jest] are preconfigured so you can focus on writing code.


<!-- TOC depthFrom:2 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Get Started](#get-started)
	- [Installation](#installation)
	- [Development](#development)
	- [Testing](#testing)
	- [Production](#production)
- [Documentation](#documentation)
	- [Config](#config)
	- [JavaScript](#javascript)
	- [CSS](#css)
	- [HTML](#html)
	- [Images and Fonts](#images-and-fonts)
- [Advanced](#advanced)
	- [Sass](#sass)

<!-- /TOC -->


## Get Started

[Download] this repo and extract it to some folder, say `my-app`.

```bash
cd my-app
```

### Installation

Run this to install the dependencies:

```bash
npm install
```

Installed packages will be placed inside the `node_modules` folder.

### Development

Run this to start the development server:

```bash
npm start
```

Open http://localhost:8080/ to see your app in browser.

### Testing

Run this to test your app:

```bash
npm test
```

Coverage files will be placed inside the `coverage` folder.

### Production

Run this to build and optimize your app for production:

```bash
npm run build
```

Compiled files will be placed inside the `build` folder.


## Documentation

This is the initial directory structure:

```
my-app
├── .gitignore
├── package.json
├── README.md
├── config
│   └── jest.js
│   └── mock.js
│   └── webpack.js
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.html
    └── index.js
    └── logo.svg
```

### Config

Webpack config is in `config/webpack.js`, Babel config is inside `package.json` under `"babel"` key and Jest config is in `config/jest.js`. Webpack and Jest config is kept minimal to make it easier to understand and customize them.

### JavaScript

The main entry point for your app is `src/index.js`. `js` files are loaded using `babel-loader` with `react-app` preset. This allows you to use ES6 and JSX syntax. Output will be placed inside `build/js` folder.

### CSS

`css` files are loaded using `css-loader` and separated from `js` files using `extract-text-webpack-plugin`. Output will be placed inside `build/css` folder.

### HTML

`src/index.html` file is processed using `html-webpack-plugin`. Output will be placed in `build/index.html` file. Paths to compiled `js` and `css` files will be automatically injected into this file.

### Images and Fonts

Images and font files are loaded using `file-loader`. They will be placed inside `build/img` and `build/fonts` folders.


## Advanced

### Sass

To use [Sass], install these packages:

```bash
npm install sass-loader node-sass --save-dev
```

And add `sass-loader` to `config.module.rules` array in `config/webpack.js`:

```js
{
  test: /\.scss$/,
  loader: styles.extract(['css-loader', 'sass-loader']),
},
```

[Download]: https://github.com/react-example/react-example/archive/master.zip
[React]: https://facebook.github.io/react/
[Webpack]: https://webpack.js.org/
[Babel]: https://babeljs.io/
[Jest]: https://facebook.github.io/jest/
[Sass]: http://sass-lang.com/
