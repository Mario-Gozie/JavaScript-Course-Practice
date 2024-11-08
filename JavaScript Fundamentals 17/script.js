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

// How to use the geolocation API
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //   console.log(position);

      // const  latitud  = position.coords.latitude;

      // instead of doing the above to get latitude, we did destructuring below, we also applied the same destructuring to get the longitude.

      const { latitude } = position.coords;
      const { longitude } = position.coords;

      // With this longitude and latitude, we can centre the load the map by using the longitude and latitude on google map link.
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];
      const map = L.map("map").setView(coords, 13);
      // console.log(map);

      L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // L.marker(coords)
      //   .addTo(map)
      //   .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      //   .openPopup();

      map.on("click", function (mapEvent) {
        form.classList.remove("hidden");
        inputDistance.focus();
        // console.log(mapEvent);
        // const { lat, lng } = mapEvent.latlng;
        // console.log(lat, lng);
        // L.marker([lat, lng])
        //   .addTo(map)
        //   .bindPopup(
        //     L.popup({
        //       naxWidth: 250,
        //       minWidth: 100,
        //       autoClose: false,
        //       closeOnClick: false,
        //       className: "running-popup",
        //     })
        //   )
        //   .setPopupContent("Workout")
        //   .openPopup();
      });
    },
    function () {
      alert(`Could not get your position`);
    }
  );
