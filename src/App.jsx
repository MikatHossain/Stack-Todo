import { Component } from "react";
import { v4 } from "uuid";

import ListView from "./Stack-Todos/ListView/ListView";
import TableView from "./Stack-Todos/TableView/TableView";
import Controller from "./Stack-Todos/controllers/Index";
import Modal from "./Stack-Todos/modal/Modal";

class App extends Component {
  state = {
    todos: [], // Store Todos
    searchTerm: "", // For search
    isOpenTodoForm: false,
    view: "list", // default view show
    filter: "all", // default filter
    activeBtn: null, // active button
    editingTodo: null, // editing
  };

  // Lifecycle Methods for saving data and retrieving from database
  componentDidMount() {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    this.setState({ todos: storedTodos });
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos)) || [];
  }

  // Create Todo  Method
  createTodo = (todo) => {
    const id = v4();
    todo.id = id;
    todo.time = new Date().toDateString();
    todo.isSelect = false;
    todo.isCompleted = false;
    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  // Edit a Todo
  editTodo = (id) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === id);
    this.setState({
      isOpenTodoForm: true,
      editingTodo: {
        id: todo.id,
        title: todo.title,
        description: todo.description,
      },
    });
  };

  // Update a Todo
  updateTodo = (updatedTodo) => {
    const todos = [...this.state.todos];
    let index = todos.findIndex((todo) => todo.id === updatedTodo.id);

    if (index !== -1) {
      todos[index] = { ...todos[index], ...updatedTodo };
      this.setState({ todos: todos, isOpenTodoForm: false });
    }
  };

  // List And Table Related Methods ---Select And Complete
  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((todo) => todo.id === todoId);

    todo.isCompleted = !todo.isCompleted;
    this.setState({ todos });
  };

  // Search Methods
  handleSearch = (event) => {
    this.setState({ searchTerm: event });
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  // Modal Related
  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  closeModal = () => {
    this.setState({
      isOpenTodoForm: false,
    });
  };

  // Filter ---Controller
  handleFilter = (filter) => {
    this.setState({ filter });
  };

  perFormFilter = (todos) => {
    const { filter } = this.state;

    if (filter === "completed") {
      return todos.filter((todo) => todo.isCompleted);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isCompleted);
    } else {
      return todos;
    }
  };

  // Bulk Controllers -- Clear selected, clear complete, reset
  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isCompleted);
    this.setState({ todos });
  };

  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos: todos });
  };

  reset = () => {
    this.setState({
      filter: "all",
      searchTerm: "",
      view: "list",
    });
  };

  // View Related Methods
  changeView = (event) => {
    this.setState({ view: event.target.value });
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.perFormFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        editTodo={this.editTodo}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        editTodo={this.editTodo}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  // Render Methods
  render() {
    return (
      <div className="container m-auto p-4">
        <div className="flex justify-center text-[3rem] mb-5 ">
          <h1 className="text-slate-500">Stack Todos</h1>
        </div>
        {/* Modal */}
        <Modal
          isOpen={this.state.isOpenTodoForm}
          toggleForm={this.toggleForm}
          createTodo={this.createTodo}
          closeModal={this.closeModal}
          editingTodo={this.state.editingTodo}
          updateTodo={this.updateTodo}
        />

        {/* Controller Component */}
        <Controller
          term={this.state.searchTerm}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
          view={this.state.view}
          handleFilter={this.handleFilter}
          reset={this.reset}
          clearCompleted={this.clearCompleted}
          clearSelected={this.clearSelected}
          changeView={this.changeView}
          filter={this.state.filter}
        />

        {/* View */}
        <div>{this.getView()}</div>
      </div>
    );
  }
}

export default App;
