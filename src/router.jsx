import { createBrowserRouter } from "react-router-dom";
import { OutletContainer } from "./OutletContainer";
import MainPage from "./pages/mainPage/mainPage";
import ClubPage from "./pages/clubPage/ClubPage";
import PaperPage from "./pages/paperPage/PaperPage";
import MyPage from "./pages/myPage/MyPage";
import ApplyPaper from "./pages/paperPage/ApplyPaper";
import ApplyPaperDone from "./pages/paperPage/ApplyPaperDone";
import DetailPaper from "./pages/paperPage/DetailPaper";
import PaperPayDone from "./pages/paperPage/PaperPayDone";

import ApplyClub from "./pages/clubPage/ApplyClub";
import ApplyClubDone from "./pages/clubPage/ApplyClubDone";

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
        path: "/applyclub",
        element: <ApplyClub />,
      },
      {
        path: "/applyclubdone",
        element: <ApplyClubDone />,
      },
      {
        path: "/paper",
        element: <PaperPage />,
      },
      {
        path: "/my",
        element: <MyPage />,
      },
      {
        path: "/applypaper",
        element: <ApplyPaper />,
      },
      {
        path: "/applypaperdone",
        element: <ApplyPaperDone />,
      },
      {
        path: "/detailpaper",
        element: <DetailPaper />,
      },
      {
        path: "/paper_paydone",
        element: <PaperPayDone />,
      },
    ],
  },
]);
