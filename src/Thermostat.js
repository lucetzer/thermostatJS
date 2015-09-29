function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.increase_temp = function() {
  this.temperature = this.temperature + 1;
  return this.temperature;
};

Thermostat.prototype.decrease_temp = function() {
  this.temperature = this.temperature - 1;
  return this.temperature;
};






// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
