import Main from "pages/Main/Main";
import EventDetail from "pages/EventDetail/EventDetail";
import AddData from "pages/AddData/AddData";
import App from 'App';
import Artist from "./AddData/Artist/Artist";

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
            component: Artist
          },
          //   {
          //     path: "/add-data/location",
          //     component: AddData
          //   },
          //   {
          //     path: "/add-data/event",
          //     component: AddData
          //   }
        ]
      }
    ]
  }
];
