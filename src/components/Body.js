import Browse from "./Browse";
import Login from "./Login";
import Error from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [],
    errorElement: <Error />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default Body;
