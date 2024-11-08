"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class Workout {
  date = new Date(); // New Date
  id = Date.now() + "".slice(-10); //Generating ID with date and last 10 numbers

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  // METHOD FOR PACE
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
  }

  // METHOD FOR CALCULATING SPEED

  calcSpeed() {
    //km/h
    this.speed = this.distance / (this.duration / 60); // converting from hours to minutes require dividing by 60;
    return this.speed;
  }
}

// /// Testing the new Objects
// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 528);

console.log(run1, cycling1);

//////////////////////////////////////////////////////////////////////////////////////////////
// APPLICATION ACHETECTURE

class App {
  #map;

  #mapEvent;
  constructor() {
    this._getPosition(); //after creating the new app object, this is the first code to run to provide position

    form.addEventListener("submit", this._newWorkout.bind(this)); // This keyword will always be the element it is attached to. so to set the this keyword to the app object created, you need to use bind.

    inputType.addEventListener("change", this._toggleElevationField);
  }

  // GETTING POSITION METHOD
  _getPosition() {
    // How to use the geolocation API
    // This conde is used to get current location.
    // Then this same code also calls the load map fuction to load the map of the location gotten.
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert(`Could not get your position`);
        }
      );
  }

  // LOADING MAP METHOD

  // The code below is used to load a map with the current positon.
  _loadMap(position) {
    //   console.log(position);

    // const  latitud  = position.coords.latitude;

    // instead of doing the above to get latitude, we did destructuring below, we also applied the same destructuring to get the longitude.

    const { latitude } = position.coords;
    const { longitude } = position.coords;

    // With this longitude and latitude, we can centre the load the map by using the longitude and latitude on google map link.
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map("map").setView(coords, 13);
    // console.log(map);

    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling Clicks on maps (Just to display form)
    this.#map.on("click", this._showForm.bind(this));
  }

  // SHOW FORM METHOD

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  // TOGGLE ELEVATION FIELD METHOD

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  // NEW WORKOUT METHOD
  _newWorkout(e) {
    e.preventDefault();

    // Clear Input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";

    // Display the marker

    const { lat, lng } = this.#mapEvent.latlng;
    console.log(lat, lng);
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          naxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent("Workout")
      .openPopup();
  }
}

// CREATING A NEW APP OBJECT

const app = new App();
