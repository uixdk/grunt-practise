module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-ssh');
    
    grunt.initConfig({
        passwd: grunt.file.readJSON("passwd.json"),
        
        sftp: {
            options: {
                host: '10.0.2.138',
                username: '<%=passwd.username%>',
                password: '<%=passwd.password%>',
                path: '/home/rong/tmd/',
                createDirectories: true
            },
            target1: {
                src: 'build/*'
            }
        }
    });
    
    grunt.registerTask('default', ['sftp']);
};