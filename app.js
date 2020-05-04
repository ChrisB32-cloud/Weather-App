// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object

// Feels like the problem is something to do with calling
// one of these functions

const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();

// Get weather om DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change location
  weather.changeLocation(city, country);

  // Set Location in Local st
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal
  // $('#locModal').modal('hide');
});

// maybe the problem is here when passing the results
// to ui.paint

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

// Refactor
function convertToFarenhit_FeelsLike(tempK) {
  if (tempK < 0) {
    return 'below absolute zero (0 K)';
  } else {
    let farin = 0;
    let roundFarin = 0;

    farin = tempK * (9 / 5) - 459.67;
    roundFarin = Math.round(farin);
    return roundFarin;
  }
}

// combin both funtions/ Same calculation

// Refactor
// function convertFeelsLike(tempK) {
//     if(tempK < (0)) {
//         return 'below absolute zero (0 K)';
//     } else {
//         let feel = 0;
//         let roundFeel = 0;

//         feel = (tempK*(9/5)) - 459.67;
//         roundFeel = Math.round(feel);
//         return roundFeel;
//     }
// }

// Converting meters per second to miles per hour
function metersPerSecondToMilesPerHour(milePer) {
  let mileS = 0;
  let mileH = 0;
  let roundMileH = 0;

  mileS = milePer * 2.236936;
  mileH = mileS;
  roundMileH = Math.round(mileH);
  return roundMileH;
}

// Convert degree to Wind Dirction
function windDircFromDeg(degree) {
  if (degree >= 1 && degree <= 44) {
    return 'North East';
  } else if (degree == 45) {
    return 'North';
  } else if (degree >= 46 && degree <= 179) {
    return 'North West';
  } else if (degree == 180) {
    return 'West';
  } else if (degree >= 181 && degree <= 269) {
    return 'South West';
  } else if (degree == 270) {
    return 'South';
  } else if (degree >= 271 && degree <= 314) {
    return 'South East';
  } else {
    return 'East';
  }
}

// Convert hPa to Psi
function convertPhaToPsi(hPa) {
  let psi = hPa * 0.0145038;
  let roundPsi = Math.round(psi);

  return roundPsi;
}
