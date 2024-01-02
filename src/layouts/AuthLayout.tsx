import { useAppSelector } from "@/app/hooks";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function AuthLayout() {
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);
  const { pathname } = useLocation();

  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <section className="auth">
      <div className="auth__img-container">
        <img className="auth__img" src={`/assets/${pathname}.jpg`} alt="" />
      </div>

      <div className="auth__form-container">
        <Outlet />
      </div>
    </section>
  );
}

export default AuthLayout;
