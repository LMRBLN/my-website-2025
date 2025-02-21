import { NavLink } from "react-router-dom";

const baseStyle = {
    color: 'var(--main-black)',
    fontSize: 12,
}

const activeStyle = {
    fontWeight: 'bolder',
}

function NavItem ({ to, children })  {

    return (
        <NavLink to={to} style={({ isActive }) => isActive ? { ...baseStyle, ...activeStyle } : baseStyle}>
            {children}
        </NavLink>
    );
}

export default NavItem;
