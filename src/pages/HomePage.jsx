import { useEffect, useReducer } from "react";
import { actions } from "../actions";
import PostList from "../components/posts/PostList";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import { initialState, postReducer } from "../reducers/postReducer";

const HomePage = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const api = useAxios();
  const { auth } = useAuth();
  const { state: profileState } = useProfile();

  const avatar =
    profileState?.user?.avatar ??
    auth?.user?.avatar ??
    "uploads/avatar/avatar-1771783501566-635770722.jpg";

  useEffect(() => {
    dispatch({ type: actions.posts.DATA_FETCHING });
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        if (response.status === 200) {
          dispatch({ type: actions.posts.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.posts.DATA_FETCH_ERROR,
          error: error?.message,
        });
      }
    };
    fetchPosts();
  }, [api]);

  return (
    <>
      <div className="card">
        <div className="flex-center mb-3 gap-2 lg:gap-4">
          <img
            className="max-h-10 max-w-10 rounded-full lg:max-h-14.5 lg:max-w-14.5"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`}
            alt={auth?.user?.firstname}
          />

          <div className="flex-1">
            <textarea
              className="bg-lighterDark h-16 w-full rounded-md p-3 focus:outline-none sm:h-20 sm:p-6"
              name="post"
              id="post"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
        </div>
      </div>
      <PostList posts={state?.posts} />
    </>
  );
};
export default HomePage;
