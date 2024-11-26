import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, urlToImage } = this.props
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={!urlToImage ? "https://cff2.earth.com/uploads/2024/11/24171647/earth_tilted_31-inches_groundwater-use-humans_1m.jpg" : urlToImage} alt="Error Loading ..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/towork" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
