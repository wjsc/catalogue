export const playerLink = {
    connect: (comp) => {
        this.component = comp;
    },
    togglePlay: () => {
        return this.component.setState( prevState => ({ status: prevState.status === 'stop' ? 'stop' : prevState.status === 'play' ? 'pause' : 'play' }));
    },
    playTrack: (track) => {
        return this.component.setState( prevState => ({ status: 'play' , tracks: [track], current: 0}));
    },
    stop: () => {
        return this.component.setState( prevState => ({ status: 'stop'}));
    },
    next: ()=> {
        return this.component.setState( prevState => { return prevState.tracks.lenght > prevState.current ? { current: prevState.current + 1 } : { status: 'stop' }});
    },
    prev: () => {
        return this.component.setState( prevState => ({ current: prevState.current - 1 }));
    },
    addTrack: (track) => {
        return this.component.setState( prevState => ({ tracks: [...prevState.tracks, track] }));
    },
    removeTrack: (track) => {
        return false;
    },
    progressUpdate: (progress) => {
        return this.component.setState( prevState => ({ progress }));
    },
    volumeChange: (volume) => {
        return this.component.setState( prevState => ({ volume }));
    }
}