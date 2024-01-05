import propTypes from "prop-types";

function ListItem({ todo, toggleComplete, toggleSelect, editTodo }) {
  return (
    <li className="flex justify-between items-center border px-2 ">
      <div className="flex space-x-4">
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
        <div>
          <h2 className="text-2xl font-bold">
            {todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
          </h2>
          <p className="text-sm">{todo.time}</p>
        </div>
      </div>
      <div className="text-lg">{todo.description}</div>
      <div className="space-x-2">
        <button className="btn" onClick={() => editTodo(todo.id)}>
          Edit
        </button>
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`btn ${todo.isCompleted ? "" : "bg-red-500"} `}
        >
          {todo.isCompleted ? "Complete" : "Running"}
        </button>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  todo: propTypes.object.isRequired,
  toggleComplete: propTypes.func.isRequired,
  toggleSelect: propTypes.func.isRequired,
  editTodo: propTypes.func.isRequired,
};
export default ListItem;
