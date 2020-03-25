import React from 'react'

export default class ItemDetails extends React.Component {


    render() {
        console.log(this.props.match.params)
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}

//test component
