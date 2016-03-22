module.exports = function(grunt) {

    grunt.initConfig({
        //获取pachge.json 信息
        pkg: grunt.file.readJSON("package.json"),

        //获取uglify插件的配置信息
        uglify: {
            options: { banner: "/*<%=pkg.name%>_<%=pkg.version%>*/" },
            jsmini: { //任务一：压缩js，不混淆变量名，保留注释，添加banner和footer
                files: [{
                    expand: true,
                    cwd: "js/src",
                    src: "**/*.js",
                    dest: "js/dest"
                }]
            },
        },

        //配置jshint插件
        jshint: {
            build: ['src/*js'],
            options: { jshintrc: 'jshint.jshintrc' }
        },

        //获取watch插件的配置信息
        watch: {
            biuld: {
                files: ["src/*.js"],
                tasks: ['jshint', 'uglify'], //监听哪些插件
                options: { spawn: false }
            }
        }
    });

    //加载插件uglify
    grunt.loadNpmTasks("grunt-contrib-uglify");


    //加载插件uglify
    grunt.loadNpmTasks("grunt-contrib-jshint");

    //加载插件wathc插件
    grunt.loadNpmTasks("grunt-contrib-watch");


    //注册任务
    grunt.registerTask("default", [ 'uglify', 'watch']);

    grunt.registerTask("jsmini", ['uglify:jsmini']);

    grunt.registerTask('jshint',['jshint']);


};