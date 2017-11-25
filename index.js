const path = require('path');
const fs = require('fs');
const jest = require('jest');

const package = require('./package.json');

const defaultGoRunnerConfig = {
  moduleFileExtensions: [
    'go'
  ],
  runner: '/snapshot/' + package.name + '/node_modules/jest-runner-go',
    testMatch: [
      '**/?(*_)test.go'
    ]
}

function getConfigArg(argv) {
  if (argv.indexOf('--config') > -1 || argv.indexOf('-c') > -1) {
    if(argv.indexOf('--config') > -1) {
      return argv.indexOf('--config');
    }
    return argv.indexOf('-c');
  } 
  return -1;
}

function run() {
  let config;
  const argv = process.argv.slice(2);

  if (getConfigArg(argv) === -1) {
    config = JSON.stringify(defaultGoRunnerConfig);
    argv.push(
    '--config',
      config
    );
  }
  
  jest.run(argv);
}

run();