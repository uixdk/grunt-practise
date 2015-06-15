module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-concat");
    
    grunt.initConfig({
        concat: {
            target1: {
                files: {
                    "build/abc.js": ["src/*.js"]
                }
            }
        }
    });
    
    grunt.registerTask("default", ['concat']);
};