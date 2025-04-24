if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }

document.getElementById('sosButton').addEventListener('click', function () {
    if ('vibrate' in navigator) {
        let sosPattern = [200, 100, 200, 100, 200, 600, 600, 600, 200, 100, 200, 100, 200];
        
        navigator.vibrate(sosPattern);
    } else {
        alert("Wibracje nie działają na tym urządzeniu!");
    }
});

function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${lat}/${long}`;
      mapLink.textContent = `Latitude: ${lat} °, Longitude: ${long} °`;
  }

  function error() {
      status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
  } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
  }
}


let lat = 0;
let long = 0;

function geo() {
  var map = L.map('map').setView([lat, long], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
}

document.querySelector("#showMap").addEventListener("click", function() {
  document.querySelector("#map-container").style.display = "block";
  document.querySelector("#sos-container").style.display = "none";
});

document.querySelector("#showSOS").addEventListener("click", function() {
  document.querySelector("#map-container").style.display = "none";
  document.querySelector("#sos-container").style.display = "block";
});

document.querySelector("#find-me").addEventListener("click", geoFindMe);

document.querySelector("#geo").addEventListener("click", geo);

document.querySelector("#sosButton").addEventListener('click', () => {
  if ("vibrate" in navigator) {
      navigator.vibrate([200, 200, 200, 500, 500, 500, 200, 200, 200]);
  }
});
