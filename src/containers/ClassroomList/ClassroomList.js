import React, { Component } from 'react'
import styles from './ClassroomList.module.css'
import ItemsList from '../../components/ItemsList/ItemsList'

export default class ClassroomList extends Component {

    state = {
        classroom: ['39', '32', '33']
    }



    getClassroomList = () => {

    }

    render() {
        return (
            <div className={styles.ClassroomList}>

                <div className={styles.ClassroomListWrapper}>
                    <h1>Classroom List</h1>
                    <ItemsList
                        data={this.state.classroom}
                        title={'Classroom: '} />
                </div>
            </div>)

    }
}
