module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({
    webdriver: {
      ServerFeatureTests: {
        tests: 'test/server/**/*'
      },
      options: {
        desiredCapabilities: {
          browserName: 'chrome'
        }
      }
    },
  })

  grunt.loadNpmTasks('grunt-webdriver');

  grunt.registerTask('default', ['webdriver']);
};