import { useRef } from "react";
import { actions } from "../../actions";
import Edit from "../../assets/icons/edit.svg";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const api = useAxios();

  const fileUploadRef = useRef();

  const avatar =
    state?.user?.avatar ?? "uploads/avatar/avatar-1771783501566-635770722.jpg";

  const handleUploadPhoto = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of fileUploadRef.current.files) {
        formData.append("avatar", file);
      }

      if (formData.get("avatar") === null) return;

      const res = await api.post(
        `/profile/${state?.user?.id}/avatar`,
        formData,
      );

      if (res.status === 200) {
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          avatar: res.data.avatar,
        });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error?.message,
      });
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative mb-8 max-h-45 max-w-45 lg:mb-11 lg:max-h-54.5 lg:max-w-54.5">
        <div className="h-45 w-45 overflow-hidden rounded-full">
          <img
            className="max-w-full"
            src={`${BASE_URL}/${avatar}`}
            alt={state?.user?.firstName}
          />
        </div>

        <form>
          <button
            className="flex-center absolute right-4 bottom-4 z-10 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
            type="submit"
            onClick={handleUploadPhoto}
          >
            <img src={Edit} alt="Edit" />
          </button>
          <input
            id="file"
            type="file"
            accept="image/png, image/jpeg"
            ref={fileUploadRef}
            hidden
            onChange={updateImageDisplay}
          />
        </form>
      </div>
    </>
  );
};
export default ProfileImage;
