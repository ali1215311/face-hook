import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useAvatar } from "../../hooks/useAvatar";
import useAxios from "../../hooks/useAxios";
import PostCommentsList from "./PostCommentsList";

const PostComment = ({ post, isComment }) => {
  const { auth } = useAuth();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const avatar = useAvatar(post, isComment);

  const api = useAxios();

  const handleComment = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await api.patch(`/posts/${post?.id}/comment`, {
          comment,
        });

        if (response.status === 200) {
          setComments([...response.data.comments]);
          setComment("");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <div>
        <div className="flex-center mb-3 gap-2 lg:gap-4">
          <img
            className="max-h-7 max-w-7 rounded-full lg:max-h-8.5 lg:max-w-8.5"
            src={avatar}
            alt={auth?.user?.firstName}
          />

          <div className="flex-1">
            <input
              type="text"
              className="bg-lighterDark h-8 w-full rounded-full px-4 text-xs focus:outline-none sm:h-9.5"
              name="post"
              id="post"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => handleComment(e)}
              placeholder="What's on your mind?"
            />
          </div>
        </div>
        <div className="mt-4">
          {comments.length > 0 ? (
            <button className="text-gray-300 max-md:text-sm">
              All Comment ▾
            </button>
          ) : (
            <p className="text-center text-gray-300 max-md:text-sm">
              No comments yet!
            </p>
          )}
        </div>
        <div className="divide-lighterDark space-y-4 divide-y pl-2 lg:pl-3">
          {comments &&
            comments.map((comment) => (
              <PostCommentsList key={comment?.id} comment={comment} />
            ))}
        </div>
      </div>
    </>
  );
};
export default PostComment;
