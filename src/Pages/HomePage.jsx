import React, { useState } from "react";
import NewTask from "../Components/NewTask";
import TodoItem from "../Components/TodoItem";
import Spinner from "../Components/Spinner";
import { toast } from "react-toastify";

function HomePage() {
  const [todos, setTodos] = useState([]); //เฏบรายการ to-do  ทั้งหมดเป็น array
  const [loading, setLoading] = useState(false); //สถานะการโหลดข้อมูล
  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  const addTask = async (task) => {
    setLoading(true); //ตั้งสถานะการโหลดเป็น true
    setTodos((prevtodos) => [...prevtodos, task]); //เพิ่มงานใหม่ลงใน array ของ todos และคัดลอกงานเก่าๆมาไว้ด้วย
    await delay(); //รอฟังก์ชัน delay ทำงานเสร็จก่อน
    setLoading(false); //ตั้งสถานะการโหลดเป็น false
    toast.success("Successfully Added Task!");
  };

  const deleteTask = async (id) => {
    setLoading(true);
    setTodos((prevtodos) => prevtodos.filter((_, i) => i !== id)); //กรองเอางานที่ไม่ตรงกับ id ที่ส่งมาออกจากอาเรย์ของ todos
    await delay();
    setLoading(false);
    toast.error("Successfully Deleted Task!");
  };

  const updateTask = async (task, id) => {
    setLoading(true);
    setTodos((prevtodos) => prevtodos.map((t, i) => (i === id ? task : t)));
    await delay();
    setLoading(false);
    toast.info("Successfully Updated Task!");
  };

  return (
    <>
      <NewTask addTask={addTask} />{" "}
      {/*ส่งฟังก์ชัน addTask ไปยังคอมโพแนนต์ NewTask สามรถเพิ่มงานใหม่ได้*/}
      {loading ? (
        <Spinner />
      ) : (
        todos.length > 0 && (
          <ul className="bg-gray-200 rounded-md shadow-sm p-4">
            {todos.map(
              (
                todo,
                i //วนลูปผ่าน array ของ todos
              ) => (
                <TodoItem
                  key={i}
                  id={i}
                  todo={todo}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                /> //ส่งค่า todo และดัชนี i ไปยังคอมโพแนนต์ TodoItem
              )
            )}
          </ul>
        )
      )}
    </>
  );
}

export default HomePage;
