import { useState, useEffect, useRef } from "react";
import ButtonSmall from "../ButtonSmall/ButtonSmall";
import { IoLogoLinkedin, IoIosMail, IoIosChatboxes, IoLogoGithub } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import ContactDropdownItem from "./ContactDropdownItem";
import styles from "./ContactDropdown.module.css";

// const dropDownPopupStyle = { 
//     position: 'absolute', 
//     top: '50%', 
//     right: 0, 
//     backgroundColor: 'var(--main-black)', 
//     boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.20)",
//     padding: '12px 16px',
//     borderRadius: 2,
//     zIndex: 1000,
//     whiteSpace: 'nowrap',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 12
// };

// function isMobileDevice() {
//   return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
// }

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
            <ButtonSmall onClick={toggleDropdown} text="contact" />
            {isOpen && (
                <ul className={styles.dropDownPopup}>
                    <ContactDropdownItem icon={IoIosMail} text={'write me an email'} link={"mailto:lara.rockenstein@live.de"} newWindow={false} />
                    <ContactDropdownItem icon={IoLogoLinkedin} text={'connect on linkedIn'} link={'https://www.linkedin.com/in/lararockenstein/'} newWindow={true} />
                    <ContactDropdownItem icon={RiTelegram2Fill} text={'chat on telegram'} link={'https://t.me/lararockenstein'} newWindow={true} />
                    <ContactDropdownItem icon={IoLogoGithub} text={'check out my github'} link={'https://github.com/LMRBLN'} newWindow={true} />
                </ul>
            )}
        </div>
    );
}

export default ContactDropdown;
