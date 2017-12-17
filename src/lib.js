export const formatDuration = (secs) => getMins(secs) + ':' + formatSecs(getSecs(secs));

const getMins = (secs) => Math.floor(secs/60);
const getSecs = (secs) => Math.floor(secs % 60);
const formatSecs = (secs) => secs < 10 ? "0"+secs : secs;
