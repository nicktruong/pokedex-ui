function SignIn() {
  return (
    <form className="auth__form">
      <h1 className="auth__form-header">Sign In</h1>

      <div className="auth__form-group">
        <label className="auth__form-label" htmlFor="email">
          Email
        </label>
        <input className="auth__form-input" type="email" id="email" />
      </div>

      <div className="auth__form-group">
        <label className="auth__form-label" htmlFor="password">
          Password
        </label>
        <input className="auth__form-input" type="password" id="password" />
      </div>

      <button>Sign In</button>
    </form>
  );
}

export default SignIn;
