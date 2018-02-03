var playlist = { artistName: "songTitle" }

function updatePLaylist(playlist, artistName, songTitle) {
  return playlist.artistName = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName;
}
