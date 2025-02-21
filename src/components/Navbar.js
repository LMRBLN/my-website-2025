
import NavItem from "./NavItem";
import Logo from "../components/Logo";
import ContactDropdown from "./ContactDropdown/ContactDropdown";

const style = {
    gridColumn: 'span 12',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 40,
    borderBottom: '1px solid var(--main-black)',
    alignItems: 'flex-end',
    position: 'fixed',
    left: 40,
    right: 40,
    boxSizing: 'border-box',
}

const linksbarStyle = {
    display: 'flex',
    gap: 40,
  };

function Navbar() {
    return (
        <nav style={style}>
            <NavItem to="/"> <Logo height="20px"/> </NavItem>
            <ul className="navbar" style={linksbarStyle} >
                <NavItem to="/projects"> projects </NavItem>
                <NavItem to="/info"> info </NavItem>
                <NavItem to="/playground"> playground </NavItem>
                <NavItem to="/snippets"> snippets </NavItem>
                <NavItem to="/timeout"> timeout </NavItem>
            </ul>
            <ContactDropdown />
        </nav>
    )
}

export default Navbar;