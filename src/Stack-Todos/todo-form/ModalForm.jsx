import propTypes from "prop-types";
import { Component } from "react";

export default class ModalForm extends Component {
  state = {
    title: "",
    description: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.editingTodo !== prevProps.editingTodo) {
      this.setState({
        title: this.props.editingTodo ? this.props.editingTodo.title : "",
        description: this.props.editingTodo
          ? this.props.editingTodo.description
          : "",
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.title.trim() === "") {
      alert("Title cannot be empty");
      return false;
    }

    if (this.props.editingTodo) {
      this.props.updateTodo({
        id: this.props.editingTodo.id,
        title: this.state.title,
        description: this.state.description,
      });
    } else {
      this.props.createTodo({
        title: this.state.title,
        description: this.state.description,
      });
    }

    event.target.reset();

    this.setState({
      title: "",
      description: "",
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit} className="p-3">
        <div>
          <label htmlFor="" className="block text-lg my-2">
            Enter Task Title
          </label>
          <input
            className="w-full p-2 border-2 rounded"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Enter a title"
          />
        </div>
        <div>
          <label htmlFor="" className="block text-lg my-2 ">
            Describe Something
          </label>
          <textarea
            className="w-full h-20 border-2 rounded"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="write some short description"
          ></textarea>
        </div>

        <button type="submit" className={`btn block ml-auto mt-2  text-lg `}>
          {this.props.editingTodo ? "Update" : "Create Todo"}
        </button>
      </form>
    );
  }
}

ModalForm.propTypes = {
  createTodo: propTypes.func.isRequired,
  editingTodo: propTypes.object,
  updateTodo: propTypes.object,
};
