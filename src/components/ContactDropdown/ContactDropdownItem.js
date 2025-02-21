import React from "react";

const dropDownPopupItemStyle = {
    color: 'white',
    display: 'flex',
    gap: 8
};

function ContactDropdownItem({ icon: Icon, text, link, newWindow }) {
    return (
        <li style={dropDownPopupItemStyle}>
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
