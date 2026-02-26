import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import usePosts from "../../hooks/usePosts";
import { useProfile } from "../../hooks/useProfile";

import { actions } from "../../actions";
import AddPhoto from "../../assets/icons/addPhoto.svg";
import Field from "../common/Field";

const EditPost = ({ onCreate }) => {
  const { auth } = useAuth();
  const { state: profile } = useProfile();
  const { dispatch } = usePosts();

  const api = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handlePostSubmit = async (formData) => {
    dispatch({ type: actions.posts.DATA_FETCHING });
    try {
      const response = await api.post("/posts", { formData });

      if (response.status === 200) {
        dispatch({ type: actions.posts.POST_CREATED, data: response.data });
        onCreate();
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actions.posts.DATA_FETCH_ERROR, error: error?.message });
    }
  };

  const user = profile?.user ?? auth?.user;

  const avatar =
    user?.avatar ?? "uploads/avatar/avatar-1771783501566-635770722.jpg";

  return (
    <>
      <div className="card relative">
        <h6 className="mb-3 text-center text-lg font-bold lg:text-xl">
          Create Post
        </h6>

        <form onSubmit={handleSubmit(handlePostSubmit)}>
          <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
            <div className="flex items-center gap-3">
              <img
                className="max-h-10 max-w-10 rounded-full lg:max-h-14.5 lg:max-w-14.5"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`}
                alt={user?.firstName}
              />
              <div>
                <h6 className="text-lg lg:text-xl">
                  {user?.firstName} {user?.lastName}
                </h6>

                <span className="text-sm text-gray-400 lg:text-base">
                  Public
                </span>
              </div>
            </div>

            <label
              className="btn-primary cursor-pointer text-gray-100!"
              htmlFor="photo"
            >
              <img src={AddPhoto} alt="Add Photo" />
              Add Photo
            </label>
            <input type="file" name="photo" id="photo" className="hidden" />
          </div>

          <Field error={errors.content}>
            <textarea
              name="content"
              id="content"
              placeholder="Share your thoughts..."
              className="h-30 w-full bg-transparent focus:outline-none lg:h-40"
              {...register("content")}
            ></textarea>
          </Field>
          <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
            <button
              className="auth-input bg-lwsGreen text-deepDark font-bold transition-all hover:opacity-90"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default EditPost;
