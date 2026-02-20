import { useReducer } from "react";
import { ProfileContext } from "../context";
import { initialState, profileReducer } from "../reducers/profileReducer";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  return (
    <ProfileContext value={{ state, dispatch }}>{children}</ProfileContext>
  );
};
export default ProfileProvider;
