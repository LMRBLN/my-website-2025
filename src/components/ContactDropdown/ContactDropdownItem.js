import React from "react";
import styles from "./ContactDropdown.module.css";


function ContactDropdownItem({ icon: Icon, text, link, newWindow }) {
    return (
        <li className={styles.dropDownPopupItem}>
            <Icon />
            <h3>
                {newWindow ? 
                    <a href={link} target="_blank" rel="noopener noreferrer"> {text}</a> 
                :      
                    <a href={link}> {text}</a>
                }
            </h3>
        </li>
    );
}

export default ContactDropdownItem;
