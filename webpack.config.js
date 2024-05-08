const path = require('path');

module.exports = {
  entry: './connecter', // Point d'entrée de l'application
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie pour les fichiers compilés
    filename: 'bundle.js', // Nom du fichier de sortie
  },
  module: {
    rules: [
      // Règles de transformation des différents types de fichiers
      {
        test: /\.js$/, // Appliquer la règle aux fichiers JavaScript
        exclude: /node_modules/, // Ne pas appliquer aux fichiers dans le dossier node_modules
        use: {
          loader: 'babel-loader', // Utiliser Babel pour transformer les fichiers JS
          options: {
            presets: ['@babel/preset-env'], // Utiliser le preset env de Babel
          },
        },
      },
    ],
  },
};
