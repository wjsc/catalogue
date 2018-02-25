import React from 'react';
import './Player.css';
import {config} from '../../config/default.js';
import {playerLink} from '../playerLink';
import {mediaSessionLink} from '../mediaSessionLink';
import {analyticsLink} from '../analyticsLink';
import {formatDuration} from '../../lib'
import {fetchAlbum, insertHistory} from '../../calls'
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
    constructor(props){
        super(props);
        this.state = {
            album: {}
        }
        this.startPlaying = this.startPlaying.bind(this);
        this.fetchAlbum = this.fetchAlbum.bind(this);
        this.collectIfStillPlaying = this.collectIfStillPlaying.bind(this);
        
    }
    componentDidMount() {
        this.element.onended = () => playerLink.next();
        this.element.ontimeupdate = () => playerLink.progressUpdate(this.element.currentTime);
        this.element.onplay = () => {
            const currentTrack = this.props.state.tracks[this.props.state.current];
            insertHistory(currentTrack._id);
            this.fetchAlbum(currentTrack)
                .then(() => mediaSessionLink.changeMediaSession(currentTrack, this.state.album));
            this.collectIfStillPlaying(currentTrack);
        };
        this.startPlaying();
    }
    fetchAlbum(currentTrack){
        if(this.state.album._id !== currentTrack.album._id) {
            return fetchAlbum(currentTrack.album._id)
                    .then(album => this.setState({ album }));
        }
        return Promise.resolve();
    }
    collectIfStillPlaying(currentTrack){
        setTimeout(() => {
            this.props.state.status === 'play'
            && currentTrack._id === this.props.state.tracks[this.props.state.current]._id
            && analyticsLink.collect(currentTrack)
        }, config.trackers.track_play_ms);
    }
    startPlaying(){
        this.element.load();
        this.element.play();
    }
    componentWillUnmount() {
        this.element.ontimeupdate = false;
    }
    componentWillReceiveProps(nextProps){
        nextProps.state.tracks[nextProps.state.current] !== this.props.state.tracks[this.props.state.current] && this.startPlaying();
        nextProps.state.status !== this.props.state.status && (nextProps.state.status === 'play' ? this.element.play() : this.element.pause());
    }
    renderAudio(currentTrack){
        return <audio ref={(element) => { this.element = element }}><source key={currentTrack._id} src={CDN_URL+currentTrack.audio} type="audio/mpeg"/></audio>;
    }
    render() {
        const currentTrack = this.props.state.tracks[this.props.state.current];
        return (
                <div className="player">
                    {this.renderAudio(currentTrack)}
                    <PlayerPrev onclick={playerLink.prev} active={this.props.state.tracks[this.props.state.current -1]}/>
                    <PlayerPlayPause onclick={playerLink.togglePlay} status={this.props.state.status}/>
                    <PlayerNext onclick={playerLink.next} active={this.props.state.tracks[this.props.state.current +1]}/>
                    <div className="player_timeline">
                        {this.state.album && <PlayerAlbumCover album={this.state.album}/>}
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