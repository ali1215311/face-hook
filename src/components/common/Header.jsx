import { Link } from "react-router";
import HomeIcon from "../../assets/icons/home.svg";

import NotificationIcon from "../../assets/icons/notification.svg";
import AvatarIcon from "../../assets/images/avatars/avatar_1.png";
import Logo from "../../assets/images/logo.svg";
import LogOut from "../auth/LogOut";
const Header = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/">
            <img className="max-w-25 rounded-full lg:max-w-32.5" src={Logo} />
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/" className="btn-primary">
              <img src={HomeIcon} alt="Home" />
              Home
            </Link>
            <button className="icon-btn">
              <img src={NotificationIcon} alt="Notification" />
            </button>

            <LogOut />

            <Link to="/me" className="flex-center ml-8! gap-3">
              <span className="text-lg font-medium lg:text-xl">Sumit</span>
              <img
                className="max-h-8 max-w-8 lg:max-h-11 lg:max-w-11"
                src={AvatarIcon}
                alt="avatar"
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
