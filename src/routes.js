import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Restaurant from "./pages/Restaurant/Restaurant";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/restaurant/:restaurantId", element: <Restaurant /> },
    ],
  },
]);

export default appRouter;
