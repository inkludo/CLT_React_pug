import React, { Fragment, useContext, useEffect } from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { Loader } from '../components/Loader'
import { TableData } from '../components/TableData'

export const Classroom = () => {


    const { loading, data, fetchData } = useContext(FirebaseContext)

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])




    return (
        <Fragment>

            {loading ? <Loader /> :
                < TableData data={data} /> // need to add for ??
            }

        </Fragment>
    )
}