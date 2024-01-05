import propTypes from "prop-types";
import TableItem from "./TableItem";

const TableView = ({ todos, toggleComplete, toggleSelect, editTodo }) => {
  return (
    <table className=" w-full">
      <thead>
        <tr>
          <th>#</th>
          <th>Time</th>
          <th>Todo</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-500">
        {todos.map((todo) => (
          <TableItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            toggleSelect={toggleSelect}
            editTodo={editTodo}
          />
        ))}
      </tbody>
    </table>
  );
};

TableView.propTypes = {
  todos: propTypes.array.isRequired,
  toggleComplete: propTypes.func.isRequired,
  toggleSelect: propTypes.func.isRequired,
  editTodo: propTypes.func.isRequired,
};

export default TableView;
