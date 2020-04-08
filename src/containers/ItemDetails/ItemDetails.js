import React, { useState, useEffect, useCallback } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../components/Loader/Loader'
import { Chart } from '../../components/Chart/Chart'

export const ItemDetails = (props) => {



    const someData = [{ "t": 1585484661.9659426, "c": 88.56, "r": 26.56, "d": [{ "n": "some_disk_name", "p": 36.12 }] }, { "t": 1585484661.9659426, "c": 89.33, "r": 4.84, "d": [{ "n": "some_disk_name", "p": 36.68 }] }, { "t": 1585484661.9659426, "c": 95.27, "r": 61.38, "d": [{ "n": "some_disk_name", "p": 32.0 }] }, { "t": 1585484661.9659426, "c": 42.63, "r": 93.4, "d": [{ "n": "some_disk_name", "p": 2.29 }] }, { "t": 1585484661.9659426, "c": 36.89, "r": 65.04, "d": [{ "n": "some_disk_name", "p": 87.65 }] }, { "t": 1585484661.9659426, "c": 24.52, "r": 18.85, "d": [{ "n": "some_disk_name", "p": 76.18 }] }, { "t": 1585484661.9659426, "c": 66.96, "r": 33.61, "d": [{ "n": "some_disk_name", "p": 18.01 }] }, { "t": 1585484661.9659426, "c": 9.76, "r": 32.52, "d": [{ "n": "some_disk_name", "p": 25.57 }] }, { "t": 1585484661.9659426, "c": 35.7, "r": 46.14, "d": [{ "n": "some_disk_name", "p": 32.06 }] }, { "t": 1585484661.9659426, "c": 72.51, "r": 42.58, "d": [{ "n": "some_disk_name", "p": 24.63 }] }]

    const state = {
        time: [],
        cpu: [],
        ram: [],
        disk: []
    }





    const [data, setData] = useState(null)

    const { request, loading } = useHttp()


    const fetchPcInfo = useCallback(async (state) => {
        try {
            //const fetched = await request(`localhost/getComputer`, 'GET', { k: { a: id } })
            const fetched = [someData]
            //this place for structuring data 
            setData(fetched)
        } catch (e) { console.log(e) }
    }, [request])


    useEffect(() => {
        fetchPcInfo(state)
    }, [fetchPcInfo])


    if (loading) {
        return <Loader />
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Hello from ItemDetails</h1>
            <h2>ID: {props.match.params.id}</h2>
            <Chart />
        </div>
    )

}


//https://semiotic.nteract.io/guides
