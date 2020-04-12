import React, { useState, useEffect, useCallback } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../components/Loader/Loader'
import ItemsList from '../../components/ItemsList/ItemsList'
import axios from 'axios'
import styles from './Classroom.module.css'

export const Classroom = props => {

    const state = {
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

    const [data, setData] = useState(null)

    const { request, loading } = useHttp()

    const fetchComputers = useCallback(async (id) => {
        try {
           // const fetched = await request(`localhost:8000/GetComputers`, 'POST', { a: id } )
           const fetched = await [...state.data]
           console.log();
           
            setData(fetched)
        } catch (e) { console.log(e) }
    }, [request])


    useEffect(() => {
        fetchComputers(props.match.params.id)
    }, [fetchComputers])


    if (loading) {
        return <Loader />
    }


    return (
        <>
            {!loading
                &&
                < div className={styles.Classroom}>
                    <div className={styles.ClassroomWrapper}>
                        <h1>Classroom № {props.match.params.id} </h1>
                        <ItemsList
                            data={data}
                            title={'PC № '}
                        />
                    </div>
                </div>
            }
        </>
    )

}