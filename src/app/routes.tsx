import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Calendar from "./pages/Calendar";
import Planner from "./pages/Planner";
import Collections from "./pages/Collections";
import Studio from "./pages/Studio";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import NewEntry from "./pages/NewEntry";
import Yearly from "./pages/Yearly";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Calendar },
      { path: "planner", Component: Planner },
      { path: "collections", Component: Collections },
      { path: "studio", Component: Studio },
      { path: "archives", Component: Archives },
      { path: "yearly", Component: Yearly },
      { path: "entries/new", Component: NewEntry },
      { path: "settings", Component: Settings },
    ],
  },
]);
