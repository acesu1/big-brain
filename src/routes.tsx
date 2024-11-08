import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Dashboard } from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
