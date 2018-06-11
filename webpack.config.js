const path = require('path');

module.exports = {
    entry: './src/app.js',  //plik, od któego zaczynamy proces kompilacji
    //output wskazuje na ścieżkę i nazwę pliku wyjściowego
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    }
};