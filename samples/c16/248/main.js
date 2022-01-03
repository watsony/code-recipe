// 現在位置の取得
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

function geoSuccess(position) {
    // 緯度
    const lat = position.coords.latitude;
    // 経度
    const lng = position.coords.longitude;

    SVGFEDisplacementMapElement(lat, lng);
}

function setMap(lat, lng) {
    // 経度緯度を設定
    const latlng = new google.maps.LatLng(lat, lng);

    // マーカーを追加
    const marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: latlng
    });
}