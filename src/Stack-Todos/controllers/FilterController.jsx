import propTypes from "prop-types";

export default function FilterController({ filter, handleFilter }) {
  return (
    <div className="flex  space-x-1">
      <button
        className={`btn ${filter === "all" ? "active" : ""}`}
        onClick={() => handleFilter("all")}
      >
        All
      </button>
      <button
        className={`btn ${filter === "running" ? "active" : ""}`}
        onClick={() => handleFilter("running")}
      >
        Running
      </button>
      <button
        className={`btn ${filter === "completed" ? "active" : ""}`}
        onClick={() => handleFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
FilterController.propTypes = {
  handleFilter: propTypes.func.isRequired,
  filter: propTypes.string,
};
