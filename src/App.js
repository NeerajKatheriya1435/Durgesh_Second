import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsMain from './components/NewsMain'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsMain key={"general"} pageSize={this.pageSize} category="general" country='us' />} />
          <Route path="/entertainment" element={<NewsMain key={"entertainment"} pageSize={this.pageSize} category="entertainment" country='us' />} />
          <Route path="/business" element={<NewsMain key={"business"} pageSize={this.pageSize} category="business" country='us' />} />
          <Route path="/health" element={<NewsMain key={"health"} pageSize={this.pageSize} category="health" country='us' />} />
          <Route path="/science" element={<NewsMain key={"science"} pageSize={this.pageSize} category="science" country='us' />} />
          <Route path="/sports" element={<NewsMain key={"sports"} pageSize={this.pageSize} category="sports" country='us' />} />
          <Route path="/technology" element={<NewsMain key={"technology"} pageSize={this.pageSize} category="technology" country='us' />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

