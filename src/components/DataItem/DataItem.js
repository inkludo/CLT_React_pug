import React from 'react'
import styles from './DataItem.module.css'
import { withRouter } from 'react-router-dom'

const DataItem = props => {
    const { PC, load } = props.data
    return (
        <li
            onClick={() => props.history.push('/pc/' + props.data.id)} // need to id
            className={styles.DataItem}
        >
            {`PC: ${PC} `}
            <br />
            <span>{`Load: ${load} %`}</span>
        </li>
    )
}

export default withRouter(DataItem)