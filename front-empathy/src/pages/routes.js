import Main from "pages/Main/Main";
import EventDetail from "pages/EventDetail/EventDetail";
import AddData from "pages/AddData/AddData";
import App from 'App';
import AddArtist from "./AddData/AddArtist/AddArtist";
import AddEvent from "./AddData/AddEvent/AddEvent";
import AddLocation from "./AddData/AddLocation/AddLocation";

export const routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Main
      },
      {
        path: "/event/:id",
        component: EventDetail
      },
      {
        path: "/add-data",
        component: AddData,
        routes: [
          {
            path: "/add-data/artist",
            component: AddArtist
          },
          {
            path: "/add-data/location",
            component: AddLocation
          },
          {
            path: "/add-data/event",
            component: AddEvent
          },
        ]
      }
    ]
  }
];