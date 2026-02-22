import { useAvatar } from "../../hooks/useAvatar";

const PostCommentsList = ({ comment }) => {
  const avatar = useAvatar(comment);
  return (
    <>
      <div className="flex items-center gap-3 pt-4">
        <img
          className="max-h-6 max-w-6 rounded-full"
          src={avatar}
          alt={comment?.author?.name}
        />
        <div>
          <div className="flex gap-1 text-xs lg:text-sm">
            <span>{comment?.author?.name}: </span>
            <span>{comment?.comment}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostCommentsList;
