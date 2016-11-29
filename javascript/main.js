// API KEY $ GOOGLE MAPS = AIzaSyDgHvqXOajkxmzLqzaDkmflCJ_I9OZQRi8

//Timezone shit
if (!sessionStorage.getItem('timezone')) {
  var tz = jstz.determine() || 'UTC';
  sessionStorage.setItem('timezone', tz.name());
}
var currTz = sessionStorage.getItem('timezone');
console.log(currTz);

var date = moment().format("YYYY-MM-DD");
// console.log(date);

var now = moment();
// console.log(now.format('HH:mm:ss'));



if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {

    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    $.get( "http://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + long + "&date=2016-11-23&formatted=0", function( data ) {
      console.log(data.results);

      for (field in data.results) {

        // convert to moment style date/time object
        if(field == "day_length") {
        	console.log("day_length = " + data.results[field] / 60 / 60)
        } else {
	        filter = data.results[field].split("+");
	        currentTime = filter[0] + "Z";
	        var momentTime = moment(currentTime);
	        var tzTime = momentTime.tz(currTz);
	        var formattedTime = tzTime.format('h:mm:ss A')
	        console.log(field + " final Time = ", formattedTime);
	        $('#main-body').text(field + " final Time = " + formattedTime)
        }

      }
      
      // var offset = new Date().getTimezoneOffset();
      // console.log("timezone offset = ", offset);

      // geoInfo = data.results.sunrise;
    });
  });
} 


degrees = 3; // set the initial value to be incremented

setInterval(function() {
    $("#hour-clock").css({'transform': 'rotate(' + degrees + 'deg)'}); //set the css properties by referencing the hour-clock id on the div
	degrees += 3; // add 3 degrees to whatever the running count is. (first time through the loop this will equal 6, 2nd time 9 etc.)
}, 50) // the 50 here represents the time (in milliseconds before running this function again so it sets the speed of the rotation





// 

function getSunInfo(){

}