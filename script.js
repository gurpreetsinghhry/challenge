const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

searchButton.addEventListener('click', fetchCentres);

function fetchCentres() {
  const searchValue = searchInput.value.trim();

  if (searchValue === '') {
    alert('Please enter a city, state, or observatory name.');
    return;
  }

  const apiUrl = 'https://isro.vercel.app/api/centres';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const centres = data.centres;
      const filteredCentres = filterCentres(centres, searchValue);
      displayCentres(filteredCentres);
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
}

function filterCentres(centres, searchValue) {
  return centres.filter(centre => {
    const lowerSearchValue = searchValue.toLowerCase();
    const centreName = centre.name.toLowerCase();
    const place = centre.Place.toLowerCase();
    const state = centre.State.toLowerCase();

    return centreName.includes(lowerSearchValue) ||
           place.includes(lowerSearchValue) ||
           state.includes(lowerSearchValue);
  });
}

function displayCentres(centres) {
  resultsContainer.innerHTML = '';

  if (centres.length === 0) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  centres.forEach(centre => {
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');

    const centreName = document.createElement('p');
    centreName.textContent = `Centre Name: ${centre.name}`;

    const place = document.createElement('p');
    place.textContent = `Place: ${centre.Place}`;

    const state = document.createElement('p');
    state.textContent = `State: ${centre.State}`;

    resultDiv.appendChild(centreName);
    resultDiv.appendChild(place);
    resultDiv.appendChild(state);

    resultsContainer.appendChild(resultDiv);
  });
}
