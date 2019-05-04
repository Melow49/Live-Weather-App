// Create a map object
var myMap = L.map("map", {
  center: [39.114053, -94.6274636],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 15,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Country data
var cities= [
  {
    name: "Long Beach",
    location: [33.7700504, -118.1937395],
    niceDays: 210
  },
  {
    name: "Los Angeles",
    location: [34.0522342, -118.2436849],
    niceDays: 182
  },
  {
    name: "San Diego",
    location: [32.715738, -117.1610838],
    niceDays: 178
  },
  {
    name: "San Jose",
    location: [37.3382082, -121.8863286],
    niceDays: 170
  },
  {
    name: "Oakland",
    location: [37.8043637, -122.2711137],
    niceDays: 138
  },
  {
    name: "Phoenix",
    location: [33.4483771, -112.0740373],
    niceDays: 100
  },
  {
    name: "Fresno",
    location: [36.7468422, -119.7725868],
    niceDays: 95
  },
  {
    name: "Stockton",
    location: [37.9577016, -121.2907796],
    niceDays: 89
  },
  {
    name: "Tacoma",
    location: [47.2528768, -122.4442906],
    niceDays: 86
  },
  {
    name: "Olympia",
    location: [47.0378741, -122.9006951],
    niceDays: 84
  },
  {
    name: "Seattle",
    location: [47.6062095, -122.3320708],
    niceDays: 78
  },
  {
    name: "Portland",
    location: [45.5230622, -122.6764816],
    niceDays: 74
  },
  {
    name: "Charlotte",
    location: [35.2270869, -80.8431267],
    niceDays: 74
  }, 
  {
    name: "San Francisco",
    location: [37.7749295, -122.4194155],
    niceDays: 73
  },
  {
    name: "Atlanta",
    location: [33.7489954, -84.3879824],
    niceDays: 73
  },
  {
    name: "Jacksonville",
    location: [30.3321838, -81.655651],
    niceDays: 71
  },
  {
    name: "Las Vegas",
    location:[36.1699412, -115.1398296],
    niceDays: 68
  },
  {
    name: "Lubbock",
    location: [33.5778631, -101.8551665],
    niceDays: 40
  },
  {
    name: "Oklahoma city",
    location: [35.4675602, -97.5164276],
    niceDays: 39
  },
  {
    name: "Amarillo",
    location: [35.2219971, -101.8312969],
    niceDays: 39,
  },
  {
    name: "New York",
    location: [40.7127837, -74.0059413],
    niceDays: 39,
  },
  {
    name: "Wichita",
    location: [37.688889, -97.336111],
    niceDays: 38
  },
  {
    name: "Corpus Christi",
    location: [27.8005828, -97.396381],
    niceDays: 36
  },
{
  name: 'Brownsville',
  location: [25.9017472, -97.497483],
  niceDays: 32
},
{
  name: "Honolulu",
  location:[21.3069444, -157.8583333],
  niceDays:31
},
{
  name: "Anchorage",
  location: [61.2180556, -149.9002778],
  niceDays: 20
},
{
  name:"Colorado Springs",
  location: [38.8338816, -104.8213634],
  niceDays: 41
},
{
  name: "Boston",
  location: [42.3600825, -71.0588801],
  niceDays: 44
},
{
  name: "Omaha",
  location: [41.2523634, -95.9979883],
  niceDays: 45
},
{
  name: "Washington",
  location: [38.9071923, -77.0368707],
  niceDays: 46
},
{
  name: "Minneapolis",
  location: [44.977753, -93.2650108],
  niceDays: 46
},
{
  name: "Dallas",
  location: [32.7766642, -96.7969879],
  niceDays: 46
},
{
  name: "Chicago",
  location: [41.8781136, -87.6297982],
  niceDays: 47
},
{
  name: "Kansas City",
  location: [39.114053, -94.6274636],
  niceDays:47
},
{
  name:"Philadelphia",
  location: [39.9525839, -75.1652215],
  niceDays: 48
},
{
  name:"Austin",
  location: [30.267153, -97.7430608],
  niceDays: 48
}, 
{
  name:"Albuquerque",
  location: [35.0853336, -106.6055534],
  niceDays: 50
},
{
  name: "Denver",
  location: [39.7392358, -104.990251],
  niceDays:52
},
{
  name:"Miami",
  location: [25.7616798, -80.1917902],
  niceDays: 53
},
{
  name: "Detroit",
  location: [42.331427, -83.0457538],
  niceDays: 54
},
{
  name: "Memphis",
  location:[35.1495343, -90.0489801],
  niceDays: 54
},

{
  name: "Houston",
  location: [29.7604267, -95.3698028],
  niceDays: 54
},
{
  name: "Louisville",
  location: [38.2526647, -85.7584557],
  niceDays: 56
},
{
  name: "Indianapolis",
  location: [39.768403, -86.158068],
  niceDays: 56
},
{
  name:"San Antonio",
  location: [29.4241219, -98.4936282],
  niceDays: 57
},
{
  name:"Columbus",
  location: [39.9611755, -82.9987942],
  niceDays: 57
},
{
  name: "New Orleans",
  location: [29.9510658, -90.0715323],
  niceDays: 58
},

{
  name: "Nashville",
  location: [36.1626638, -86.7816016],
  niceDays:59
},
{
  name: "El Paso",
  location: [31.7775757, -106.4424559],
  niceDays: 66
},
{
  name: "Raleigh",
  location: [35.7795897, -78.6381787],
  niceDays: 66
}


  
];


// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (cities[i].niceDays > 150) {
    color = "yellow";
  }
  else if (cities[i].niceDays > 125){
    color = "blue"
  }
  else if (cities[i].niceDays > 100) {
    color = "pink";
  }
  else if (cities[i].niceDays > 75) {
    color = "orange";
  }
  else if (cities[i].niceDays > 50){
    color = "green";
  }
  else {
    color = "red";
  }

  // Add circles to map
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: cities[i].niceDays * 1400
  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>NiceDays: " + cities[i].niceDays + "</h3>").addTo(myMap);
}
