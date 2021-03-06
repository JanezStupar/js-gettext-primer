module.exports = function(grunt) {

    "use strict";

    var spa_middleware = function(connect, options, middlewares) {
        var modRewrite = require('connect-modrewrite');

        middlewares.unshift(modRewrite(["!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]"]));

        return middlewares;
    };

    grunt.initConfig({
        copy: {
            local: {
                files: [
                    {
                        expand: true, cwd: 'src/', src: ['scripts/translations/**'], dest: 'build/'
                    },
                    {
                        expand: true, cwd: 'src/', src: ['style/css/**'], dest: 'build/'
                    }
                ]
            }
        },
        coffee: {
            compile: {
                expand: true,
                cwd: 'src/scripts/coffee',
                src: ["**/*.coffee"],
                dest: "src/scripts/js/",
                ext: '.js'
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src/',
                    mainConfigFile: 'src/scripts/js/main.js',
                    include: ['../node_modules/grunt-contrib-requirejs/node_modules/requirejs/require', 'scripts/js/main'],
                    insertRequire: ['scripts/js/main'],
                    out: "build/scripts/js/js-gettext-primer.js",
                    optimize: 'none'
                }
            }
        },
        jshint: {
            all: ["src/scripts/js/**/*.json", "!src/scripts/js/templates.js"]
        },
        coffee_jshint: {
            options: {
                globals: ['requirejs', 'define', 'console', '$', 'window', 'document']
            },
            all: ["src/scripts/coffee/**/*.coffee"]
        },
        jade: {
            index: {
                options: {
                    pretty: true,
                    data : {
                        facts: grunt.file.readJSON("src/scripts/js/app/config/facts.json")
                    }
                },
                files: {
                    "build/index.html": ["src/jade/**/*.jade", "!src/jade/**/_*.jade"]
                }
            },
            index_debug: {
                options: {
                    pretty: true,
                    data : {
                        debug: true,
                        facts: grunt.file.readJSON("src/scripts/js/app/config/facts.json")
                    }
                },
                files: {
                    "src/index.html": ["src/jade/**/*.jade", "!src/jade/**/_*.jade"]
                }
            },
            templates: {
                options: {
                    globals: ['gettext'],
                    amd: true,
                    client: true,
                    namespace: "App.Templates",
                    processName: function (filename) {
                        return filename.split("src/jade/templates/")[1].split(".jade")[0];
                    }
                },
                files: {
                    "src/scripts/js/templates.js": ["src/jade/**/_*.jade"]
                }
            }
        },
        connect:{
            local: {
                options: {
                    hostname: '127.0.0.1',
                    port: '8889',
                    base: 'build',
                    open: true,
                    keepalive: true,
                    middleware: spa_middleware
                }
            },
            dev: {
                options: {
                    hostname: '127.0.0.1',
                    port: '8889',
                    base: ['src', 'node_modules/grunt-contrib-requirejs/node_modules/requirejs/'],
                    open: true,
                    middleware: spa_middleware,
                    livereload: 9999
                }
            }
        },
        watch: {
            options: {
                livereload: 9999
            },
            default: {
                files: ['src/**', 'Gruntfile.js'],
                tasks: 'default'
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ["src/bower_components/bootstrap-stylus/", "src/style/styl"]
                },
                files: {
                    "src/style/css/style.css": ["src/style/styl/**/*.styl"]
                }
            }
        },
        jsxgettext: {
            extract: {
                files: [{
                    src: ['./src/scripts/**/*.*js', './src/jade/**/*.*jade', '!./**/scripts/bower_components/**', '!./src/scripts/js/templates.js'],
                    'output-dir': './src/translations/',
                    output: 'en_US.po'
                }],
                options: {
                    'join-existing': true,
                    keyword: ['gettext', 'dgettext', 'dcgettext', 'ngettext', 'dngettext', 'dcngettext',
                        'pgettext', 'dpgettext', 'npgettext', 'dnpgettext', 'dcnpgettext'
                    ]
                }
            }
        },
        po2json: {
            options: {
                format: 'jed',
                domain: 'client',
                requireJs: true
            },
            all: {
                src: './src/translations/*.po',
                dest: './src/scripts/translations/'
            }
        }
    });

    function loadGruntContribTasks(tasks) {
        tasks.forEach(function (element) {
            grunt.loadNpmTasks('grunt-contrib-' + element);
        });
    }

    loadGruntContribTasks(['jshint', 'coffee', 'requirejs', 'jade', 'watch', 'connect', 'stylus', 'copy']);

    grunt.loadNpmTasks('grunt-coffee-jshint');
    grunt.loadNpmTasks('grunt-jsxgettext');
    grunt.loadNpmTasks('grunt-po2json');


    grunt.registerTask('default', ['coffee', 'coffee_jshint', 'jade', 'stylus', 'jshint', 'requirejs']);
    grunt.registerTask('dev', ['default', 'connect:dev', 'watch:default']);
    grunt.registerTask('local', ['default', 'connect:local']);
    grunt.registerTask('gettext-extract', ['jsxgettext:extract']);
    grunt.registerTask('gettext-compile', ['po2json']);
};