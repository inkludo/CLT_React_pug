import React, { Component } from 'react'
import styles from './Classroom.module.css'
import ItemsList from '../components/ItemsList/ItemsList'

class Classroom extends Component {

    state = {
        data: [
            {
                z33: [{
                    PC: 1,
                    date: Date.now(),
                    id: 331,
                    load: 80
                },
                {
                    PC: 2,
                    date: Date.now(),
                    id: 332,
                    load: 77
                }
                ],
            }
        ]
    }



    render() {
        return (
            <div className={styles.Classroom}>

                <div className={styles.ClassroomWrapper}>

                    <ItemsList
                        data={this.state.data[0]}
                    />
                </div>

            </div>)
    }
}

export default Classroom