function updateMap() {
  console.log("updating map with realtime data")  
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp.data);
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases= element.infected;
        if(cases>255){
            color = "rgb(255,0,0)";
        }

        else{
            color = `rgb(${cases}, 0, 0)`;
        }


        // mark on the map
        new mapboxgl.Marker({
          draggable: true,
          color: color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

let interval = 5000;
setInterval( updateMap, interval);
