import { useAppSelector } from "@/app/hooks";
import { Navigate, Outlet } from "react-router-dom";

function RootLayout() {
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default RootLayout;
