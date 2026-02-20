import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
// import { api } from "../../api";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Field from "../common/Field";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const api = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await api.post(`/auth/login`, formData);
      const { user, token } = response.data;
      const authToken = token.token;
      const refreshToken = token.refreshToken;
      setAuth({ user, authToken, refreshToken });

      navigate("/");
    } catch (error) {
      console.log(error);

      setError("root.random", {
        type: "random",
        message: `No user registered under the email: ${formData.email}`,
      });
    }
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
        {!!errors.root?.random && (
          <p className="font-semibold text-red-400">
            {errors.root.random.message}
          </p>
        )}
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
