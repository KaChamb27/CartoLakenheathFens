
var map;
var place;
var autocomplete;
var infowindow = new google.maps.InfoWindow();

function initialization() {
  showAllAssets();
  initAutocomplete();
}

function showAllAssets() {
  $.ajax({
    url: 'HttpServlet',
    type: 'POST',
    data: { "tab_id": "1"},
    success: function(assets) { 
      mapInitialization(assets);
    },
    error: function(xhr, status, error) {
      alert("An AJAX error occured: " + status + "\nError: " + error);
    }
  });
}

function mapInitialization(assets) {
  var mapOptions = {
    mapTypeId : google.maps.MapTypeId.ROADMAP, // Set the type of Map
  };
  
  // Render the map within the empty div
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  var bounds = new google.maps.LatLngBounds ();
  
  
    
    

    
   
    
 // Create the marker
    var marker = new google.maps.Marker({ // Set the marker
      position : latlng, // Position marker to coordinates
      map : map, // assign the market to our map variable
      customInfo: contentStr,
      //icon:icons[e['report_type']]
    });
    

    // Add a Click Listener to the marker
    google.maps.event.addListener(marker, 'click', function() { 
      // use 'customInfo' to customize infoWindow
      infowindow.setContent(marker['customInfo']);
      infowindow.open(map, marker); // Open InfoWindow
    });
    
  });
  
  map.fitBounds (bounds);

}

function initAutocomplete() {
	  // Create the autocomplete object
	  autocomplete = new google.maps.places.Autocomplete(document
	    .getElementById('autocomplete'));

//Execute our 'initialization' function once the page has loaded.
google.maps.event.addDomListener(window, 'load', initialization);