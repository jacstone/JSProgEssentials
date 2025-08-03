function searchLocation() {
    const input = document.getElementById('destinationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    //resultDiv.innerHTML = '';
    switch (input) {
        case 'beach':
        case 'beaches':
        case 'beach vacation':
        case 'beach holiday':
        case 'beach trip':
        case 'beach getaway':
            fetch('travel_recommendation_api.json')
                .then(response => response.json())
                .then(data => {
                    const location = data.beaches;

                    if (location) {
                        console.log('Location found:', location);
                        resultDiv.innerHTML = `<h2>Recommended Beach Locations</h2>`;
                        location.forEach(place => {
                            resultDiv.innerHTML += `<br><img src="${place.imageUrl}" alt="${place.name}"><br>`;
                            resultDiv.innerHTML += `<h3>${place.name}</h3>`;
                            resultDiv.innerHTML += `<p> ${place.description}</p><br>`;
                        });
                    } else {
                        console.log('Condition not found.');
                        resultDiv.innerHTML = `<h2>No Current Recomendations Found</h2>`;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    resultDiv.innerHTML = 'An error occurred while fetching data.';
                });
            break;
        case 'temples':
        case 'temple':
        case 'temple visit':
        case 'temple tour':
        case 'temple trip':
        case 'temple pilgrimage':
            fetch('travel_recommendation_api.json')
                .then(response => response.json())
                .then(data => {
                    const location = data.temples;

                    if (location) {
                        console.log('Location found:', location);
                        resultDiv.innerHTML = `<h2>Recommended Temple Locations</h2>`;
                        location.forEach(place => {
                            resultDiv.innerHTML += `<br><img src="${place.imageUrl}" alt="${place.name}"><br>`;
                            resultDiv.innerHTML += `<h3>${place.name}</h3>`;
                            resultDiv.innerHTML += `<p> ${place.description}</p><br>`;
                        });
                    } else {
                        console.log('Condition not found.');
                        resultDiv.innerHTML = `<h2>No Current Recomendations Found</h2>`;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    resultDiv.innerHTML = 'An error occurred while fetching data.';
                });
            break
        default:
            fetch('travel_recommendation_api.json')
                .then(response => response.json())
                .then(data => {
                    const location = data.countries.find(item => item.name.toLowerCase() === input);

                    if (location) {
                        console.log('Location found:', location);
                        resultDiv.innerHTML = `<h2>Recommended Cities</h2>`;
                        location.cities.forEach(place => {
                            resultDiv.innerHTML += `<br><img src="${place.imageUrl}" alt="${place.name}"><br>`;
                            resultDiv.innerHTML += `<h3>${place.name}</h3>`;
                            resultDiv.innerHTML += `<p> ${place.description}</p><br>`;
                        });
                    } else {
                        console.log('Condition not found.');
                        resultDiv.innerHTML = `<h2>No Current Recomendations Found</h2>`;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    resultDiv.innerHTML = 'An error occurred while fetching data.';
                });
            break;
    }
}

btnSearch.addEventListener('click', searchLocation);

function clearResults() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Search Results</h2><p>Enter a destination or keyword to find travel recommendations.</p>`;
    console.log('Results cleared');
}
btnClear.addEventListener('click', clearResults);