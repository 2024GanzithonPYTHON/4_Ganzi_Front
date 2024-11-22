import { createBrowserRouter } from "react-router-dom";
import { OutletContainer } from "./OutletContainer";
import MainPage from "./pages/mainPage/mainPage";
import ClubPage from "./pages/clubPage/ClubPage";
import PaperPage from "./pages/paperPage/PaperPage";
import MyPage from "./pages/myPage/MyPage";
import DetailClub from "./pages/clubDetailPage/DetailClub";
import PurchasePage from "./pages/paperPurchasePage/PaperPurchasePage";
import ClubPurchasePage from "./pages/clubPuchasePage/ClubPurchasePage";
import PaperPurchasePage from "./pages/paperPurchasePage/PaperPurchasePage";

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
        children: [
          {
            path: "",
            element: <ClubPage />,
          },
          {
            path: "purchase",
            element: <ClubPurchasePage />,
          },
        ]
      },
      {
        path: "/detailclub",
        element: <DetailClub />,
      },
      {
        path: "/paper",
        children: [
          {
            path: "",
            element: <PaperPage />,
          },
          {
            path: "purchase",
            element: <PaperPurchasePage />,
          },
        ]
      },
      {
        path: "/my",
        element: <MyPage />,
      },
    ],
  },
]);
