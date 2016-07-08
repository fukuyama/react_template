
destDir = 'dest/'

config = {
  jsx :
    files      : './src/main/jsx/app.jsx'
    watchFiles : './src/main/jsx/**/*.jsx'
    destDir    : destDir + 'public/js/'
    outputFile : 'bundle.js'

  webserver :
    files     : './src/main/public/**/*'
    publicDir : destDir + 'public'

  cleanDir : destDir
}

module.exports = config
