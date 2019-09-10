import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Macarena', duration: '4:21' },
    { title: 'All Star', duration: '3:25' },
    { title: 'Bitter Sweet Symphony', duration: '4:29' },
    { title: 'Semi-Charmed Life', duration: '2:48' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
