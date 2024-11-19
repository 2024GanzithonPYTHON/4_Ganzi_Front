import { createBrowserRouter } from "react-router-dom";
import { OutletContainer } from "./OutletContainer";
import MainPage from "./pages/mainPage/mainPage";
import ClubPage from "./pages/clubPage/ClubPage";
import PaperPage from "./pages/paperPage/PaperPage";
import MyPage from "./pages/myPage/MyPage";
import ApplyPaper from "./pages/paperPage/ApplyPaper";
import ApplyDone from "./pages/paperPage/ApplyDone";
import DetailPaper from "./pages/paperPage/DetailPaper";
import PaperPayDone from "./pages/paperPage/PaperPayDone";

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
        path: "/my",
        element: <MyPage />,
      },
      {
        path: "/applypaper",
        element: <ApplyPaper />,
      },
      {
        path: "/applydone",
        element: <ApplyDone />,
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
