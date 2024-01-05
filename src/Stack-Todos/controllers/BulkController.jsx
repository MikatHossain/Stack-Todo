import propTypes from "prop-types";

function BulkController({ clearSelected, reset, clearCompleted }) {
  return (
    <div className="space-x-1 md:flex ">
      <button className={`btn  hover:active }`} onClick={clearSelected}>
        Clear Selected
      </button>
      <button className="btn hover:active" onClick={clearCompleted}>
        Clear Completed
      </button>
      <button className="btn hover:active" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

BulkController.propTypes = {
  clearSelected: propTypes.func.isRequired,
  clearCompleted: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
};

export default BulkController;
