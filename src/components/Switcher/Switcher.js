import React, { useState } from 'react';
import styles from './Switcher.module.css';

function Switcher({ 
    initialState = false, 
    onToggle, 
    label1 = "flat",
    label2 = "isometric",
    disabled = false,
    className = ''
  }) {
    const [isOn, setIsOn] = useState(initialState);
  
    const handleToggle = () => {
      if (disabled) return;
      
      const newState = !isOn;
      setIsOn(newState);
      
      if (onToggle) {
        onToggle(newState);
      }
    };
  
    return (
      <button
        className={`${styles.switcher} ${isOn ? styles.on : styles.off} ${disabled ? styles.disabled : ''} ${className}`.trim()}
        onClick={handleToggle}
        disabled={disabled}
        role="switch"
        aria-checked={isOn}
        aria-label={`Toggle ${isOn ? label1 : label2}`}
      >
        <div className={styles.slider} />
          <span >{label1}</span>
          <span >{label2}</span>
      </button>
    );
  }
  

export default Switcher;