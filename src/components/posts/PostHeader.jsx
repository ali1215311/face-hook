import { useState } from "react";
import ThreeDots from "../../assets/icons/3dots.svg";
import Delete from "../../assets/icons/delete.svg";
import Edit from "../../assets/icons/edit.svg";
import Time from "../../assets/icons/time.svg";
import { useAvatar } from "../../hooks/useAvatar";
import { getDifferenceDateFromNow } from "../../utils";

const PostHeader = ({ post }) => {
  const [openAction, setOpenAction] = useState(false);
  const avatar = useAvatar(post);
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
          <button onClick={() => setOpenAction((prev) => !prev)}>
            <img src={ThreeDots} alt="3dots of Action" />
          </button>

          {openAction && (
            <div className="action-modal-container">
              <button className="action-menu-item hover:text-lwsGreen">
                <img src={Edit} alt="Edit" />
                Edit
              </button>
              <button className="action-menu-item hover:text-red-500">
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
