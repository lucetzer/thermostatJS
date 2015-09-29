function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.increase_temp = function(power) {

  if (this.temperature > 24 && power.mode) {
    throw "Maximum temperature is 25 degrees when power saving is switched on";
  } else if (this.temperature > 31 && !power.mode) {
    throw "Maximum temperature is 32 degrees when power saving is switched off";
  }
  this.temperature = this.temperature + 1;
  return this.temperature;
};

Thermostat.prototype.decrease_temp = function() {
  if (this.temperature < 11) {
    throw "Minimum temperature is 10 degrees";
  }
  this.temperature = this.temperature - 1;
  return this.temperature;
};
