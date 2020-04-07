import React from 'react'
import styles from './ItemsList.module.css'
import DataItem from '../DataItem/DataItem'
import { Loader } from '../Loader/Loader'

const ItemsList = ({ data, title }) => {

    if (data === null) return <Loader /> //temporarily

    return (
        <ul className={styles.ItemsList}>
            {data.map((item, index) => {

                return (
                    <DataItem
                        data={item}
                        title={title}
                        key={index}
                    />
                )
            })}
        </ul>
    )
}

export default ItemsList