import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsMain from './components/NewsMain'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0
    }
  }
  setProgress = (value) => {
    this.setState({
      progress: value
    })
  }
  pageSize = 12;
  render() {
    return (
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsMain setProgress={this.setProgress} key={"general"} pageSize={this.pageSize} category="general" country='us' />} />
          <Route path="/entertainment" element={<NewsMain setProgress={this.setProgress} key={"entertainment"} pageSize={this.pageSize} category="entertainment" country='us' />} />
          <Route path="/business" element={<NewsMain setProgress={this.setProgress} key={"business"} pageSize={this.pageSize} category="business" country='us' />} />
          <Route path="/health" element={<NewsMain setProgress={this.setProgress} key={"health"} pageSize={this.pageSize} category="health" country='us' />} />
          <Route path="/science" element={<NewsMain setProgress={this.setProgress} key={"science"} pageSize={this.pageSize} category="science" country='us' />} />
          <Route path="/sports" element={<NewsMain setProgress={this.setProgress} key={"sports"} pageSize={this.pageSize} category="sports" country='us' />} />
          <Route path="/technology" element={<NewsMain setProgress={this.setProgress} key={"technology"} pageSize={this.pageSize} category="technology" country='us' />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

