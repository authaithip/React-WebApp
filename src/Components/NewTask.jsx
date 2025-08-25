import React, { useRef, useState } from "react";

function NewTask({ addTask }) {
  //   const [title, setTitle] = useState("");
  const title = useRef();    //ประกาศตัวแปร title เพื่ออ้างอิงถึง input field
  const form = useRef();     //ประกาศตัวแปร form เพื่ออ้างอิงถึง form element
  const submitForm = (e) => {   //ฟังก์ชันจัดการการ submitForm
    e.preventDefault();   //ป้องกันการรีเฟรชหน้าเว็บเมื่อ submitForm
    const task = {    //สร้างอ็อบเจ็กต์ task ใหม่
      title: title.current.value,
      date: new Date().toLocaleString(),
    };
    addTask(task);   //เรียกใช้ฟังก์ชัน addTask
    form.current.reset();   //รีเซ็ตฟอร์มโดยการล้างค่าทั้งหมดในฟอร์ม
  };
  return (
    <>
      <form ref={form} onSubmit={submitForm}>
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
            ref={title}    //เชื่อมโยง input field กับตัวแปร title
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
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
