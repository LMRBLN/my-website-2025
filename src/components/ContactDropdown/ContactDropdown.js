import { useState, useEffect, useRef } from "react";
import { IoLogoLinkedin, IoIosMail, IoIosChatboxes, IoLogoGithub } from "react-icons/io";
import ContactDropdownItem from "./ContactDropdownItem";
import styles from "./ContactDropdown.module.css";


function ContactDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef}>
            <button onClick={toggleDropdown} className={styles.dropDownButton}> 
                <>contact</> 
                <svg className={styles.icon} width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Polygon 2" d="M5.5 6L0.73686 5.64421e-08L10.2631 8.89256e-07L5.5 6Z"/>
                </svg>
            </button>
            
            {isOpen && (
                <ul className={styles.dropDownPopup}>
                    <ContactDropdownItem icon={IoIosMail} text={'write me an email'} link={"mailto:lara.rockenstein@live.de"} newWindow={false} />
                    <ContactDropdownItem icon={IoLogoLinkedin} text={'connect on linkedIn'} link={'https://www.linkedin.com/in/lararockenstein/'} newWindow={true} />
                    <ContactDropdownItem icon={IoLogoGithub} text={'visit my github'} link={'https://github.com/LMRBLN'} newWindow={true} />
                </ul>
            )}
            
        </div>
    );
}

export default ContactDropdown;
