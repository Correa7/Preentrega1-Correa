import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar'; 
import NavButtons from './components/Navbar/NavButtons';
import CartIcon from './components/Navbar/CartIcon';
import NavLogo from './components/Navbar/NavLogo';

function App() {
  return (
    <div className="App">

      <NavBar>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLogo src="https://artstartsto.com/wp-content/uploads/2022/06/toronto-logo-png-transparent-e1663874591459.png"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
          <div id="ul" className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavButtons title="Home" herf="#"/>
                </li>
                <li className="nav-item">
                <NavButtons title="Products"herf="#"/> 
                </li>
                <li className="nav-item">
                <NavButtons title="About"herf="#"/>
                </li>
                <li className="nav-item">
                <NavButtons title="Contacts"herf="#"/> 
                </li>
            </ul>
          </div>
          <div  className="cartContainer">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav"><CartIcon/></ul>
            </div>
          </div>
          
        </nav>
      </NavBar>
    </div>
  );
}

export default App;
