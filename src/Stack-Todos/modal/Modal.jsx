import propTypes from "prop-types";
import ModalForm from "./../todo-form/ModalForm";
export default function Modal({
  isOpen,
  createTodo,
  closeModal,
  editingTodo,
  updateTodo,
}) {
  return (
    <div
      className={`border fixed mx-auto inset-x-0 w-96  p-3 rounded bg-sky-300 ${
        isOpen ? "block" : "hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex justify-between items-start ">
        <h1 className="text-2xl font-bold">Create New Todo Item</h1>
        <span
          onClick={closeModal}
          className="text-red-500 text-[2rem] inset-0 transition-opacity leading-3 cursor-pointer"
        >
          &times;
        </span>
      </div>
      <hr />
      <div className="w-full ">
        <ModalForm
          createTodo={createTodo}
          updateTodo={updateTodo}
          editingTodo={editingTodo}
        />
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  createTodo: propTypes.func.isRequired,
  closeModal: propTypes.func.isRequired,
  editingTodo: propTypes.object,
  updateTodo: propTypes.object,
};
