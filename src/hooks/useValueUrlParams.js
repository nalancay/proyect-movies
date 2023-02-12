export const useUrlParams = ({
  queryParamsString = "",
  stringIdQuery = "",
}) => {
  const query = new URLSearchParams(queryParamsString);
  const valueQuery = query.get(stringIdQuery);

  return { valueQuery };
};
