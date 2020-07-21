const SERVER_URL = process.env.REACT_APP_SERVER_API;

<<<<<<< HEAD
export const requestGET = (url: any) => {
=======
export const requestGET = (url) => {
>>>>>>> 37ccf6fafe9679a8ad2426a640307acc5983ec09
  return fetch(SERVER_URL + url)
    .then(res => res.json())
    .catch(err => console.error(err));
}
