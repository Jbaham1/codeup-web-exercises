let searchButton = document.getElementById("search-button")
resetButton.addEventListener("click", function (event) {
    map.setZoom(10);
    map.setCenter([-98.4916, 29.4252]);
    map.setStyle('mapbox://styles/mapbox/streets-v9');
    marker.setLngLat([-98.4916, 29.4252]);
    popup.setText("Codeup");});