import "./ItemListContainer.css";

const Card = ({ src, alt, title, precio }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={src} alt={alt} />
      </div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        The value of the illustrations is expressed in US dollars.
      </p>
      <div className="cardBody">
        <h6 className="precio">
          <strong>Precio: $ {precio}</strong>
        </h6>
        <button className="btn btn-secondary me-md-2">Buy</button>
      </div>
    </div>
  );
};
export default Card;
