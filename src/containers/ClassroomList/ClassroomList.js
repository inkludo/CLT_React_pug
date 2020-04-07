import React, { useState, useEffect, useCallback } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../components/Loader/Loader'
import ItemsList from '../../components/ItemsList/ItemsList'
import styles from './ClassroomList.module.css'


export const ClassroomList = () => {

    const state = {
        classroom: ['39', '32', '33']
    }

    const [classroom, setClassroom] = useState(null)

    const { request, loading } = useHttp()

    const fetchClassroomList = useCallback(async (state) => {
        try {
            //const fetched = await request(`localhost/getComputer`, 'GET', null)
            const fetched = [...state.classroom]
            setClassroom(fetched)
        } catch (e) { console.log(e) }
    }, [request])


    useEffect(() => {
        fetchClassroomList(state)
    }, [fetchClassroomList])


    if (loading) {
        return <Loader />
    }

    if (classroom === null) {
        return <Loader />
    }

    return (

        <>
            {!loading
                &&
                <div className={styles.ClassroomList}>
                    <div className={styles.ClassroomListWrapper}>
                        <h1>Classroom List</h1>
                        <ItemsList
                            data={classroom}
                            title={'Classroom: '} />
                    </div>
                </div>
            }
        </>
    )


}
