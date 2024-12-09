import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class NewsMain extends Component {
    capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
    totalNews = []
    constructor(props) {
        super(props);
        this.state = {
            totalNews: this.totalNews,
            page: 1,
            laoding: false
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News`
    }
    async renderAfterFetch() {
        this.props.setProgress(20)
        this.setState({
            laoding: true
        })
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f6e9b5eb495049f2a2c81bd02fede1d8&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        this.props.setProgress(40)
        const parsedJsonOfData = await data.json();
        this.props.setProgress(70)
        this.setState({
            totalNews: parsedJsonOfData.articles,
            totalResults: parsedJsonOfData.totalResults,
            laoding: false
        })
        this.props.setProgress(100)
    }

    async componentDidMount() {
        this.renderAfterFetch()

    }

    render() {
        const handleNext = async () => {
            this.setState({
                page: this.state.page + 1
            })
            this.renderAfterFetch();

        }
        const handlePrevious = async () => {
            this.setState({
                page: this.state.page - 1
            })
            this.renderAfterFetch();
        }
        return (
            <div className='container'>
                <h3 className="text-center my-2">
                    {`Durgesh News Website - Daily Updates on ${this.capitalizeFirstLetter(this.props.category)}`}
                </h3>
                {this.state.laoding && <Spinner />}
                <div className="row my-4">
                    {!this.state.laoding && this.state.totalNews.map((element) => {
                        return <div className="col-md-4" key={element.urlToImage ? element.urlToImage : element.publishedAt}>
                            <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt}
                                source={element.source.name} />
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
    country: "is",
    pageSize: 10,
    category: "general"
};
NewsMain.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default NewsMain
