// Only change code below this line

class Thermostat {
  constructor(fahrenheit) {
    this._celsius = (5 / 9) * (fahrenheit - 32);
  }
  
  get temperature() {
    return this._celsius;
  }
  
  set temperature(celsius) {
    this._celsius = celsius;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
