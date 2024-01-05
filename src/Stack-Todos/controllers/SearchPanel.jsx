import propTypes from "prop-types";

export default function SearchPanel({ toggleForm, term, handleSearch }) {
  return (
    <div className="flex space-x-3 mb-3">
      <input
        className="border-2 px-2 w-full"
        type="text"
        value={term}
        placeholder="Enter Search Item"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="button" className="btn" onClick={toggleForm}>
        New
      </button>
    </div>
  );
}
SearchPanel.propTypes = {
  term: propTypes.string.isRequired,
  handleSearch: propTypes.func.isRequired,
  toggleForm: propTypes.func.isRequired,
};
