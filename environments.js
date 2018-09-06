const production = 'production';
const development = 'development';

const environment = process.env.NODE_ENV === production ? production : development;

const rootUrl = () => (
  environment === production
    ? 'https://my-json-server.typicode.com/humanoidsbv/team-awesome-rik'
    : 'http://localhost:3001/api'
);

export default rootUrl;
