import styles from "./Navbar.module.css";
import NavItem from "./NavItem";
import LaraRockenstein from "../../images/logo_lara_rockenstein.svg";
import ContactDropdown from "../ContactDropdown/ContactDropdown";
import { useLocation } from "react-router-dom";


function Navbar() {

    const location = useLocation();
    const path = location.pathname;
  
    let navClass = styles.navbar;
  
    if (path.startsWith("/info")) {
      navClass += " " + styles.navInfo;
    }
    else if (path.startsWith("/timeout")) {
      navClass += " " + styles.navTimeout;
    }


    return (
        <nav className={navClass}>
            <NavItem to="/"> 
                <img src={LaraRockenstein} alt="Logo Lara Rockenstein" style={{ height: "20px" }}/>
            </NavItem>
            <div className={styles.linksbar} >
                <NavItem to="/projects"> projects </NavItem>
                <NavItem to="/info"> info </NavItem>
                <NavItem to="/playground"> playground </NavItem>
                <NavItem to="/snippets"> snippets </NavItem>
                <NavItem to="/timeout"> timeout </NavItem>
            </div>
            <ContactDropdown />
        </nav>
    )
}

export default Navbar;