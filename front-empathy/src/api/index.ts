const SERVER_URL = process.env.REACT_APP_SERVER_API;

export const requestGET = (url: any) => {
  return fetch(SERVER_URL + url)
    .then(res => res.json())
    .catch(err => console.error(err));
}
