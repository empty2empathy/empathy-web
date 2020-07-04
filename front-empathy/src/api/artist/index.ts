import { requestGET } from "../index";

export const loadArtist = (artistId = 1) => {
  return requestGET(`/artist/${ artistId }`);
};

export const loadArtists = (page = 1, pageUnit = 5) => {
  return requestGET(`/artist?page=${ page }&page_unit=${ pageUnit }`);
};
