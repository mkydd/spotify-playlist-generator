import React, { Component } from 'react'

import './Playlist.css'

import TrackList from '../TrackList/TrackList'
import Notification from '../Notification/Notification';


export default class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.save = this.save.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    save() {
        this.props.onSave();
        this.setState({saved: true})
    }

    render() {
        return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
            {/* <!-- Add a TrackList component --> */}
            <TrackList tracks={this.props.playlistTracks}
                onRemove={this.props.onRemove}
                isRemoval={true}/>
            <button className="Playlist-save" onClick={this.save}>SAVE TO SPOTIFY</button>
            {this.state.saved === true ? <Notification /> : null}
        </div>
        )
    }
}
