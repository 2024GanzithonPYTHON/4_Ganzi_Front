import { createBrowserRouter } from "react-router-dom";
import { OutletContainer } from "./OutletContainer";

import MainPage from "./pages/mainPage/mainPage";

import ClubPage from "./pages/clubPage/ClubPage";

import PaperPage from "./pages/paperPage/paperMain/PaperPage";
import ApplyPaper from "./pages/paperPage/paperApply/ApplyPaper";
import ApplyPaperDone from "./pages/paperPage/paperApply/ApplyPaperDone";
import DetailPaper from "./pages/paperPage/paperDetail/DetailPaper";
import PaperPayDone from "./pages/paperPage/paperPay/PaperPayDone";

import MyPage from "./pages/myPage/MyPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <OutletContainer />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/club",
        element: <ClubPage />,
      },
      {
        path: "/paper",
        element: <PaperPage />,
      },
      {
        path: "/apply/paper",
        element: <ApplyPaper />,
      },
      {
        path: "/apply/paper/done",
        element: <ApplyPaperDone />,
      },
      {
        path: "/detail/paper",
        element: <DetailPaper />,
      },
      {
        path: "/paper/paydone",
        element: <PaperPayDone />,
      },
      {
        path: "/my",
        element: <MyPage />,
      },
    ],
  },
]);
