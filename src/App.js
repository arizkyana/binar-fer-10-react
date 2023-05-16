import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import Detail from "./pages/Detail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/result",
      element: <SearchResult />,
    },
    {
      path: "/detail/:carId/:carBrand",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
