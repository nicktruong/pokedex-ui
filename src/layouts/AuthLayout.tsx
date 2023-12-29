import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <section className="auth">
      <div className="auth__img-container">
        <img className="auth__img" src="/assets/auth_img.png" alt="" />
      </div>

      <div className="auth__form-container">
        <Outlet />
      </div>
    </section>
  );
}

export default AuthLayout;
