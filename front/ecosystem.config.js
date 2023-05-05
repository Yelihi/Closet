'use strict';
const packageJson = require('./package.json');

module.exports = {
  apps: [
    {
      name: 'npm',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],
};
