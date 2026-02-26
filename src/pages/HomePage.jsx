import { useEffect } from "react";
import { actions } from "../actions";
import NewPost from "../components/posts/NewPost";
import PostList from "../components/posts/PostList";
import useAxios from "../hooks/useAxios";
import usePosts from "../hooks/usePosts";

const HomePage = () => {
  const { state, dispatch } = usePosts();
  const api = useAxios();

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
  }, [api, dispatch]);

  return (
    <>
      <NewPost />
      <PostList posts={state?.posts} isComment={true} />
    </>
  );
};
export default HomePage;
