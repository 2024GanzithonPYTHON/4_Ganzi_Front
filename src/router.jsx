import { createBrowserRouter } from "react-router-dom";
import { OutletContainer } from "./OutletContainer";

import MainPage from "./pages/mainPage/mainPage";

import ClubPage from "./pages/clubPage/ClubPage";

import DetailClub from "./pages/clubDetailPage/DetailClub";
import PurchasePage from "./pages/paperPurchasePage/PaperPurchasePage";
import ClubPurchasePage from "./pages/clubPuchasePage/ClubPurchasePage";
import PaperPurchasePage from "./pages/paperPurchasePage/PaperPurchasePage";

import MyPage from "./pages/myPage/MyPageOutlet";

import PaperPage from "./pages/paperPage/paperMain/PaperPage";
import ApplyPaper from "./pages/paperPage/paperApply/ApplyPaper";
import ApplyPaperDone from "./pages/paperPage/paperApply/ApplyPaperDone";
import DetailPaper from "./pages/paperPage/paperDetail/DetailPaper";
import PaperPayDone from "./pages/paperPage/paperPay/PaperPayDone";
import ClubRegisterPage from "./pages/clubRegisterPage/ClubRegisterPage";
import ClubRegisterDonePage from "./pages/clubRegisterPage/ClubRegisterDonePage";

import Login from "./pages/loginPage/Login";
import AboutPage from "./pages/aboutPage/AboutPage";

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
        path: "/club/purchase",
        element: <ClubPurchasePage />,
      },
      {
        path: "/club/detail",
        element: <DetailClub />,
      },
      {
        path: "/club/register",
        element: <ClubRegisterPage />,
      },
      {
        path: "/club/register/done",
        element: <ClubRegisterDonePage />,
      },
      {
        path: "/paper",
        element: <PaperPage />,
      },
      {
        path: "/paper/purchase",
        element: <PaperPurchasePage />,
      },
      {
        path: "/paper/apply",
        element: <ApplyPaper />,
      },
      {
        path: "/apply/paper/done",
        element: <ApplyPaperDone />,
      },
      {
        path: "/paper/detail",
        element: <DetailPaper />,
      },
      {
        path: "/paper/paydone",
        element: <PaperPayDone />,
      },
      {
        path: "/my/*",
        element: <MyPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
