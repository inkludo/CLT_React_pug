import React, { Component } from 'react'
import styles from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'


const links = [
    { to: '/', label: 'List', exact: true },
    { to: '/about', label: 'About', exact: false }
]

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }




    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={styles.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }


    render() {

        const stl = [styles.Drawer]

        if (!this.props.isOpen) {
            stl.push(styles.close)
        }

        return (
            <>
                <nav className={stl.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </>
        )
    }
}

export default Drawer