import React, { useState } from "react";
import styles from "@/styles/tasks.module.css";
import { Filter } from "./Filter";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [filter, setFilter] = useState("All");

  const filteredTask = tasks.filter((task) => {
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;

    return true;
  });

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (!newTask.trim()) {
      alert("Please enter a task!");
      return;
    }

    const taskData = {
      id: Date.now(),
      text: newTask,
      isCompleted: false,
    };

    setTasks([...tasks, taskData]);
    setNewTask("");

    event.preventDefault();
  };

  const taskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    const isConfirmed = window.confirm("Are you sure to delete this task?");

    if (isConfirmed) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const deleteCompletedTasks = () => {
    const isConfirmed = window.confirm(
      "Are you sure to delete all completed task?"
    );
    if (isConfirmed) {
      setTasks((tasks) => tasks.filter((task) => !task.isCompleted));
    }
  };
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const totalTasks = tasks.length;

  return (
    <div className={styles.box}>
      <form className={styles.newtask}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles.addButton} onClick={addTask}>
          Add
        </button>
      </form>
      <Filter setFilter={setFilter} />
      {tasks.length === 0 && (
        <p className={styles.nodata}>No tasks yet. Add one above!</p>
      )}
      <div className={styles.taskList}>
        {filteredTask.map((task) => (
          <div className={styles.card} key={task.id}>
            <div style={{ display: "flex", gap: "20px" }}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => taskCompletion(task.id)}
              />
              <p
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
              >
                {task.text}{" "}
              </p>
            </div>
            <button
              className={styles.deleteTask}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className={styles.taskSummary}>
        <p className={styles.summary}>
          {completedTasks} of {totalTasks} tasks completed
        </p>
        <button className={styles.deleteTask} onClick={deleteCompletedTasks}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};
