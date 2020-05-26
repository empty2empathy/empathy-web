const SERVER_URL = process.env.REACT_APP_SERVER_API;

export const loadLocation = (locationId = 1) => {
  return fetch(`${SERVER_URL}/location/${locationId}`)
    .then(res => res.json())
    .catch(err => console.error(err));
};

export const loadLocations = (page = 1, pageUnit = 5) => {
  return fetch(`${SERVER_URL}/location?page=${page}&page_unit=${pageUnit}`)
    .then(res => res.json())
    .catch(err => console.error(err));
};
