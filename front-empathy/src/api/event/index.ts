import { requestGET } from "../index";

export const loadEvent = (eventId = 1) => {
  return requestGET(`/event/${ eventId }`)
};

export const loadEvents = (page = 1, pageUnit = 5) => {
  return requestGET(`/event?page=${ page }&page_unit=${ pageUnit }`);
};
