let gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    minify_css = require( 'gulp-minify-css' ),
    rename = require( 'gulp-rename' ),
    concat = require( 'gulp-concat' ),
    plumber = require( 'gulp-plumber' ),
    uglify = require( 'gulp-uglify' ),
    ejs = require( 'gulp-ejs' );
gulp.task( '_sass', () => {
    return gulp.src( './src/sass/style.scss' )
        .pipe( plumber() )
        .pipe( sass() )
        .pipe( gulp.dest( './build/css/' ) )
        .pipe( minify_css() )
        .pipe( rename( 'style.min.css' ) )
        .pipe( gulp.dest( './build/css/' ) );
} );
gulp.task( '_js', () => {
    return gulp.src( './src/js/*.js' )
        .pipe( plumber() )
        .pipe( concat( 'main.js' ) )
        .pipe( gulp.dest( './build/js/' ) )
        .pipe( uglify() )
        .pipe( rename( 'main.min.js' ) )
        .pipe( gulp.dest( './build/js/' ) );
} );
gulp.task( '_ejs', () => {
    return gulp.src( './src/ejs/*.ejs' )
        .pipe( plumber() )
        .pipe( ejs( { msg: 'Hello' }, {}, { ext : '.html' } ) )
        .pipe( gulp.dest( './build/html/' ) );
} );
gulp.task( '_watch', () => {
    gulp.watch( [ './src/sass/**/*.scss' ], [ '_sass' ] );
    gulp.watch( [ './src/js/**/*.js' ], [ '_js' ] );
    gulp.watch( [ './src/ejs/**/*.ejs' ], [ '_ejs' ] );
} );
gulp.task( 'default', () => {
    gulp.run( '_sass', '_js', '_ejs', '_watch' );
} );