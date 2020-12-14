const dev = {
  apiGatewayUrl: 'http://localhost:4000',
};

const prod = {
  apiGatewayUrl: 'https://songbox.io',
};

const stage = {
  apiGatewayUrl: 'https://stage.songbox.io',
};

let config = dev;

config = process.env.REACT_APP_ENV === 'prod' ? prod : config;
config = process.env.REACT_APP_ENV === 'stage' ? stage : config;

export default {
  ...config,
};
