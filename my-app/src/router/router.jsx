import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Sunflowers from "../pages/Sunflowers";
import Wheatfield from "../pages/Wheatfield";
import Irises from "../pages/Irises";
import AlmondBlossoms from "../pages/AlmondBlossoms";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/sunflowers",
    element: <Sunflowers />,
  },
  {
    path: "/wheatfield",
    element: <Wheatfield />,
  },
  {
    path: "/irises",
    element: <Irises />,
  },
  {
    path: "/almond-blossoms",
    element: <AlmondBlossoms />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
