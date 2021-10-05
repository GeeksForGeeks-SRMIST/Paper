import "./sidebarLink.css";
import { Link } from "react-router-dom";
function SidebarLink({ text, Icon, className, href }) {
  return (
    <div>
      <Link to={`${href}`} className="no-style">
        <div className={`link ${className}`}>
          <Icon />
          <h2>{text}</h2>
        </div>
      </Link>
    </div>
  );
}
export default SidebarLink;
