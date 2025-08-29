import React from "react";
//import { styles } from './NeumorphicButtonStyles.module.css';
import styles from './NeumorphicButtonStyles.module.css'; 

function NeumorphicButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
    >
        {label}
    </button>
  );
}

export default NeumorphicButton;