import "./sidebar.css";
import SidebarLink from "./SidebarLink";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Create from "@material-ui/icons/Create";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Publish from "@material-ui/icons/CloudUploadOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/ExitToAppOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* <SidebarLink text="Test Account" Icon={PersonIcon} type="profile" /> */}
      <div className="links">
        {console.log(window.location.pathname)}
        <SidebarLink
          text="Home"
          Icon={HomeIcon}
          className={`${
            window.location.pathname == "/dashboard" ? "active" : "notActive"
          }`}
          href="/dashboard"
        />
        <SidebarLink text="Explore" Icon={SearchIcon} href="/search" />
        <SidebarLink
          text="Publish Paper"
          Icon={Publish}
          className={`${
            window.location.pathname == "/paper" ? "active" : "notActive"
          }`}
          href="/paper"
        />
        <SidebarLink
          text="Write Paper"
          Icon={Create}
          className={`${
            window.location.pathname == "/write" ? "active" : "notActive"
          }`}
          href="/write"
        />
        <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
        <SidebarLink text="All Papers" Icon={ListAltIcon} />
        <SidebarLink text="Profile" Icon={PermIdentityIcon} />
        <SidebarLink text="Log Out" Icon={MoreHorizIcon} />
      </div>
    </div>
  );
}
export default Sidebar;
