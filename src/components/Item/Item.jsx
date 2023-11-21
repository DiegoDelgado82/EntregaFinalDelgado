import { Link } from "react-router-dom";
//Muesta el item de manera reducida
export const Item = ({id, name, img, description }) => {
  return (
    <div className="border m-1 col-5">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <Link to={`/item/${id}`}>
            <button className="btn btn-info">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
