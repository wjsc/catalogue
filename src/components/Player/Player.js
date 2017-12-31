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

class Player extends React.Component {
    componentDidMount() {
        this.element.onended = () => playerLink.next();
        this.element.ontimeupdate = () => playerLink.progressUpdate(this.element.currentTime);
    }
    componentWillReceiveProps(nextProps){
        nextProps.state.tracks[nextProps.state.current] !== this.props.state.tracks[this.props.state.current] && this.element.load();
        nextProps.state.status !== this.props.state.status && (nextProps.state.status === 'play' ? this.element.play() : this.element.pause());
    }
    renderAudio(currentTrack){
        return <audio autoPlay ref={(element) => { this.element = element }}><source key={currentTrack._id} src={CDN_URL+currentTrack.audio} type="audio/mpeg"/></audio>;
    }
    render() {
        const currentTrack = this.props.state.tracks[this.props.state.current];
        console.log(currentTrack);
        return (
                <div className="player">
                    {this.renderAudio(currentTrack)}
                    <PlayerPrev onclick={playerLink.prev} active={this.props.state.tracks[this.props.state.current -1]}/>
                    <PlayerPlayPause onclick={playerLink.togglePlay} status={this.props.state.status}/>
                    <PlayerNext onclick={playerLink.next} active={this.props.state.tracks[this.props.state.current +1]}/>
                    <div className="player_timeline">
                        <PlayerAlbumCover album={currentTrack.album}/>
                        <div className="player_track_container">
                            <PlayerTrackTitle title={currentTrack.artist.name+ ' - '+currentTrack.title}/>
                            <div className="player_progress">
                                <PlayerCurrentTime value={formatDuration(this.props.state.progress)}/>
                                <PlayerProgress progress={this.props.state.progress} duration={currentTrack.duration} 
                                                onclick={(progress) => this.element.mozCurrentSampleOffset = progress}/>
                                <PlayerTotalTime value={formatDuration( currentTrack.duration )}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Player;