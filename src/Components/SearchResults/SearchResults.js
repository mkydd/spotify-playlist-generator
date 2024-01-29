import React, { Component } from 'react'
import Tracklist from '../TrackList/TrackList'
import './SearchResults.css'

export default class SearchResults extends Component {
  render() {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist tracks={this.props.searchResults} 
                onAdd={this.props.onAdd}
                isRemoval={false}/>
        </div>
    )
  }
}
