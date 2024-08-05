module.exports = {
  "output": {
    "filename": "[name].pack.jsx"
  },
  "resolve": {
    "extensions": [
      ".js",
      ".json",
      ".jsx"
    ],
    "alias": {}
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
  },
  "entry": {
    "index": "./index.jsx"
  }
}