import React, { useState } from "react";
import NewTask from "../Components/NewTask";
import TodoItem from "../Components/TodoItem";
import Spinner from "../Components/Spinner";
import { toast } from "react-toastify";

function HomePage() {
  const [todos, setTodos] = useState([]); //เก็บรายการ todo ทั้งหมดไว้ใน array
  const [loading, setLoading] = useState(false); //สถานะการโหลดข้อมูล
  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  const addTask = async (task) => {
    setLoading(true); //ตั้งสถานะให้เป็น true
    setTodos((prevTodos) => [...prevTodos, task]); //เพิ่มงานใหม่ลงใน array ของ todos และคัดลอกงานเก่าๆ ไว้ด้วย
    await delay(); //ขอให้ฟังก์ชั่น delay ทำงานเสร็จก่อน
    setLoading(false); //ตั้งสถานะโหลดเป็น false
    toast.success("Successfully Added task!");
  };

  const deleteTask = async (id) => {
    setLoading(true);
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id)); //กรองเอางานที่ไม่ตรงกับ id ที่ส่งออกมาจาก array ของ Todos
    await delay();
    setLoading(false);
    toast.error("Successfully Delete task!");
  };

  const updateTask = async (task, id) => {
    setLoading(true);
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? task : t)));
    await delay();
    setLoading(false);
    toast.info("Successfully Updated task!");
  };
  return (
    <>
      <NewTask addTask={addTask} />{" "}
      {/* ส่งฟังก์ชั่น addtask ไปยังคอมโพเนนนต์ Newtask เพื่อให้ Newtask สามารถเพิ่มงานใหม่ได้ */}
      {loading ? (
        <Spinner />
      ) : (
        todos.length > 0 && (
          <ul className="bg-gray-200 rounded-md shadow-sm p-4">
            {todos.map((todo, i) => (
              <TodoItem
                key={i}
                id={i}
                todo={todo}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
}

export default HomePage;
