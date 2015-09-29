Thermostat JS
=============

This is a project to create a simple digital thermostat, using JavaScript, test-driven with Jasmine and using jQuery to interact with the HTML page.

The first is to build a thermostat model, which encapsulates the business logic.
The second is to create a user interface (UI) in HTML to interact with the thermostat and provide buttons and a display similar to the following:

Specification
------

* Thermostat starts at 20 degrees
* You can increase the temp with the up button
* You can decrease the temp with the down button
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 by hitting the reset button
* The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
