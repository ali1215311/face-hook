import { useAuth } from "./useAuth";
import { useProfile } from "./useProfile";

export const useAvatar = (post, isComment = false) => {
  const { auth } = useAuth();
  const { state } = useProfile();

  const isMe = post?.author?.id === state?.user?.id;

  const avatarUrl = isComment
    ? (state?.user?.avatar ?? auth?.user?.avatar)
    : isMe
      ? state?.user?.avatar
      : post?.author?.avatar;

  const avatar =
    avatarUrl ?? "uploads/avatar/avatar-1771783501566-635770722.jpg";

  return `${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`;
};
