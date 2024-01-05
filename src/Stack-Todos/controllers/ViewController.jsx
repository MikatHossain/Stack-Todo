import propTypes from "prop-types";

export default function ViewController({ changeView, view }) {
  return (
    <div className="flex space-x-2">
      <div>
        <input
          type="radio"
          id="list-view"
          name="view"
          value="list"
          onChange={changeView}
          checked={view === "list"}
        />
        <label
          htmlFor="list-view"
          className={`ml-2 text-lg ${view === "list" ? "text-sky-500" : ""}`}
        >
          List View
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="view"
          id="table"
          value="table"
          onChange={changeView}
          checked={view === "table"}
        />
        <label
          htmlFor="table"
          className={`ml-2 text-lg ${view === "table" ? "text-sky-500" : ""} `}
        >
          Table View
        </label>
      </div>
    </div>
  );
}
ViewController.propTypes = {
  view: propTypes.string,
  changeView: propTypes.func.isRequired,
};
