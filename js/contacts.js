'use strict';

//gmap3
$("#test").gmap3({
    map: {
        options: {
            center: [-37.7681102, 144.8378658],
            zoom: 8
        }
    },
    marker: {
        values: [{
            address: "melbourne,australia",
            options: { icon: "images/marker.png" }
        }]
    }
});


/* ==========================================================================
 Tweet
 ========================================================================== */


$('.tweet').twittie({
    dateFormat: '%b. %d, %Y',
    template: '{{tweet}}<br> <a href="{{url}}" target="_blank">Details</a>',
    count: 1,
    hideReplies: true
});
