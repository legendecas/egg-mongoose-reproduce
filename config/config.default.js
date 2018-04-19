'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524050454208_4807';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    clients: {
      main: {
        url: 'mongodb://localhost:27017/notebook',
        options: {},
      },
    },
  };

  return config;
};
