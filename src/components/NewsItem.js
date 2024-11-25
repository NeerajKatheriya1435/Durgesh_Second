import React, { Component } from 'react'

export class NewsItem extends Component {
    // kabootar = 56;

    render() {
        let { title, description } = this.props
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://media.wired.com/photos/672bda0a90a94384370310f4/191:100/w_1280,c_limit/business_crypto_faithful_trump.jpg" alt="Error Loading ..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
