import "./ItemListContainer.css";

const ItemListContainer = ({ children, greeting }) => {
  return (
    <>
      <div className="greeting">
        <h1>{greeting}</h1>
      </div>
      <div className="contenedor">{children}</div>
    </>
  );
};
export default ItemListContainer;
