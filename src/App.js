import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsMain from './components/NewsMain'

export default class App extends Component {
  // -->  News App

  // NewsMain-->NewsItem-->NewsDetails
  render() {
    return (
      <>
        <Navbar />
        <NewsMain pageSize={6} category="sports" />
      </>
    )
  }
}

