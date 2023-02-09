import "./navbar.css";

const NavLogo = ({ src, alt }) => {
  return (
    <>
      {" "}
      <a href="#">
        <img className="logo" src={src} alt={alt} />
      </a>
    </>
  );
};

export default NavLogo;
