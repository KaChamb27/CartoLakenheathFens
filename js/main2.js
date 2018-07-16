/** Main.js for 777Proj2: Lakenheath Fens map. Kirsten Chamberlain, July 2018. **/

/**
 * Function to reopen the layer table of contents
 */
function openNav() {
    console.log("clicked open");
    editing = false;
    console.log('editing:', editing);
    document.getElementById("panel_border").style.width = "350px";
    $("#map_border").css('background-color', '#999999');
    $("#panel_title").html('Lakenheath Fen');
    $("#map_title").html('');
}


/**
 * Function to hide the layer table of contents
 */
function closeNav() {
    console.log("clicked close");
    document.getElementById("panel_border").style.width = "0";
    $("#map_border").css('background-color', 'white');
    $("#panel_title").html('');
    $("#map_title").html('Lakenheath Fen');
}



(function() {
    'use strict';


    /**
     * Main function to instantiate a map object
     */
    function initialize() {
        map = L.map('map', {
            center: [52.4458, 0.5088],
            zoom: 12,
            minZoom: 12,
            zoomControl: false
        });
        L.Control.zoomHome().addTo(map);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }

    /**
     * JSON for colors
     */
    var colorCodes = {
        'poi' : '#7574ff',
        'trails' : null,
        'servs' : '#ff7800',
        'publicrts' : null,
        'bndry' : null
    }

    // Form actions
    var api_key = 'UfLgPlZ1iTKsdQ0LojTlNg';
    
    /**
     * Function for generating an SQL statement
     * that selects all features for a layer
     * @param layer CartoDB layer name
     * @returns {string} SQL Query statement
     */
    function get_sql_query(layer) {
        return 'SELECT * FROM ' + layer + '&api_key=' + api_key;
    }
    
    //Build select box for selected features
    function get_features(features, id) {
        var query_set = new Set();
        features.forEach(function(feature) {
            if (id === 'addresses') {
                query_set.add(feature.properties.address);
            } else {
                if (feature.properties.type === null) {
                    query_set.add('upland');
                } else {
                    query_set.add(feature.properties.type);
                }
            }
        });
        build_query_combo(query_set, id);
    }
    
    //Load data if layer selected
    function load_data(self) {
        $.getJSON(base_url + get_sql_query(self.id), function(data) {
            
        }
    }

    $(document).ready(initialize());
})();