const SERVER_URL = process.env.REACT_APP_SERVER_API;

export const loadArtist = (artistId = 1) => {
  return fetch(`${SERVER_URL}/artist/${artistId}`)
    .then(res => res.json())
    .catch(err => console.error(err));
};

export const loadArtists = (page = 1, pageUnit = 5) => {
  return fetch(`${SERVER_URL}/artist?page=${page}&pageUnit=${pageUnit}`)
    .then(res => res.json())
    .catch(err => console.error(err));
};
