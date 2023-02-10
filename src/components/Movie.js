import { Link } from "react-router-dom";

const CardMovie = () => {
  return (
    <div className="card">
      <div className="card-body">
        <img src="..." className="card-img-top" alt="..." />
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="/" class="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

export default CardMovie;
