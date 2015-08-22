module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
    	development: {
    		files: {
    			"styles/compiled/vendor/font-awesome.css": "styles/less/vendor/font-awesome.less",
          "styles/compiled/custom/custom.css": "styles/less/custom/custom.less"
    		}
    	}
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less']);

};
