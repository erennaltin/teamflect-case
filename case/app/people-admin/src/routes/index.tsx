import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "./root";
import ErrorPage from "./Shared/error-page";
import PeopleList from "./People";
import { registerIcons } from '@fluentui/react/lib/Styling';
import { AddRegular, ArrowDownRegular, ArrowLeftRegular, ArrowUpRegular, CalendarRegular, CalendarTodayRegular, CheckmarkCircle20Regular, CheckmarkCircleRegular, ChevronDownRegular, ChevronRightRegular, Circle12Filled, CircleRegular, ClosedCaptionRegular, ContactCardRegular, Status16Regular, TagRegular } from "@fluentui/react-icons";

registerIcons({
  icons: {
    circlering: <CheckmarkCircleRegular />,
    statuscirclecheckmark: <CheckmarkCircleRegular />,
    tag: <TagRegular />,
    chevronrightmed: <ChevronRightRegular />,
    add: <AddRegular />,
    calendar: <CalendarRegular />,
    chevrondown: <ChevronDownRegular />,
    up: <ArrowUpRegular/>,
    cancel: <ArrowLeftRegular />,
    down: <ArrowDownRegular />,
    contact: <ContactCardRegular />
  }
});

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "people",
    element: <PeopleList />
  }
]);

export default RootRouter;