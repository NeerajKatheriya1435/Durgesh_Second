import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsMain extends Component {
    totalNews = []
    constructor() {
        super();
        this.state = {
            totalNews: this.totalNews,
            page: 1
        }
    }

    async componentDidMount() {
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f6e9b5eb495049f2a2c81bd02fede1d8&page=1`);

        const parsedJsonOfData = await data.json();
        this.setState({
            totalNews: parsedJsonOfData.articles,
        })

    }


    render() {
        const handleNext = async () => {
            const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f6e9b5eb495049f2a2c81bd02fede1d8&page=${this.state.page + 1}`);

            const parsedJsonOfData = await data.json();
            this.setState({
                totalNews: parsedJsonOfData.articles,
                // page: this.state.page + 1
            })
        }
        const handlePrevious = async () => {
            const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f6e9b5eb495049f2a2c81bd02fede1d8&page=${this.state.page - 1}`);

            const parsedJsonOfData = await data.json();
            this.setState({
                totalNews: parsedJsonOfData.articles,
                // page: this.state.page - 1
            })
        }
        return (
            <div className='container'>
                <h3 className="text-center my-2">
                    Durgesh News Website - Daily Updates
                </h3>
                <div className="row my-4">
                    {this.state.totalNews.map((element) => {
                        return <div className="col-md-4" key={!element.url ? element.urlToImage : element.url}>
                            <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button className="btn btn-primary my-2" onClick={handlePrevious}>Previous</button>
                    <button className="btn btn-primary my-2" onClick={handleNext}>Next</button>
                </div>
            </div>
        )
    }
}

export default NewsMain
