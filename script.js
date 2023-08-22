class Playlist {
    constructor(capacity) {
      this.capacity = capacity;
      this.songs = [];
    }
  
    play(song) {
      // Check if the song is already in the playlist
      const index = this.songs.indexOf(song);
  
      if (index !== -1) {
        // Song is already in the playlist, remove it from its current position
        this.songs.splice(index, 1);
      } else if (this.songs.length >= this.capacity) {
        // Playlist is at capacity, remove the oldest song
        this.songs.shift();
      }
  
      // Add the new song to the end of the playlist
      this.songs.push(song);
    }
  
    display() {
      console.log(this.songs.join(','));
    }
  }
  
  // Create a playlist with an initial capacity of 3
  const playlist = new Playlist(3);
  
  // User plays S1, S2, S3
  playlist.play('S1');
  playlist.play('S2');
  playlist.play('S3');
  playlist.display(); 
  
  // User plays S4
  playlist.play('S4');
  playlist.display(); 
  // User plays S2
  playlist.play('S2');
  playlist.display(); 
  
  // User plays S1
  playlist.play('S1');
  playlist.display(); 