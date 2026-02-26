import { useReducer } from "react";
import { PostContext } from "../context";
import { initialState, postReducer } from "../reducers/postReducer";

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  return <PostContext value={{ state, dispatch }}>{children}</PostContext>;
};
export default PostProvider;
