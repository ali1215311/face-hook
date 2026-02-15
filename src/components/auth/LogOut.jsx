import { useNavigate } from "react-router";
import LogOutIcon from "../../assets/icons/logout.svg";
const LogOut = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("login");
  };

  return (
    <>
      <button onClick={handleLogOut} className="icon-btn">
        <img src={LogOutIcon} alt="Logout" />
      </button>
    </>
  );
};
export default LogOut;
