describe("Thermostat", function() {

  var thermostat;
  var power;

  beforeEach(function() {
    thermostat = new Thermostat();
    power = new Power();
  });

  it ("should start at 20 degrees and power saving is on", function() {
    expect(thermostat.temperature).toEqual(20);
    expect(power.mode).toBe(true);
  });

  it("we can increase temperature", function() {
    thermostat.increase_temp(power);
    expect(thermostat.temperature).toEqual(21);
  });

  it("we can decrease temperature", function() {
    thermostat.decrease_temp();
    expect(thermostat.temperature).toEqual(19);
  });

  it("has a minimum temperature 10 degrees", function() {
    for(t = thermostat.temperature; t >= 11; t--) {
      thermostat.decrease_temp();
    }
    expect(function(){thermostat.decrease_temp();}).toThrow
    ("Minimum temperature is 10 degrees");
  });

  it("when power saving is on, maxmium temperature is 25 degrees", function() {
    for(t = thermostat.temperature; t <= 24; t++) {
      thermostat.increase_temp(power);
    }
    expect(function(){thermostat.increase_temp(power);}).toThrow
    ("Maximum temperature is 25 degrees when power saving is switched on");
  });

  it("when power saving is off, maxmium temperature is 32 degrees", function() {
    power.switch_off();
    for(t = thermostat.temperature; t <= 31; t++) {
      thermostat.increase_temp(power);
    }
    expect(function(){thermostat.increase_temp(power);}).toThrow
    ("Maximum temperature is 32 degrees when power saving is switched off");
  });





//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);
//
//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });
//
//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });
//
//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
//
//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });
//
//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');
//
//     player.play(song);
//     player.makeFavorite();
//
//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });
//
//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);
//
//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
});
