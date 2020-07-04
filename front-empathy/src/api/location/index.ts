import { requestGET } from "../index";

export const loadLocation = (locationId = 1) => {
  return requestGET(`/location/${ locationId }`);
};

export const loadLocations = (page = 1, pageUnit = 5) => {
  return requestGET(`/location?page=${ page }&page_unit=${ pageUnit }`);
};
