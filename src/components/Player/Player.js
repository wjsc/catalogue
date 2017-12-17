import React from 'react';
import './Player.css';
import {playerLink} from '../playerLink';
import {formatDuration} from '../../lib'
import {CDN_URL} from '../../calls'
import PlayerPrev from './PlayerPrev';
import PlayerPlayPause from './PlayerPlayPause';
import PlayerNext from './PlayerNext';
import PlayerAlbumCover from './PlayerAlbumCover';
import PlayerTrackTitle from './PlayerTrackTitle';
import PlayerCurrentTime from './PlayerCurrentTime';
import PlayerProgress from './PlayerProgress';
import PlayerTotalTime from './PlayerTotalTime';
import PlayerVolume from './PlayerVolume';

class Player extends React.Component {
  renderPlayer() {
      const currentTrack = this.props.state.tracks[this.props.state.current];
      return (
            <div className="player">
                <audio autoPlay id="audio_element">
                    <source src={CDN_URL+currentTrack.audio} type="audio/mpeg"/>
                </audio>
                <PlayerPrev onclick={playerLink.prev}/>
                <PlayerPlayPause onclick={playerLink.togglePlay}/>
                <PlayerNext  onclick={playerLink.next}/>
                <div className="player_timeline">
                    {/* <PlayerAlbumCover album={this.state.album}/> */}
                    <div className="player_track_container">
                        <PlayerTrackTitle title={currentTrack.title}/>
                        <div className="player_progress">
                            <PlayerCurrentTime value={formatDuration(this.props.state.progress)}/>
                            <PlayerProgress value={this.props.state.progress/currentTrack.duration}/>
                            <PlayerTotalTime value={formatDuration( currentTrack.duration )}/>
                        </div>
                    </div>
                </div>
                <PlayerVolume value={this.props.state.volume}/>
            </div>
          );
  }
  render() {
      return this.props.state.status !== 'stop' ? this.renderPlayer() : false;
  }
}

export default Player;