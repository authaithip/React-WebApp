import { FaPen, FaRegTrashCan } from "react-icons/fa6";
import { useRef, useState } from "react";

function TodoItem(props) {
  const dialog = useRef();
  const [editing, setEditing] = useState(false);
  const openModal = (isEditing) => {
    isEditing ? setEditing(true) : setEditing(false);
    dialog.current.showModal();
  };
  const closeModal = () => [dialog.current.close()];
  const clickOutside = (e) => {
    if (e.target === dialog.current) {
      closeModal();
    }
  };
  return (
    <>
      <li className="flex bg-white rounded shadow-sm p-4 mt-4 first:mt-0">
        <div className="flex gap-x-4 mr-auto items-center">
          <div className="h-6 w-6 rounded-full shadow-sm text-white text-sm bg-teal-400 flex items-center justify-center leading-none ">
            {props.id + 1}
          </div>
          <div>
            <p className="font-semibold">{props.todo.title}</p>
            <p className="text-sm text-gray-400">{props.todo.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            className="todo-btn"
            onClick={() => openModal(true)}
          >
            <FaPen />
          </button>
          <button
            type="button"
            className="todo-btn"
            onClick={() => openModal(false)}
          >
            <FaRegTrashCan />
          </button>
        </div>
      </li>
      <dialog
        ref={dialog}
        onClick={clickOutside}
        className="rounded-md w-[480px"
      >
        <form className="p-6">
          <h3 className="font-semibold text-xl">
            {editing ? "Edit Task" : "Do you want to Delete"}
          </h3>
          <div className="mt-2">
            {editing ? "Edit" : "This will delete the task permanently."}
          </div>
          <div className="mt-2 text-end space-x-2">
            <button
              type="submit"
              className={
                editing
                  ? "rounded bg-teal-500 px-3 py-2 text-white hover:bg-teal-600"
                  : "rounded bg-rose-500 px-3 py-2 text-white hover:bg-rose-600"
              }
            >
              {editing ? "Confirm" : "delete"}
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="rounder border border-gray-200 px-3 py-2 hover:bg-gray-50"
            >
              close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default TodoItem;
