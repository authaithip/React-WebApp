import { FaPen, FaRegTrashCan } from "react-icons/fa6";
import { useRef, useState } from "react";

function TodoItem(props) {
  const dialog = useRef();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.todo.title);

  const summitForm = (e) => {
    e.preventDefault();
    if (editing) {
      const task = {
        title: title,
        date: new Date().toLocaleString(),
      };
      console.log(task);
      props.updateTask(task, props.id);
    } else {
      props.deleteTask(props.id);
    }

    closeModal();
  };

  const openModal = (isEditing) => {
    isEditing ? setEditing(true) : setEditing(false);
    dialog.current.showModal();
  };

  const closeModal = (e) => [dialog.current.close()];
  const ClickOutside = (e) => {
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
        onClick={ClickOutside}
        className="rounded-md w-[480px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 x-50"
      >
        <form onSubmit={summitForm} className="p-6">
          <h3 className="font-semibold text-xl">
            {editing ? "Edit Task" : "Do you want to Delete"}
          </h3>

          <div className="mt-2">
            {editing ? (
              <input
                type="text"
                className="focus:outline-none w-full border rounded py-2 px-3"
                maxLength="30"
                placeholder="Type Something here..."
                autoFocus
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              "This will delete the task permanently."
            )}
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
              {editing ? "Comfirm" : "Delete"}
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="rounded border-gray-200 px-3 py-2 hover:bg-gray-500"
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default TodoItem;
