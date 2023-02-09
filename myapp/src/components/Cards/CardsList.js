import "./ItemListContainer.css";
import Card from "./Cards";

const productos = [
  {
    id: 1,
    nombre: "Fun",
    categoria: "Pintura",
    precio: 200,
    stock: 10,
    url: "https://img.freepik.com/vector-gratis/pizza-italiana-estilo-pop-art_24908-61698.jpg?w=740&t=st=1675906276~exp=1675906876~hmac=98a7d36edc739c58407844428788a8ab452d2ac84617a8e49980361ec8eb2029",
  },
  {
    id: 2,
    nombre: "Pops",
    categoria: "Escultura",
    precio: 300,
    stock: 10,
    url: "https://media.artsper.com/artwork/1227753_1_m.jpg",
  },
  {
    id: 3,
    nombre: "Fruit",
    categoria: "Pintura",
    precio: 500,
    stock: 10,
    url: "https://img.freepik.com/vector-premium/arte-pop-conjunto-dibujos-animados-sandia-vector-ilustracion-diseno-grafico_24640-11717.jpg?w=740",
  },
  {
    id: 4,
    nombre: "Sidewalk",
    categoria: "Escultura",
    precio: 320,
    stock: 10,
    url: "https://www.eluniversal.com.mx/sites/default/files/u39647/9_0.jpg",
  },
  {
    id: 5,
    nombre: "Rock",
    categoria: "Escultura",
    precio: 400,
    stock: 10,
    url: "https://3.bp.blogspot.com/-FfFxMCTR1rI/Uy8kbbdv7qI/AAAAAAABoLQ/0WJICWob33k/s1600/DSC_1394.jpg",
  },
  {
    id: 6,
    nombre: "Marilyn",
    categoria: "Pintura",
    precio: 660,
    stock: 10,
    url: "https://img.itinari.com/page/content/original/ce9dc5a0-dab7-4f27-9300-ba6b3c6aeee5-pop-art-collage-mark-ashkenazi.jpg?ch=DPR&dpr=1.5&w=994&s=8b431e231a761377a0e5a06f2494f81c",
  },
];

const CardsList = () => {
  return (
    <>
      {productos.map((prod) => (
        <Card
          alt={prod.nombre}
          title={prod.nombre}
          precio={prod.precio}
          src={prod.url}
        />
      ))}
    </>
  );
};

export default CardsList;
