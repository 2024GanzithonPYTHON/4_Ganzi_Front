import { createBrowserRouter } from "react-router-dom";
import { OutletContainer } from "./OutletContainer";
import MainPage from "./pages/mainPage/mainPage";
import ClubPage from "./pages/clubPage/ClubPage";
import PaperPage from "./pages/paperPage/PaperPage";
import MyPage from "./pages/myPage/MyPage";
import ClubRegisterPage from "./pages/clubRegisterPage/ClubRegisterPage";
import ClubRegisterDonePage from "./pages/clubRegisterPage/ClubRegisterDonePage";

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
        path: "/club/register",
        element: <ClubRegisterPage />,
      },
      {
        path: "/club/register/done",
        element: <ClubRegisterDonePage />,
      },
    ],
  },
]);
