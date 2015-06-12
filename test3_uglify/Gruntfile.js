module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.initConfig({
        uglify:{
            target1: {
                src: "foo.js",
                dest: "foo.min.js"
            }
        }  
    });
    
    grunt.registerTask("default", ["uglify"]);
};