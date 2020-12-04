
const getData = (url) => fetch(url)
  .then((resp) => resp.json());

export {
  getData
}