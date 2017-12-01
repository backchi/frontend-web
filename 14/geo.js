function getGeolocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('log').innerHTML = 'http://map.daum.net/link/map/여기,'+ position.coords.latitude+','+ position.coords.longitude
    console.log('위도 : ' + position.coords.latitude, '경도 : ' + position.coords.longitude);
  });
}

document.getElementById('geoBtn').addEventListener('click', getGeolocation);
