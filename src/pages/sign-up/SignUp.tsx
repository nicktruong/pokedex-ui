import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { IRegisterUser } from "@/common/interfaces";
import { ErrorMessage } from "@hookform/error-message";
import { joiResolver } from "@hookform/resolvers/joi";
import clsx from "clsx";
import Joi from "joi";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  clearState,
  register as registerAccount,
} from "@/app/slices/authSlice";

interface IFormInput {
  email: string;
  password: string;
  name: string;
}

const schema = Joi.object<IFormInput>({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .max(100)
    .required()
    .messages({
      "string.base": "Email must be string",
      "string.empty": "Email must not be empty",
      "string.email": "Invaild email",
      "string.max": "Email is too long",
      "any.required": "Email is required",
    }),
  password: Joi.string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/
    )
    .required()
    .messages({
      "string.base": "Password must be string",
      "string.empty": "Password must not be empty",
      "string.pattern.base":
        "Password must have between 8 and 100 characters, at least 1 uppercase, 1 lower case, 1 number, and 1 special character",
      "any.required": "Password is required",
    }),
  name: Joi.string()
    .pattern(/([a-zA-Z]+\s?)+[a-zA-Z]$/)
    .required()
    .messages({
      "string.base": "Name must be string",
      "string.empty": "Name must not be empty",
      "string.pattern.base": "Invalid Name",
      "any.required": "Name is required",
    }),
});

function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isError = useAppSelector(({ auth }) => auth.isError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: { email: "", password: "" },
    resolver: joiResolver(schema),
    criteriaMode: "all",
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const payload: IRegisterUser = {
      email: data.email,
      name: data.name,
      password: data.password,
    };

    await dispatch(registerAccount(payload));
    navigate("/sign-in");
  };

  const clearFormError = () => {
    dispatch(clearState());
  };

  return (
    <form
      className={clsx("auth__form auth__form--signup")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="auth__form-header">Sign Up</h1>

      <div className="auth__form-group">
        <label className="auth__form-label" htmlFor="name">
          Name
        </label>
        <input
          className="auth__form-input"
          type="name"
          id="name"
          {...register("name")}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ messages }) => {
            return (
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="auth__form-error">
                  {message}
                </p>
              ))
            );
          }}
        />
      </div>

      <div className="auth__form-group">
        <label className="auth__form-label" htmlFor="email">
          Email
        </label>
        <input
          className="auth__form-input"
          type="email"
          id="email"
          {...register("email")}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ messages }) => {
            return (
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="auth__form-error">
                  {message}
                </p>
              ))
            );
          }}
        />
      </div>

      <div className="auth__form-group">
        <label className="auth__form-label" htmlFor="password">
          Password
        </label>
        <input
          className="auth__form-input"
          type="password"
          id="password"
          {...register("password")}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ messages }) => {
            return (
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="auth__form-error">
                  {message}
                </p>
              ))
            );
          }}
        />
      </div>

      {isError && <p className="auth__form-error">Wrong credentials</p>}

      <div className="auth__submit-container">
        <button className="auth__submit-btn">Sign Up</button>
        <p className="auth__submit-signin">
          <span>Already have an account?</span>{" "}
          <Link
            to="/sign-in"
            className="auth__signin-link"
            onClick={clearFormError}
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUp;
