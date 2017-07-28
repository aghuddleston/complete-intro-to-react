import React from 'react'
import preload from '../data.json'
import ShowCard from './ShowCard'

const Search = () => (
  <div className='search'>
    {preload.shows.map((show) => <ShowCard show={show}/> )}
  </div>
)

export default Search

// <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
