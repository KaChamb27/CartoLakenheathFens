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
        
    }


    $(document).ready(initialize());
})();