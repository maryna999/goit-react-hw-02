import React from "react";
import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={styles.wrap}>
      <button className={styles.btnG} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={styles.btnN} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={styles.btnB} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.btnR} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
