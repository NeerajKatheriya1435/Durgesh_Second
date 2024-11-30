import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div >
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }} >
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>

        )
    }
}
