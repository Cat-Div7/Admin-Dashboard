import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { PublicRoute, ProtectedRoute, ValidateRoute } from "@utils";
import {
  LandingPage,
  DashboardPage,
  AnalyticsPage,
  LoginPage,
  RegisterPage,
  BlogsPage,
} from "@pages";
import { MainLayout } from "@layouts";
import {} from "./pages";

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
        path: "home",
        element: <MainLayout />,
        handle: { breadcrumb: "Home" },
        children: [
          {
            index: true,
            element: <DashboardPage />,
            handle: { breadcrumb: "Dashboard" },
          },
          {
            path: "analytics",
            element: <AnalyticsPage />,
            handle: { breadcrumb: "Analytics" },
          },
          {
            path: "profile",
            element: <div>Profile Page</div>,
            handle: { breadcrumb: "Profile" },
          },
          {
            path: "users",
            element: <Outlet />,
            handle: { breadcrumb: "Users" },
            children: [
              { index: true, element: <div>Users Page</div> },
              {
                path: ":id",
                element: <ValidateRoute />,
                handle: ({ params }) => `Profile #${params.id}`,
                children: [{ index: true, element: <div>User Detail</div> }],
              },
            ],
          },
          {
            path: "blog",
            element: <Outlet />,
            handle: { breadcrumb: "Blog" },
            children: [
              { index: true, element: <BlogsPage /> },
              {
                path: ":id",
                element: <ValidateRoute />,
                handle: ({ params }) => `Profile #${params.id}`,
                children: [{ index: true, element: <div>Blog Details</div> }],
              },
            ],
          },
          {
            path: "settings",
            element: <div>Settings Page</div>,
            handle: { breadcrumb: "Settings" },
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
