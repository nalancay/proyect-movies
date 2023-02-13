import { useEffect, useState } from "react";
import swAlert from "@sweetalert/with-react";

export const useFetchList = ({
  fetchDataFunction = () => {},
  keyword = "",
}) => {
  const [isLoading, setLoading] = useState(false);
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchDataFunction(keyword)
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
  }, [fetchDataFunction, keyword]);

  return { entities, isLoading };
};
