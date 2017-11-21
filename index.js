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

function readConfigFile(file) {
  if (file.indexOf('json') > -1) {
    fs.readFile(file, 'utf8', function(err, data) {
      return JSON.parse(data)
    });
  }
  const data = require("./" + file)
  return data;
}

function getRunnerPath(file) {
  if (file.indexOf('json') > -1) {
    fs.readFile(file, 'utf8', function(err, data) {
      return JSON.parse(data).runner;
    });
  }
  const data = require("./" + file)
  return data.runner;
}

function validateConfigRunner(runnerPath) {
  if (runnerPath.indexOf('/snapshot') > -1) {
    return runnerPath;
  }

  return '/snapshot/' + package.name + '/node_modules/' + runnerPath;
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
  } /*else {
    const configFile = readConfigFile(argv[getConfigArg(argv) + 1])
    const runnerPath = configFile && configFile.runner;
    const validRunnerPath = validateConfigRunner(runnerPath);
    const tmpConfig = configFile;
    tmpConfig.runner = validRunnerPath;
    config = JSON.stringify(tmpConfig);
  }*/

  
  jest.run(argv);
}

run();