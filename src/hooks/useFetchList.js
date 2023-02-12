import { useEffect, useState } from "react";
import swAlert from "@sweetalert/with-react";

export const useFetchList = ({ fetchDataFunction = () => {} }) => {
  const [isLoading, setLoading] = useState(false);
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchDataFunction()
        .then((res) => {
          const apiData = res.results;
          setEntities(apiData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          swAlert(<h2>Hubo un error </h2>);
        });
    }, 1000);
  }, [fetchDataFunction]);

  return { entities, isLoading };
};
