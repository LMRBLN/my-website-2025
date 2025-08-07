import React, { useState } from 'react';
import styles from './Switcher.module.css';

function Switcher({ 
    initialState = false, 
    onToggle, 
    labelOn = "ON",
    labelOff = "OFF",
    disabled = false 
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
        className={`${styles.switcher} ${isOn ? styles.on : styles.off} ${disabled ? styles.disabled : ''}`}
        onClick={handleToggle}
        disabled={disabled}
        role="switch"
        aria-checked={isOn}
        aria-label={`Toggle ${isOn ? labelOn : labelOff}`}
      >
        <div className={styles.slider} />
        <span className={`${styles.label} ${styles.labelOn}`}>{labelOn}</span>
        <span className={`${styles.label} ${styles.labelOff}`}>{labelOff}</span>
      </button>
    );
  }
  

export default Switcher;