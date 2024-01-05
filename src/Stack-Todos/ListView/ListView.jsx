import propTypes from "prop-types";
import ListItem from "./ListItem";

function ListView({ todos, toggleComplete, toggleSelect, editTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

ListView.propTypes = {
  todos: propTypes.array.isRequired,
  toggleComplete: propTypes.func.isRequired,
  toggleSelect: propTypes.func.isRequired,
  editTodo: propTypes.func.isRequired,
};
export default ListView;
