import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsMain extends Component {
    totalNews = []
    constructor() {
        super();
        this.state = {
            totalNews: this.totalNews,
        }
    }

    async componentDidMount() {
        const data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=f6e9b5eb495049f2a2c81bd02fede1d8");

        const parsedJsonOfData = await data.json();
        this.setState({
            totalNews: parsedJsonOfData.articles
        })

    }
    render() {
        console.log("This is my render")
        return (
            <div className='container'>
                <h3 className="text-center my-2">
                    Durgesh News Website - Daily Updates
                </h3>
                <div className="row my-4">
                    {this.state.totalNews.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default NewsMain
