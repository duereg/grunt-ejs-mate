var renderFile = require('ejs-mate');

module.exports = function(grunt) {
  'use strict';

  grunt.registerMultiTask('ejs-mate', 'compile ejs templates', function() {
    var options = this.options();
    var done = this.async();

    grunt.verbose.writeflags(options, 'Options');

    var filesProcessed = 0;
    var totalFiles = this.files.length;

    this.files.forEach(function(file) {
      // prevents options declared / overrided
      // on file level to be moved to the next file
      options = this.options();
      // var commonJs = options.commonJs ? 'module.exports = ':'';
      // var out = file.src.map(grunt.file.read).join('');
      options.filename = file.src[0];

      renderFile(file.src[0], options, function(err, result) {
        if (err) {
          done(new Error('whoops'));
        }

        grunt.file.write(file.dest, result);
        grunt.log.ok('Wrote ' + file.dest);
        filesProcessed++;

        if(filesProcessed === totalFiles ) {
          done();
        }
      });

    }, this);
  });
};
