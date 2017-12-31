import React from 'react';
import { Link } from 'react-router-dom'
import {CDN_URL} from '../calls'

class AlbumCover extends React.Component {
	render() {
		return this.props.album.cover ? 
		(
			<Link to={"/album/"+this.props.album._id}>
				<div className="cover_wrapper" title={this.props.album.title}>
					<img className="cover" alt='Album Cover' src={CDN_URL+this.props.album.cover}/>
				</div>
			</Link>
		): false;
	}
}

export default AlbumCover;
