import { Navigate, Outlet } from "react-router-dom";

function RootLayout() {
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default RootLayout;
