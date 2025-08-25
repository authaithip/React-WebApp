import React, { useState } from "react";
import NewTask from "../Components/NewTask";
import TodoItem from "../Components/TodoItem";

function HomePage() {
  const [todos, setTodos] = useState([]);  //เฏบรายการ to-do  ทั้งหมดเป็น array
  const addTask = (task) => {
    setTodos((prevtodos) => [...prevtodos, task]);   //เพิ่มงานใหม่ลงใน array ของ todos และคัดลอกงานเก่าๆมาไว้ด้วย
  };
  return (
    <>
      <NewTask addTask={addTask} />   {/*ส่งฟังก์ชัน addTask ไปยังคอมโพแนนต์ NewTask สามรถเพิ่มงานใหม่ได้*/}
      <ul className="bg-gray-200 rounded-md shadow-sm p-4">
        {todos.map((todo, i) => (   //วนลูปผ่าน array ของ todos
          <TodoItem key={i} id={i} todo={todo} />  //ส่งค่า todo และดัชนี i ไปยังคอมโพแนนต์ TodoItem
        ))}
      </ul>
    </>
  );
}

export default HomePage;
