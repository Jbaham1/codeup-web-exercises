// // Initialize the map
// mapboxgl.accessToken = mapBoxToken; // from key.js file
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
//     center: [-98.4870, 29.4284],
//     zoom: 10
// });
//
//
// /**********************************************
//  * 					MARKERS
//  *********************************************/
// // Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// // Markers are specific locations on a map
// //Use the .setLngLat() and .addTo() methods to add marker to the map
//
// var marker = new mapboxgl.Marker({
//     color: '#ffcccc',
//     draggable: true
// })
//     .setLngLat([-98.4870, 29.4284])
//     .addTo(map);
// /**********************************************
//  * 					POPUPS
//  *********************************************/
// // Popups are the info boxes that appear on a map and may describe a given location.
// // Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup
//
// var popup = new mapboxgl.Popup({
//     className: 'codeup-popup'
// })
// //     .setLngLat([-98.48957136173456, 29.42686055035059])
// //     .setHTML("<p>Per Se</p>")
// //     .addTo(map);
// //
// // marker.setPopup(popup);
// // TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.
// // var alamoPopup = new mapboxgl.Popup()
// //     .setHTML("<p>Remember the Alamo!</p>")
// //     .addTo(map);
// //
// // marker.setPopup(alamoPopup);
//
// // TODO: Review the popup docs. What are some additional options we can pass to the popup?
// // TODO: Try setting the text by using ".setText()" instead of ".setHTML()"
//
//
//
// /**********************************************
//  * 					Geocoder
//  *********************************************/
// // Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
//
// let searchString;
//
// // Add an event listener for the search-button 'button'
// document.getElementById("search-button").addEventListener("click", function(){
//     searchString = userInput;
//     geocode(searchString, mapBoxToken).then(function(result){
//         console.log(result);
//         // map.setCenter(result); // i.e. map.setCenter([-98.48, 29.426])
//         map.flyTo({
//             center: result,
//             zoom: 14,
//             speed: 4,
//             curve: 1,
//         })
//         marker.setLngLat(result);
//
//         // Want to add a popup that displays the name of the location at the LONG / LAT coordinates we just found
//         reverseGeocode(result, mapBoxToken).then(function(placeName) {
//             // set the text of the popup to "New York City" (for example)
//             console.log("after reverse geocode, the place name is: " + placeName);
//             popup.setText(placeName);
//             // the popup is already added to the marker, so NO need to add it again with marker.setPopup!
//
//         })
//     })
// });