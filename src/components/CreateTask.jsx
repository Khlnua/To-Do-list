import styles from "@/styles/createTask.module.css";
import { useState } from "react";

export const CreateTask = ({ task, setTasks }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskAddition = (event) => {
    event.preventDefault();
  };

  const addTask = () => {
    if (!inputValue) {
      alert("Please enter a task!");
    }
    setTasks([...task, newTask]);
    setNewTask("");
  };

  const task = {
    id: Date.now(),
    text: inputValue,
    isCompleted: false,
  };

  return (
    <div className={styles.newtask}>
      <input
        placeholder="Add a new task..."
        className={styles.input}
        type="text"
        value={newTask}
        onChange={handleTaskAddition}
      />
      <button className={styles.inputsadd} onClick={addTask}>
        Add
      </button>
    </div>
  );
};
