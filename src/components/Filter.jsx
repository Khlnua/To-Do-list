import styles from "@/styles/filter.module.css";
import { AllTask } from "@/components/AllTask";
import { ActiveTask } from "@/components/ActiveTask";
import { CompletedTask } from "@/components/CompletedTask";

export const Filter = () => {
  return (
    <div className={styles.filter}>
      <button className={styles.filterButton}>All</button>
      <button className={styles.filterButton}>Active</button>
      <button className={styles.filterButton}>Completed</button>
    </div>
  );
};
