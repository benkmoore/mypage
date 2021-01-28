import React, { Component } from "react"
import { MenuItems } from "./MenuItems"
import "./Navbar.css"

class Navbar extends React.Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Ben Moore</h1>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className={item.cName} href={item.url}>
                                    {item.title}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar