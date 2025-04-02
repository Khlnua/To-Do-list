import styles from "@/styles/filter.module.css";
import { useState } from "react";

export const Filter = ({ setFilter }) => {
  const handleFilter = (filterValue) => () => {
    setFilter(filterValue);
  };

  return (
    <div className={styles.filter}>
      <button className={styles.filterButton} onClick={handleFilter("all")}>
        All
      </button>
      <button className={styles.filterButton} onClick={handleFilter("active")}>
        Active
      </button>
      <button
        className={styles.filterButton}
        onClick={handleFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};
