import React, { useReducer } from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { FETCH_DATA, SHOW_LOADER } from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({ children }) => {
    const initialState = {
        data: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const fetchData = async () => {
        showLoader()
        const res = await axios.get(`${url}/data.json`)

        const payload = Object.keys(res.data).map(key => {

            return {

                ...res.data[key]
            }
        })

        console.log(payload)

        dispatch({ type: FETCH_DATA, payload })
    }


    return (
        <FirebaseContext.Provider value={{
            showLoader, fetchData,
            loading: state.loading,
            data: state.data
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}