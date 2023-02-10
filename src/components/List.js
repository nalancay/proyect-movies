import { Navigate } from "react-router-dom";
import CardMovie from "./Movie";

const List = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="row">
        <div className="col-3" style={{ border: "1 solid red" }}>
          <CardMovie />
        </div>
      </div>
    </>
  );
};

export default List;
