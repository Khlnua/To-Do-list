import styles from "@/styles/createTask.module.css";
export const CreateTask = () => {
  return (
    <div className={styles.newtask}>
      <input
        placeholder="Add a new task..."
        className={styles.input}
        type="text"
      />
      <button className={styles.inputsadd}>Add</button>
    </div>
  );
};
