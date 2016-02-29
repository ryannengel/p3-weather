// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

$.simpleWeather({
    location: 99337,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);

       // Display Icon
      $('i').addClass( 'icon-' + weather.code );
      
      
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });


// Parse Current Weather Conditions
var parseCurrent = function(currentCondition) {
      
    // Lowercase String. Replace Space with Hyphens
    currentCondition = currentCondition.toLowerCase().replace(/ /g, '-');
    
    return currentCondition; 
};



// GEOLOCATION


if ('geolocation' in navigator) {
  $('.geolocation').show(); 
} else {
  $('.geolocation').hide();
}


$('button').click( function() {
  
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Wrap Plugin, in Function to be Called
// Otherwise, runs when page loads
var getWeather = function(location) {
  
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
    
       // Display Icon
      $('i').addClass( 'icon-' + weather.code );
      
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
  
};


// VIDE PLUGIN

$('#myBlock').vide('https://github.com/ryannengel/p3-weather/blob/master/mov/rain.mov');