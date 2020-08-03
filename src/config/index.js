const productionEnv = window.location.hostname.includes('localhost');

const API_URL = (productionEnv)
  ? 'http://localhost:8080'
  : 'https://mauflix.herokuapp.com';

export default {
  API_URL,
};
