import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar'; 
import NavButtons from './components/Navbar/NavButtons';
import CartIcon from './components/Navbar/NavCartIcon';
import NavLogo from './components/Navbar/NavLogo';
import Logo from './img/logo.png';
import ItemListContainer from './components/Cards/ItemListContainer';
import Card from './components/Cards/Cards';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">

      <NavBar>
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLogo src={Logo} alt={'Jasmina-Logo'}/>
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
                <NavButtons title="Pinturas"herf="#"/> 
                </li>
                <li className="nav-item">
                <NavButtons title="Esculturas"herf="#"/>
                </li>
                <li className="nav-item">
                <NavButtons title="Contacts"herf="#"/> 
                </li>
            </ul>
          </div>
          <div  className="cartContainer">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav"><CartIcon items={0}/></ul>
            </div>
          </div>
          
        </nav>
      </NavBar>
      <ItemListContainer>
          <Card  alt={'Room'} title={'Room'} precio={100} src={'https://img.freepik.com/vector-gratis/pizza-italiana-estilo-pop-art_24908-61698.jpg?w=740&t=st=1675906276~exp=1675906876~hmac=98a7d36edc739c58407844428788a8ab452d2ac84617a8e49980361ec8eb2029'}/>
          <Card  alt={'Train'} title={'Train'} precio={150} src={'https://img.freepik.com/vector-premium/arte-pop-conjunto-dibujos-animados-sandia-vector-ilustracion-diseno-grafico_24640-11717.jpg?w=740'} />
          <Card src={'https://img.itinari.com/page/content/original/ce9dc5a0-dab7-4f27-9300-ba6b3c6aeee5-pop-art-collage-mark-ashkenazi.jpg?ch=DPR&dpr=1.5&w=994&s=8b431e231a761377a0e5a06f2494f81c'} alt={'Video'} title={'Video'} precio={200}/>
          <Card src={'https://www.eluniversal.com.mx/sites/default/files/u39647/9_0.jpg'} alt={'Sidewalk'} title={'Sidewalk'} precio={328}/>
          <Card src={'https://3.bp.blogspot.com/-FfFxMCTR1rI/Uy8kbbdv7qI/AAAAAAABoLQ/0WJICWob33k/s1600/DSC_1394.jpg'} alt={'False Bowie'} title={'False Bowie'} precio={145}/>
          <Card src={'https://media.artsper.com/artwork/1227753_1_m.jpg'} alt={'Pops'} title={'Pops'} precio={220}/>
      </ItemListContainer>
      <Footer/>
    </div>
  );
}

export default App;
