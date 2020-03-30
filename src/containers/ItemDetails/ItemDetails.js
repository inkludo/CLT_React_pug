import React from 'react'

export default class ItemDetails extends React.Component {

    state = {
        float: { "f": [{ "t": 1585484661.9659426, "c": 88.56, "r": 26.56, "d": [{ "n": "some_disk_name", "p": 36.12 }] }, { "t": 1585484661.9659426, "c": 89.33, "r": 4.84, "d": [{ "n": "some_disk_name", "p": 36.68 }] }, { "t": 1585484661.9659426, "c": 95.27, "r": 61.38, "d": [{ "n": "some_disk_name", "p": 32.0 }] }, { "t": 1585484661.9659426, "c": 42.63, "r": 93.4, "d": [{ "n": "some_disk_name", "p": 2.29 }] }, { "t": 1585484661.9659426, "c": 36.89, "r": 65.04, "d": [{ "n": "some_disk_name", "p": 87.65 }] }, { "t": 1585484661.9659426, "c": 24.52, "r": 18.85, "d": [{ "n": "some_disk_name", "p": 76.18 }] }, { "t": 1585484661.9659426, "c": 66.96, "r": 33.61, "d": [{ "n": "some_disk_name", "p": 18.01 }] }, { "t": 1585484661.9659426, "c": 9.76, "r": 32.52, "d": [{ "n": "some_disk_name", "p": 25.57 }] }, { "t": 1585484661.9659426, "c": 35.7, "r": 46.14, "d": [{ "n": "some_disk_name", "p": 32.06 }] }, { "t": 1585484661.9659426, "c": 72.51, "r": 42.58, "d": [{ "n": "some_disk_name", "p": 24.63 }] }] }
    }

    render() {
        console.log(this.props)
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Hello from ItemDetails</h1>
                <h2>ID: {this.props.match.params.id}</h2>
            </div>
        )
    }
}


//https://semiotic.nteract.io/guides
