var playlist = { artistName: "songTitle" }

function updatePLaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName;
}
