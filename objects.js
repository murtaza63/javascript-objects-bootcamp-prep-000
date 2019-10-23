var playlist={"artistName":"WWAWW"};
function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = 'songTitle';
  return playlist;
}
function removeFromPlaylist(playlist,songTitle){
  delete playlist.artistName;
  return playlist;
}