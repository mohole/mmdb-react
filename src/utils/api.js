
const BASE_URL = 'http://localhost:3004';

const getData = (url) => fetch(url)
  .then((resp) => resp.json());

export {
  BASE_URL,
  getData
}