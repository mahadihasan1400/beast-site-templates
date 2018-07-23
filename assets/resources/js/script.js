$(document).ready(function () {

    /* raw script */

    $('.btn-minus').click(function () {
        var quantity = $('#qt').val();
        $('#qt').val(--quantity);
    });

    $('.btn-plus').click(function () {
        var quantity = $('#qt').val();
        $('#qt').val(++quantity);
    });


    /*scroll to start*/
    $('.js--scroll-to-plan').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-membership').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {

        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

    });

    /* animation on scroll */

    $('.js--wp-features').waypoint(function (direction) {

        $('.js--wp-features').addClass('animated fadeInUp');


    }, {
        offset: '50%'
    });

    $('.js--wp-classes').waypoint(function (direction) {

        $('.js--wp-classes').addClass('animated fadeInUp');


    }, {
        offset: '50%'
    });

    $('.js--wp-trainers').waypoint(function (direction) {

        $('.js--wp-trainers').addClass('animated fadeInUp');


    }, {
        offset: '50%'
    });

    $('.js--wp-popular-news').waypoint(function (direction) {

        $('.js--wp-popular-news').addClass('animated fadeInUp');


    }, {
        offset: '50%'
    });

    $('.js--wp-facilities').waypoint(function (direction) {

        $('.js--wp-facilities').addClass('animated fadeInLeft');


    }, {
        offset: '50%'
    });

    $('.js--wp-dm').waypoint(function (direction) {

        $('.js--wp-dm').addClass('animated pulse');


    }, {
        offset: '50%'
    });

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
        infoWindow: {
            content: '<p>BRAST CLUB</p>'
        }

    });

});