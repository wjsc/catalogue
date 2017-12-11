import React from 'react';
import './Player.css';
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
    constructor(props) {
      super(props);
      this.state = {
          trackTitle: 'Lago de forma mía',
          album:{
              title:'AAA',
              _id:'EEE',
              coverSrc:'III'
          },
          currentTime: 100,
          totalTime: 200,
          volume: 1
      };
  }
  render() {
      return (
              <div className="player">
                  <PlayerPrev/>
                  <PlayerPlayPause/>
                  <PlayerNext/>
                  <div className="player_timeline">
                      <PlayerAlbumCover album={this.state.album}/>
                      <div className="player_track_container">
                          <PlayerTrackTitle title={this.state.trackTitle}/>
                          <div className="player_progress">
                              <PlayerCurrentTime value={this.state.currentTime}/>
                              <PlayerProgress value={this.state.currentTime/this.state.totalTime}/>
                              <PlayerTotalTime value={this.state.totalTime}/>
                          </div>
                      </div>
                  </div>
                  <PlayerVolume value={this.state.volume}/>
              </div>
          );
  }
}

export default Player;