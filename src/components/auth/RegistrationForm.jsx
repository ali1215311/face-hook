import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { registerApi } from "../../api";
import Field from "../common/Field";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm();

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const registrationData = {
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
    };

    try {
      const response = await registerApi.post(
        "/auth/register",
        registrationData,
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);

      setError("root.random", {
        type: "random",
        message: `User with the given email already exists!`,
      });
    }
  };
  return (
    <>
      <form
        className="border-b border-[#3F3F3F] pb-10 lg:pb-7.5"
        onSubmit={handleSubmit(submitForm)}
      >
        <Field label={"Frist Name"} error={errors.firstName}>
          <input
            className={`auth-input ${errors.firstName ? "border-red-500" : "border-gray-200"}`}
            name="firstName"
            type="text"
            id="firstName"
            autoComplete="given-name"
            {...register("firstName", {
              required: "First name is required!",
            })}
          />
        </Field>
        <Field label={"Last Name"} error={errors.lastName}>
          <input
            className={`auth-input ${errors.lastName ? "border-red-500" : "border-gray-200"}`}
            name="lastName"
            type="text"
            id="lastName"
            autoComplete="family-name"
            {...register("lastName", {
              required: "Last name is required!",
            })}
          />
        </Field>
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
            autoComplete="new-password"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </Field>
        <Field label={"Retype Password"} error={errors.confirmPassword}>
          <input
            className={`auth-input ${errors.confirmPassword ? "border-red-500" : "border-gray-200"}`}
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            {...register("confirmPassword", {
              required: "Confirm your password!",
              validate: (value) =>
                value === getValues("password") || "Password didn't match!",
            })}
          />
        </Field>

        <button
          className="auth-input bg-lwsGreen text-deepDark font-bold transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};
export default RegistrationForm;
