import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsMain extends Component {
    totalNews = {
        "status": "ok",
        "totalResults": 2,
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "Sports Illustrated"
                },
                "author": "Patrick Andres",
                "title": "Kylie Kelce, Wife of Jason Kelce, Announces Pregnancy With Couple's Fourth Child - Sports Illustrated",
                "description": "A big week for the family continues.",
                "url": "https://www.si.com/nfl/kylie-kelce-jason-kelce-announces-pregnancy-fourth-child",
                "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_2135,h_1200,x_763,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jddfrzyh70sqyttk6e.jpg",
                "publishedAt": "2024-11-23T22:15:01Z",
                "content": "Former Philadelphia Eagles center Jason Kelce's family is about to get bigger.\r\nKelce's wife, Kylie, is pregnant with her fourth child. According to the AP, agent Emily Ries confirmed the pregnancy S… [+819 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "UPI.com"
                },
                "author": null,
                "title": "CDC confirms first child in United States infected with bird flu - UPI News",
                "description": "UPI delivers the latest headlines from around the world: Top News, Entertainment, Health, Business, Science and Sports News - United Press International",
                "url": "https://www.upi.com",
                "urlToImage": "//www.upi.com/img/upi-fb.png",
                "publishedAt": "2024-11-23T15:39:55Z",
                "content": ""
            }
        ]
    }
    render() {
        console.log(this.totalNews.articles)
        return (
            <div className='container'>
                <h3 className="text-center my-2">
                    Durgesh News Website - Daily Updates
                </h3>
                <div className="row my-4">
                    <div className="col-md-4">
                        <NewsItem title={this.totalNews.articles[0].title} description="This is my description is not good" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Durgesh is good boy2" description="This is my description is not good" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Durgesh is good boy3" description="This is my description is not good" />
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsMain
