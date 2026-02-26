import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import EditPost from "./EditPost";

const NewPost = () => {
  const { auth } = useAuth();
  const { state } = useProfile();
  const [newPostModal, setNewPostModal] = useState(false);

  const avatar =
    state?.user?.avatar ??
    auth?.user?.avatar ??
    "uploads/avatar/avatar-1771783501566-635770722.jpg";
  return (
    <>
      {!newPostModal ? (
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
                onClick={() => setNewPostModal(true)}
              ></textarea>
            </div>
          </div>
        </div>
      ) : (
        <EditPost onCreate={() => setNewPostModal(false)} />
      )}
    </>
  );
};
export default NewPost;
