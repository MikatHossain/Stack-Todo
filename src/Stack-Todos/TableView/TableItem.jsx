import propTypes from "prop-types";

const TableItem = ({ todo, toggleComplete, toggleSelect, editTodo }) => {
  return (
    <tr className="border  text-center ">
      <td className="py-4">
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
      </td>
      <td className="py-4">
        <p>{todo.time}</p>
      </td>
      <td className="py-4">
        <h2>{todo.title}</h2>
      </td>
      <td>{todo.description}</td>

      <td className="py-4 space-x-2">
        <button className="btn" onClick={() => editTodo(todo.id)}>
          Edit
        </button>
        <button
          className={`btn ${todo.isCompleted ? "" : "bg-red-500"}`}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isCompleted ? "Complete" : "Running"}
        </button>
      </td>
    </tr>
  );
};

TableItem.propTypes = {
  todo: propTypes.object.isRequired,
  toggleComplete: propTypes.func.isRequired,
  toggleSelect: propTypes.func.isRequired,
  editTodo: propTypes.func.isRequired,
};

export default TableItem;
