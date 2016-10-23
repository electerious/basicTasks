# basicTasks

A collection of gulp tasks used in personal projects.

## Contents

- [Setup](#setup)
- [How to use](#how-to-use)
	- [Scripts-Task](#scripts-task)
	- [Styles-Task](#styles-task)

## Setup

Install basicTasks using [npm](https://npmjs.com) …

```sh
npm install @electerious/basictasks
```

… and require it in your gulpfile.

```js
let gulp  = require('gulp'),
    tasks = require('@electerious/basictasks')(gulp, 'yourModuleName')
``` 

## How to use

### Scripts-Task

The scripts-task will bundle a JS file as a standalone UMD module, transform it using Babel and uglify the output. 

```js
const scripts = tasks.scripts({
	from : './src/scripts/main.js',
	to   : './dist'
})

gulp.task('scripts', scripts)
```

### Styles-Task

The styles-task accepts SCSS and SASS files. It will autoprefix and minify them.

```js
const styles = tasks.styles({
	from : './src/styles/main.scss',
	to   : './dist'
})

gulp.task('styles', styles)
```

Specify a custom filename using the `name` property.

```js
const styles = tasks.styles({
	from : './src/styles/main.scss',
	name : (path) => path.basename += '.min',
	to   : './dist'
})

gulp.task('styles', styles)
```