const SERVER_URL = process.env.REACT_APP_SERVER_API;

export const loadEvent = (eventId = 1) => {
  return fetch(`${SERVER_URL}/event/${eventId}`)
    .then(res => res.json())
    .catch(err => console.error(err));
};

export const loadEvents = (page = 1, pageUnit = 5) => {
  return fetch(`${SERVER_URL}/event?page=${page}&page_unit=${pageUnit}`)
    .then(res => res.json())
    .catch(err => console.error(err));
};
