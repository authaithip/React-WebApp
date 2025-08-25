import React, { useState } from "react";

function NewTask({ addTask }) {
  const [title, setTitle] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    
    const task = {
      title,
      date: new Date().toLocaleString(),
    };
    addTask(task);
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="title" className="text-lg text-gray-400">
          Add New Task
        </label>
        <div className="flex gap-x-2 bg-white rounded-md shadow-sm p-2 pl-3 mt-2">
          <input
            id="title"
            type="text"
            className="focus:outline-none w-full"
            maxLength="30"
            placeholder="Type Something here..."
            autoFocus
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="w-40 px-3 py-2 rounded font-semibold bg-blue-500 text-white hover:bg-blue-700"
          >
            New Task
          </button>
        </div>
      </form>
    </>
  );
}

export default NewTask;
