
   var MYNS = MYNS || {};

    MYNS.leafletmap={


        mymap: L.map('mapid').setView([51.35377, 6.64292], 19),


        init: function () {
            MYNS.leafletmap.mymap.scrollWheelZoom.disable();
           var marker = L.marker([51.35377,6.64292]).addTo(MYNS.leafletmap.mymap);
            marker.bindPopup("<h1 class='subheadline-small'>Zentrum für Tierzahnheilkunde</h1>").openPopup();

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5vbnltb3NrcGx1cyIsImEiOiJjamo0ZGlvN28xa214M3ZvNGQzbXMzMnp3In0.eA9e66OpGxtT59nMcC3K4g', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'your.mapbox.access.token'
            }).addTo(MYNS.leafletmap.mymap);

            return this.mymap;

        }


    };


MYNS.leafletmap.init();


var hello= function (a,b) { return a + b;

};


export default MYNS;