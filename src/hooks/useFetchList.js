import { useContext, useEffect, useState } from "react";
import swAlert from "@sweetalert/with-react";
import { LangContext } from "../langContext/langContex";

export const useFetchList = ({
  fetchDataFunction = () => {},
  keyword = "",
}) => {
  const [isLoading, setLoading] = useState(false);
  const [entities, setEntities] = useState([]);
  const lang = useContext(LangContext);
  const language = lang?.language ?? "en-US";

  useEffect(() => {
    setLoading(true);

    fetchDataFunction({ language, keyword })
      .then((res) => {
        const apiData = res.results;
        setEntities(apiData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        swAlert(<h2>Hubo un error </h2>);
      });
  }, [fetchDataFunction, keyword, language]);

  return { entities, isLoading };
};
