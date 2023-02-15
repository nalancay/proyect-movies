import { useNavigate } from "react-router-dom";
import sweetAlert from "@sweetalert/with-react";
import { FormattedMessage } from "react-intl";

const Search = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    if (keyword.length === 0) {
      sweetAlert(
        <h2>
          <FormattedMessage id="header.search.warning message.text" />
        </h2>
      );
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/results_movies?keyword=${keyword}`);
    }
  };

  return (
    <form className="d-flex aling-items-center" onSubmit={submitHandler}>
      <label className="form-label mb-0 mx-2">
        <FormattedMessage id="header.search.placeholder">
          {(msg) => (
            <input
              className="form-control"
              type="text"
              name="keyword"
              placeholder={msg}
            />
          )}
        </FormattedMessage>
      </label>
      <button className="btn btn-success ml-2" type="submit">
        <FormattedMessage id="header.search.text" />
      </button>
    </form>
  );
};

export default Search;
