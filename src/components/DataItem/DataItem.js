import React from 'react'
import styles from './DataItem.module.css'
import { withRouter } from 'react-router-dom'

const DataItem = props => {
    const { data, title } = props
    const check = (title === 'Classroom: '
        ? <span>{title + data}</span>
        : <span>{title + data.pc}</span>)

    return (
        <>
            {props.title === 'Classroom: '
                ? <li
                    onClick={() => props.history.push(`/classroom/${data}`)} // need to id
                    className={styles.DataItem}
                >
                    {
                        check
                    }
                </li>
                : <li
                    onClick={() => props.history.push(`/classroom/${data.auditorium}/pc/${data.auditorium + data.pc}`)}
                    className={styles.DataItem}
                >
                    {
                        check
                    }
                </li>
            }
        </>
    )
}

export default withRouter(DataItem)