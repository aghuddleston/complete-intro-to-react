import React, { Component } from 'react'
import preload from '../data.json'
import ShowCard from './ShowCard'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: 'this is some sort of debug statement'
    }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div className="search">
        <header>
          <h1>My Video</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows.map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    )
  }
}

export default Search

// <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
