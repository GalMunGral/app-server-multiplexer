const path = require('path');

module.exports = {
  apps: [
    {
      id: 'respotify',
      port: 3001,
      directory: path.resolve(__dirname, 'respotify'),
      command: './run.sh'
    },
    {
      id: 'notube',
      port: 3002,
      directory: path.resolve(__dirname, 'notube'),
      command: './run.sh'
    },
    {
      id: "test-app-1",
      directory: path.resolve(__dirname, 'test-app-1'),
      port: 4000,
      command: 'npm start'
    },
    {
      id: "test-app-2",
      directory: path.resolve(__dirname, 'test-app-2'),
      port: 4001,
      command: 'npm start'
    },
  ]
}