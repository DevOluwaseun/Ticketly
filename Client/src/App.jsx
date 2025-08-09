import { Children } from "react";
import Home from "./ui/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./ui/Register";
import LoginForm from "./ui/LoginForm";
import AdminDashboard from "./components/admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
