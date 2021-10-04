import "./sidebarLink.css";
function SidebarLink({ text, Icon, type }) {
  return (
    <div>
      {type === "profile" ? (
        <div className="link_profile">
          <Icon />
          <h2>{text}</h2>
        </div>
      ) : (
        <div className="link">
          <Icon />
          <h2>{text}</h2>
        </div>
      )}
    </div>
  );
}
export default SidebarLink;
