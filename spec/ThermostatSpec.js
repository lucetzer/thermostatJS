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

  it("we can reset thermostat", function() {
    thermostat.reset_thermostat();
    expect(thermostat.temperature).toEqual(20);
  });

  it('Returns green if temperature is under 18', function() {
    for (i = thermostat.temperature; i > 17; i--) {
      thermostat.decrease_temp();
    }
    expect(thermostat.energy_usage()).toEqual('green');
  });

  it('Returns yellow if temperature is under 25', function() {
    for (i = thermostat.temperature; i < 24; i++) {
      thermostat.increase_temp();
    }
    expect(thermostat.energy_usage()).toEqual('yellow');
  });

  it('Returns red if temperature is over 25', function() {
    for (i = thermostat.temperature; i < 25; i++) {
      thermostat.increase_temp();
    }
    expect(thermostat.energy_usage()).toEqual('red');
  });

});
