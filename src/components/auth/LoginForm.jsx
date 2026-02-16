import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);

    const user = { ...formData };
    setAuth({ user });

    navigate("/");
  };

  return (
    <>
      <form
        className="border-b border-[#3F3F3F] pb-10 lg:pb-15"
        onSubmit={handleSubmit(submitForm)}
      >
        <Field label={"Email"} error={errors.email}>
          <input
            className={`auth-input ${errors.email ? "border-red-500" : "border-gray-200"}`}
            name="email"
            type="email"
            id="email"
            autoComplete="email"
            {...register("email", { required: "Email is required!" })}
          />
        </Field>
        <Field label={"Password"} error={errors.password}>
          <input
            className={`auth-input ${errors.password ? "border-red-500" : "border-gray-200"}`}
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </Field>

        <button
          className="auth-input bg-lwsGreen text-deepDark font-bold transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};
export default LoginForm;
