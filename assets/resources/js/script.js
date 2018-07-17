$(document).ready(function () {
    /*G MAPS */
    var lat = 38.722252;
    var lng = -9.139337;

    var map = new GMaps({
        div: '.map',
        lat: lat,
        lng: lng,
        zoom: 12
    });

    map.addMarker({
        lat: lat,
        lng: lng,
        title: 'Lima',
        click: function (e) {
            alert('You clicked in this marker');
        }
    });


    // $('h2').click(function () {
    //     $(this).css('background-color','#ff0000');
    // });


});