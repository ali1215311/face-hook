import { useNavigate } from "react-router";
import LogOutIcon from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";
const LogOut = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogOut = () => {
    setAuth({});
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
