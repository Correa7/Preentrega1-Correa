import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar'; 
import CardsList from './components/Cards/CardsList';
import ItemListContainer from './components/Cards/ItemListContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Saludos CoderHouse'>
        <CardsList/>
      </ItemListContainer>
      <Footer/>
    </div>
  );
}

export default App;
