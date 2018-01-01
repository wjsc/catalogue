export const playerLink = {
    connect: (comp) => {
        this.component = comp;
    },
    togglePlay: () => {
        return this.component.setState( prevState => ({ status: prevState.status === 'stop' ? 'stop' : prevState.status === 'play' ? 'pause' : 'play' }));
    },
    playTrack: (track) => {
        return this.component.setState( prevState => ({ status: 'play', tracks: [track], current: 0, progress: 0}));
    },
    playTracks: (tracks) => {
        return this.component.setState( prevState => ({ status: 'play', tracks, current: 0, progress: 0}));
    },
    stop: () => {
        return this.component.setState( prevState => ({ status: 'stop'}));
    },
    next: ()=> {
        return this.component.setState( prevState => { return prevState.tracks[prevState.current + 1 ] ? { current: prevState.current + 1, progress: 0 } : { status: 'stop', progress: 0, current: 0 }});
    },
    prev: () => {
        return this.component.setState( prevState => { return prevState.tracks[prevState.current - 1 ] ? { current: prevState.current - 1, progress: 0 } : { status: 'stop', progress: 0, current: 0 }});
    },
    addTrack: (track) => {
        return this.component.setState( prevState => ({ tracks: [...prevState.tracks, track] }));
    },
    removeTrack: (track) => {
        return false;
    },
    progressUpdate: (progress) => {
        return this.component.setState({ progress });
    },
    getTracks : () => {
        return this.component.state.tracks;
    },
    getCurrentTrack : () => {
        return this.component.state.tracks[this.component.state.current];
    }
}