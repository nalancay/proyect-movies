import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/");
    }
  });
  return <div>List</div>;
};

export default List;
