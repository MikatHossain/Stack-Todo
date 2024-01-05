import propTypes from "prop-types";

import BulkController from "./BulkController";
import ViewController from "./ViewController";
import FilterController from "./filter-controller";
import SearchPanel from "./searchPanel";
const Controller = ({
  toggleForm,
  term,
  handleSearch,
  handleFilter,
  changeView,
  view,
  clearSelected,
  reset,
  clearCompleted,
  filter,
}) => (
  <div>
    <SearchPanel
      term={term}
      toggleForm={toggleForm}
      handleSearch={handleSearch}
    />
    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center space-y-2 my-2">
      <div>
        <FilterController handleFilter={handleFilter} filter={filter} />
      </div>
      <div>
        <ViewController view={view} changeView={changeView} />
      </div>
      <div>
        <BulkController
          clearSelected={clearSelected}
          reset={reset}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  </div>
);
Controller.propTypes = {
  term: propTypes.string.isRequired,
  handleSearch: propTypes.func.isRequired,
  toggleForm: propTypes.func.isRequired,
  handleFilter: propTypes.func.isRequired,
  changeView: propTypes.func.isRequired,
  view: propTypes.string.isRequired,
  reset: propTypes.func.isRequired,
  clearCompleted: propTypes.func.isRequired,
  clearSelected: propTypes.func.isRequired,
  filter: propTypes.string,
};

export default Controller;
