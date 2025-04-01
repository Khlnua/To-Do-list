import { useState } from "react";
import { CreateTask } from "@/components/CreateTask";
import { Filter } from "@/components/Filter";

const Page = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <p className="title">To-Do List</p>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <Filter />
    </div>
  );
};

export default Page;
