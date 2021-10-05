import "./sidebar.css";
import SidebarLink from "./SidebarLink";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ListIcon from "@material-ui/icons/List";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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
        <SidebarLink text="Explore" Icon={SearchIcon} />
        <SidebarLink
          text="Publish Paper"
          Icon={ListIcon}
          className={`${
            window.location.pathname == "/paper" ? "active" : "notActive"
          }`}
          href="/paper"
        />
        <SidebarLink text="Messages" Icon={MailOutlineIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
        <SidebarLink text="Lists" Icon={ListAltIcon} />
        <SidebarLink text="Profile" Icon={PermIdentityIcon} />
        <SidebarLink text="More" Icon={MoreHorizIcon} />
      </div>
    </div>
  );
}
export default Sidebar;
