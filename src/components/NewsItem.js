import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, urlToImage, url, author, publishedAt, source } = this.props
        return (
            <div>
                <div className="card">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: '90% !important', zIndex: '1' }}>
                        {source}
                    </span>
                    <img src={!urlToImage ? "https://cff2.earth.com/uploads/2024/11/24171647/earth_tilted_31-inches_groundwater-use-humans_1m.jpg" : urlToImage} alt="Error Loading ..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <small style={{ display: 'block' }} class="text-muted">By {author} on {new Date(publishedAt).toLocaleString()}</small>
                        <a href={url} target='_blank' className="btn btn-primary my-2">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
