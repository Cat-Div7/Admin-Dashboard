import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicRoute, ProtectedRoute } from "@utils";
import { LandingPage, Root, LoginPage, RegisterPage, BlogsPage } from "@pages";
import { MainLayout } from "@layouts";
import { generateFakeToken } from "@utils";
import { STORAGE_KEY_TOKEN } from "@constants";

const router = createBrowserRouter([
  // Public Routes (No login required)
  {
    element: <PublicRoute />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
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
  // localStorage.setItem(STORAGE_KEY_TOKEN, t);
  // localStorage.clear();


  document.documentElement.setAttribute("theme-mode", "dark");

  return <RouterProvider router={router} />;
}

export default App;
