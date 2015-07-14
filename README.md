# grunt-ejs-mate

A Grunt task for compiling [ejs](http://npmjs.org/package/ejs) templates, using [ejs-mate](http://npmjs.org/package/ejs-mate).

A fork of [grunt-ejs](https://github.com/shama/grunt-ejs).

## Getting Started

Install this grunt plugin next to your project's
[Gruntfile.js](http://gruntjs.com/getting-started) with: `npm install grunt-ejs-mate --save-dev`.

Then add this line to your project's `Gruntfile.js`:

```javascript
grunt.loadNpmTasks('grunt-ejs-mate');
```

## Documentation

Add the task to your config and specify the destination for the compiled file:

```javascript
grunt.initConfig({
  'ejs-mate': {
    all: {
      src: ['app/**/*.ejs', '!app/partials/**/*'],
      dest: 'dist/',
      expand: true,
      ext: '.html',
    },
  },
});
```

### Passing data/helpers to the templates
Use `options` to pass data and helpers to the templates:

**Gruntfile.js**:
```js
grunt.initConfig({
  'ejs-mate': {
    all: {
      options: {
        title: 'My Website',
        url: function(url) {
          return 'http://example.com/formatted/url/' + url;
        },
      },
      src: ['app/**/*.ejs', '!app/partials/**/*'],
      dest: 'dist/',
      expand: true,
      ext: '.html',
    },
  },
});
```

**app/index.ejs**:
```html
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <a href="<%= url('home.html') %>">Home Page</a>
  </body>
</html>
```

Ideally all your helpers and non-app specific config should be another module and merged in like this:

```js
grunt.initConfig({
  'ejs-mate': {
    all: {
      options: grunt.util._.merge(require('my-helpers'), {
        title: 'My Website'
      }),
      src: 'index.ejs',
      dest: 'index.html',
    },
  },
});
```

## Release History
* 0.1.0 initial release

## License

Copyright (c) 2015 Matt Blair
Licensed under the MIT license.
