module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-coffee');
    
    grunt.initConfig({
        coffee: {
            target1: {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: ['*.coffee'],
                dest: 'build/',
                ext: '.js'
            },
            target2: {
                files: {
                    'build/bazz.js': 'src/*.coffee'
                }
            }
        }
    });
    
    grunt.registerTask('default', ['coffee']);
};