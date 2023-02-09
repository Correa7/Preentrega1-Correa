import "./navbar.css";
import NavButtons from "./NavButtons";
import CartIcon from "./NavCartIcon";
import NavLogo from "./NavLogo";
import Logo from "../img/logo.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLogo src={Logo} alt={"Jasmina-Logo"} />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="ul" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavButtons title="Home" herf="#" />
            </li>
            <li className="nav-item">
              <NavButtons title="Pinturas" herf="#" />
            </li>
            <li className="nav-item">
              <NavButtons title="Esculturas" herf="#" />
            </li>
            <li className="nav-item">
              <NavButtons title="Dibujos" herf="#" />
            </li>
            <li className="nav-item">
              <NavButtons title="Grabados" herf="#" />
            </li>
          </ul>
        </div>
        <div className="cartContainer">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <CartIcon items={0} />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
