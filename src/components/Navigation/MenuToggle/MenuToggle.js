import React from 'react'
import styles from './MenuToggle.module.css'

const MenuToggle = props => {

    const stl = [
        styles.MenuToggle,
        'fa'
    ]

    if (props.isOpen) {
        stl.push('fa-times')
        stl.push(styles.open)
    } else {
        stl.push('fas fa-bars')
    }

    return (
        <i
            className={stl.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle