import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class NewsMain extends Component {



    totalNews = []
    constructor() {
        super();
        this.state = {
            totalNews: this.totalNews,
            page: 1,
            laoding: false
        }
    }

    async componentDidMount() {
        this.setState({
            laoding: true
        })
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f6e9b5eb495049f2a2c81bd02fede1d8&category=${this.props.category}&page=1&pageSize=${this.props.pageSize}`);
        const parsedJsonOfData = await data.json();
        this.setState({
            totalNews: parsedJsonOfData.articles,
            totalResults: parsedJsonOfData.totalResults,
            laoding: false
        })

    }

    render() {
        const handleNext = async () => {

            if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
                this.setState({
                    laoding: true
                })
                const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f6e9b5eb495049f2a2c81bd02fede1d8&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
                const parsedJsonOfData = await data.json();
                this.setState({
                    page: this.state.page + 1,
                    totalNews: parsedJsonOfData.articles,
                    laoding: false
                })
            }

        }
        const handlePrevious = async () => {
            this.setState({
                laoding: true
            })
            const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f6e9b5eb495049f2a2c81bd02fede1d8&category=${this.props.category}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`);
            const parsedJsonOfData = await data.json();
            this.setState({
                page: this.state.page - 1,
                totalNews: parsedJsonOfData.articles,
                laoding: false
            })
        }
        return (
            <div className='container'>
                <h3 className="text-center my-2">
                    Durgesh News Website - Daily Updates
                </h3>
                {this.state.laoding && <Spinner />}
                <div className="row my-4">
                    {!this.state.laoding && this.state.totalNews.map((element) => {
                        return <div className="col-md-4" key={element.urlToImage ? element.urlToImage : element.publishedAt}>
                            <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-primary my-2" onClick={handlePrevious}>	&larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary my-2" onClick={handleNext}>Next	&rarr;</button>
                </div>
            </div>
        )
    }
}

NewsMain.defaultProps = {
    pageSize: 10,
    category: "general"
};
NewsMain.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default NewsMain
