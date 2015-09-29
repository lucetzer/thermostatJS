describe("Power", function() {
  var power;

  beforeEach(function() {
    power = new Power();
  });

  it("power saving should be on", function() {
    expect(power.mode).toBe(true);
  });

  it("power saving can be switched off", function() {
    power.switch_off();
    expect(power.mode).toBe(false);
  });

  it("power saving can be switched on", function() {
    power.switch_on();
    expect(power.mode).toBe(true);
  });

});
