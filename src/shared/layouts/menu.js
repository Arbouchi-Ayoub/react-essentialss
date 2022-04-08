import React from 'react'
import { NavLink } from 'react-router-dom'
import { MENU_DATA } from './CONSTANT'


const MenuItem = ({ label = "", path = "" }) => {
    return (
        <li className="nav-item">
            <NavLink to={path}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
                {label}
            </NavLink>
        </li>)
}




export const Menu = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {MENU_DATA.map((mi, index) => <MenuItem key={index} path={mi.path} label={mi.label} />)}
        </ul>
    )
}
