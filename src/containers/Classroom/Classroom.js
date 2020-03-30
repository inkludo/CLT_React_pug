import React, { Component } from 'react'
import styles from './Classroom.module.css'
import ItemsList from '../../components/ItemsList/ItemsList'

class Classroom extends Component {

    state = {
        data: [
            {
                auditorium: '39',
                pc: 1,
            },
            {
                auditorium: '39',
                pc: 2,
            },
        ]
    }




    render() {

        console.log(this.props.match.params)
        return (
            <div className={styles.Classroom}>

                <div className={styles.ClassroomWrapper}>
                    <h1>Classroom № {this.props.match.params.id} </h1>
                    <ItemsList
                        data={this.state.data}
                        title={'PC № '}
                    />
                </div>
            </div>)
    }
}

export default Classroom