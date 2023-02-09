import "./navbar.css";

const NavButtons = ({ title, href }) => {
  return (
    <>
      <div className="nav-item">
        <a className="nav-link" href={href}>
          {title}
        </a>
      </div>
    </>
  );
};

export default NavButtons;
