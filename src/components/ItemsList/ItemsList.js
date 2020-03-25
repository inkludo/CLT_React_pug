import React from 'react'
import styles from './ItemsList.module.css'
import DataItem from '../DataItem/DataItem'

const ItemsList = props => {
    console.log(props.data)
    return (

        <ul className={styles.ItemsList}>

            {props.data["z33"].map((data, index) => {
                return (
                    <DataItem
                        data={data}
                        key={index}
                    />
                )
            })}
        </ul>
    )
}

export default ItemsList