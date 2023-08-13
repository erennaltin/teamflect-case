import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "./root";
import ErrorPage from "./Shared/ErrorPage";
import PeopleList from "./People";
import { registerIcons } from '@fluentui/react/lib/Styling';
import { AddRegular, ArrowDownRegular, ArrowLeftRegular, ArrowUpRegular, CalendarRegular, CheckmarkCircleRegular, ChevronDownRegular, ChevronRightRegular, ContactCardRegular, EyeOffRegular, EyeRegular, TagRegular } from "@fluentui/react-icons";
import Home from "./Home";
import Login from "./Onboarding/Login";
import Register from "./Onboarding/Register";

registerIcons({
  icons: {
    circlering: <CheckmarkCircleRegular />,
    statuscirclecheckmark: <CheckmarkCircleRegular />,
    tag: <TagRegular />,
    chevronrightmed: <ChevronRightRegular />,
    add: <AddRegular />,
    calendar: <CalendarRegular />,
    chevrondown: <ChevronDownRegular />,
    up: <ArrowUpRegular />,
    cancel: <ArrowLeftRegular />,
    down: <ArrowDownRegular />,
    contact: <ContactCardRegular />,
    redeye: <EyeRegular />,
    hide: <EyeOffRegular />,
  }
});


const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root />
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "people",
        element: <PeopleList />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }

    ]
  },
]);

export default RootRouter;