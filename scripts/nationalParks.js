document.addEventListener("DOMContentLoaded", function () {
  // Populate State Select
  const stateSelect = document.getElementById('stateSelect');
  locationsArray.forEach(location => {
      let option = document.createElement('option');
      option.value = location;
      option.text = location;
      stateSelect.appendChild(option);
  });

  // Populate Park Type Select
  const parkTypeSelect = document.getElementById('parkTypeSelect');
  parkTypesArray.forEach(type => {
      let option = document.createElement('option');
      option.value = type;
      option.text = type;
      parkTypeSelect.appendChild(option);
  });
});

function searchParksByLocation() {
  const selectedState = document.getElementById('stateSelect').value;
  const parksResults = document.getElementById('parksResults');
  parksResults.innerHTML = ''; // Clear previous results

  const filteredParks = nationalParksArray.filter(park => park.State === selectedState);
  if (filteredParks.length > 0) {
      filteredParks.forEach(park => {
          let parkElement = document.createElement('div');
          parkElement.innerHTML = `
              <div class="card mb-3">
                  <img src="${park.Image}" class="card-img-top" alt="${park.LocationName}">
                  <div class="card-body">
                      <h5 class="card-title">${park.LocationName}</h5>
                      <p class="card-text">${park.City}, ${park.State}</p>
                      <a href="https://www.nps.gov/${park.LocationID.toLowerCase()}/index.htm" target="_blank" class="btn btn-primary">Visit Park</a>
                  </div>
              </div>
          `;
          parksResults.appendChild(parkElement);
      });
  } else {
      parksResults.innerHTML = '<p>No parks found for this location.</p>';
  }
}

function searchParksByType() {
  const selectedType = document.getElementById('parkTypeSelect').value.toLowerCase();
  const parksResults = document.getElementById('parksResults');
  parksResults.innerHTML = ''; // Clear previous results

  const filteredParks = nationalParksArray.filter(park => park.LocationName.toLowerCase().includes(selectedType));
  if (filteredParks.length > 0) {
      filteredParks.forEach(park => {
          let parkElement = document.createElement('div');
          parkElement.innerHTML = `
              <div class="card mb-3">
                  <img src="${park.Image}" class="card-img-top" alt="${park.LocationName}">
                  <div class="card-body">
                      <h5 class="card-title">${park.LocationName}</h5>
                      <p class="card-text">${park.City}, ${park.State}</p>
                      <a href="https://www.nps.gov/${park.LocationID.toLowerCase()}/index.htm" target="_blank" class="btn btn-primary">Visit Park</a>
                  </div>
              </div>
          `;
          parksResults.appendChild(parkElement);
      });
  } else {
      parksResults.innerHTML = '<p>No parks found for this type.</p>';
  }
}
