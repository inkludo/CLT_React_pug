import React, { Fragment, useContext, useEffect } from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { Loader } from '../components/Loader'

export const Home = () => {


    const { loading, data, fetchData } = useContext(FirebaseContext)

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])


    return (
        <Fragment>

            {loading ? <Loader /> :
                <SomeComponent key={data.id} data={data} /> // need to add for ??
            }

        </Fragment>
    )
}