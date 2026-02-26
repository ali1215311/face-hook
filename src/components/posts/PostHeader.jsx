import { useState } from "react";
import { actions } from "../../actions";
import ThreeDots from "../../assets/icons/3dots.svg";
import Delete from "../../assets/icons/delete.svg";
import Edit from "../../assets/icons/edit.svg";
import Time from "../../assets/icons/time.svg";
import { useAuth } from "../../hooks/useAuth";
import { useAvatar } from "../../hooks/useAvatar";
import useAxios from "../../hooks/useAxios";
import usePosts from "../../hooks/usePosts";
import { getDifferenceDateFromNow } from "../../utils";

const PostHeader = ({ post }) => {
  const [openAction, setOpenAction] = useState(false);
  const { dispatch } = usePosts();

  const avatar = useAvatar(post);
  const { auth } = useAuth();
  const api = useAxios();

  const isMe = post?.author?.id === auth?.user?.id;

  const handleDeletePost = async () => {
    dispatch({ type: actions.posts.DATA_FETCHING });
    try {
      const response = await api.delete(`/posts/${post.id}`);

      if (response.status === 200) {
        dispatch({ type: actions.posts.POST_DELETED, data: post?.id });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actions.posts.DATA_FETCH_ERROR, error: error?.message });
    }
  };

  return (
    <>
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            className="max-h-10 max-w-10 rounded-full lg:max-h-14.5 lg:max-w-14.5"
            src={avatar}
            alt="avatar"
          />
          <div>
            <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
            <div className="flex items-center gap-1.5">
              <img src={Time} alt="time" />
              <span className="text-sm text-gray-400 lg:text-base">
                {getDifferenceDateFromNow(post?.createAt)}
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          {isMe && (
            <button onClick={() => setOpenAction((prev) => !prev)}>
              <img src={ThreeDots} alt="3dots of Action" />
            </button>
          )}

          {openAction && (
            <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={Edit} alt="Edit" />
                Edit
              </button>
              <button
                className="action-menu-item hover:text-red-500"
                onClick={handleDeletePost}
              >
                <img src={Delete} alt="Delete" />
                Delete
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
export default PostHeader;
