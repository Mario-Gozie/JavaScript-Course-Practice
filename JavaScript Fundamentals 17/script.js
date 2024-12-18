"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
  date = new Date(); // New Date
  id = Date.now() + "".slice(-10); //Generating ID with date and last 10 numbers
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription(); // this function is declared in workout but used here because it needs to catch the type and because of prototype linking, it will still give a result.
  }

  // METHOD FOR PACE
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = "cycling";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription(); // this function is declared in workout but used here because it needs to catch the type and because of prototype linking, it will still give a result.
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

// console.log(run1, cycling1);

//////////////////////////////////////////////////////////////////////////////////////////////
// APPLICATION ACHETECTURE

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class App {
  // general variables
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workout = [];
  constructor() {
    // GET USERS LOCATION
    this._getPosition(); //after creating the new app object, this is the first code to run to provide position

    // GET DATA FROM LOCAL STORAGE
    this._getLocalStorage();

    // ATTACH EVENT LISTENERS
    form.addEventListener("submit", this._newWorkout.bind(this)); // This keyword will always be the element it is attached to. so to set the this keyword to the app object created, you need to use bind.

    inputType.addEventListener("change", this._toggleElevationField);

    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
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
    this.#map = L.map("map").setView(coords, this.#mapZoomLevel);
    // console.log(map);

    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling Clicks on maps (Just to display form)
    this.#map.on("click", this._showForm.bind(this));

    this.#workout.forEach((work) => {
      this._renderWorkoutMarker(work);
    });
  }

  // SHOW FORM METHOD

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }
  // Hide the form + clear input fields

  // Clear Input fields
  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";
    form.style.display = "none";
    form.classList.add("hidden");

    setTimeout(() => (form.style.display = "grid"), 1000);
  }
  // TOGGLE ELEVATION FIELD METHOD

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  // NEW WORKOUT METHOD
  _newWorkout(e) {
    // CHECKING FOR NUMBERS.
    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp)); // This code will check if all values passed into it are numbers. remember that spread operator gives an array. so if you put three values for input, it will be an array of three values. if you put in two values, it will be an array of two values. to summerize, this function will return true if all values are numbers and false if one of them is not.

    // CHECKING FOR POSITIVE VALUES FOR CADENCE. ELEVATION CAN HAVE A NEGATIVE VALUE.

    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);
    e.preventDefault();

    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value; // the positive sign in front is to convert vales to numbers since they come as strings
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // if workout is running, creating running object.

    if (type === "running") {
      const cadence = +inputCadence.value;
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)

        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence) // Here I am checking if the first three values are number or if the first three values are positive number, and if there is a porblem with any, in term of not being number or being a number less than Zero, an alert will pop up
      )
        //checking if value is a number
        return alert(`Inputs have to be positive numbers!`);

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if workout is cycling, creating cycling object.
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(elevation)

        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration) // Here I am checking if the first three values are number or if the first two values are positive number, elevation can less than zero in cases when on is walking down the hill and if there is a porblem with any, in term of not being number or being a number less than Zero, an alert will pop up
      )
        //checking if value is a number
        return alert(`Inputs have to be positive numbers!`);
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add the new object to the workout array
    this.#workout.push(workout);
    // Render workout on map as a marker
    console.log(this.#workout);
    this._renderWorkoutMarker(workout);

    // render workout on the list

    this._renderWorkout(workout);

    // calling the form hiding method
    this._hideForm();

    //set local storage to all workout

    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    console.log(workout.coords);
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          naxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    // Common part of the html

    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === "running" ? "🏃" : "🚴‍♀️"
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;

    // The uncommon Part of the HTML

    if (workout.type === "running")
      html += `<div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>`;

    if (workout.type === "cycling")
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;

    form.insertAdjacentHTML("afterend", html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest(".workout");
    // console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this.#workout.find(
      (work) => work.id === workoutEl.dataset.id
    );

    // console.log(workout);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });

    // Using the public interface

    // workout.click();   This was disabled because it is not necessary.
  }

  // SETTING UP THE LOCAL STORAGE.

  // How to use local storage

  // the name will be workouts, then the next will be string value of what we want to store. This is more like a key value store, where the name is the first value and in this case, it is workout and the value is #workouts

  // to convert javasript values to string, we can use JASON.stringify. Local storage is a very simple API and it should be used for small data. else, it will slow down your application.
  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workout));
  }

  // getting Data from the local storage to appear on the webpage when we leave and come back.

  _getLocalStorage() {
    // PLEASE REMEMBER THAT DATA GOTTEN FROM A DATABASE WILL NOT CONTAIN FUNCTIONS OR INCLUDE FUNCTIONS
    const data = JSON.parse(localStorage.getItem("workouts")); // Converting the data to objects from strings.
    console.log(data);

    if (!data) return; // if there is no value for data, return

    this.#workout = data; // setting the data value into the #workout array. because in the begining, the #workout array will be empty and we need to store it with data for previous information to reflect

    this.#workout.forEach((work) => {
      this._renderWorkout(work);
      // this._renderWorkoutMarker(work); //This would have worked here, but it wont work because it is a function that is supposed to run at the begining, but it has to do so after the map has loaded (which is where asynchronous would have been better. remember for the map to load, it needs to get the location, then use the coordinates to load the map.). Hence, I need to put the function where in  Place where it will run after the map has loaded. so I will put the code after the load map function. see above in load map function.
    });
  }

  reset() {
    //This code is not mandatory, but it can help to remove the content of the storage when you run app.reset() on the console. it will make all data in the browser storage to be wiped off on the next refresh.
    localStorage.removeItem("workouts"); // remember that the key for the item we stored in the local storage of the browser is workouts. so we can use that key and the removeItem method to clear the data in the browsers local database.
    location.reload(); // this part of the code will reload the page and the app will be empty when reloaded. location is an object that contains a  lot of methods and properties in a browser. and it has the ability to reload the page.
    // let me go try app.reset() on my console.
  }
}

// CREATING A NEW APP OBJECT

const app = new App();
