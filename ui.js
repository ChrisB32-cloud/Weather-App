class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.windSpeed = document.getElementById('w-wind-speed');
    this.windDirection = document.getElementById('w-wind-direction');
  }
  // issue could be here
  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${convertToFarenhit_FeelsLike(
      weather.main.temp
    )}\u00B0F`;

    // Trying to make this icon show but not sure how to with this api
    // this.icon.textContent = weather.weather[0].icon;
    // I know textContent isn't the right method but having trouble finding the right route

    this.humidity.textContent = `Humidty: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels like: ${convertToFarenhit_FeelsLike(
      weather.main.feels_like
    )}\u00B0F`;
    this.pressure.textContent = `Pressure: ${convertPhaToPsi(
      weather.main.pressure
    )} Per in.`;
    this.windSpeed.textContent = `Wind Speed: ${metersPerSecondToMilesPerHour(
      weather.wind.speed
    )} mph`;
    this.windDirection.textContent = `Wind Direction: ${windDircFromDeg(
      weather.wind.deg
    )}`;
  }
}
