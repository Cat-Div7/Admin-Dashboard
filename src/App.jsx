import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicRoute, ProtectedRoute } from "@utils";
import { LandingPage, Root, Login, Register, BlogsPage } from "@pages";
import { MainLayout } from "@layouts";
import { generateFakeToken } from "@utils";

const router = createBrowserRouter([
  // Public Routes (No login required)
  {
    element: <PublicRoute />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  // Protected Routes (Login Required)
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "admin",
        element: <MainLayout />,
        children: [
          { index: true, element: <Root /> },
          {
            path: "blog",
            element: <BlogsPage />,
            children: [{ path: ":id", element: <div>Post Details</div> }],
          },
          // { path: "users", element: <Users /> },
          // { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

function App() {
  const t = generateFakeToken();
  localStorage.setItem("token", t);

  localStorage.clear();

  document.documentElement.setAttribute("theme-mode", "dark");

  return <RouterProvider router={router} />;
}

export default App;
