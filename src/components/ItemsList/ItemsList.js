import React from 'react'
import styles from './ItemsList.module.css'
import DataItem from '../DataItem/DataItem'

const ItemsList = props => {
    return (
        <ul className={styles.ItemsList}>
            {props.data.map((item, index) => {
                console.log(props)
                return (
                    <DataItem
                        data={item}
                        title={props.title}
                        key={index}
                    />
                )
            })}
        </ul>
    )
}

export default ItemsList