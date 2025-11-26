import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { PublicRoute, ProtectedRoute, ValidateRoute } from "@utils";
import {
  ErrorPage,
  LandingPage,
  LoginPage,
  RegisterPage,
  DashboardPage,
  AnalyticsPage,
  ProfilePage,
  UsersPage,
  UserDetailsPage,
  BlogsPage,
} from "@pages";
import { MainLayout } from "@layouts";

const router = createBrowserRouter([
  // Public Routes (No login required)
  {
    element: <PublicRoute />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },

  // Protected Routes (Login Required)
  {
    element: <ProtectedRoute />,
    errorElement: <ErrorPage />,
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
            element: <ProfilePage />,
            handle: { breadcrumb: "Profile" },
          },
          {
            path: "users",
            element: <Outlet />,
            handle: { breadcrumb: "Users" },
            children: [
              { index: true, element: <UsersPage /> },
              {
                path: ":id",
                element: <ValidateRoute />,
                handle: ({ params }) => `Profile #${params.id}`,
                children: [{ index: true, element: <UserDetailsPage /> }],
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
