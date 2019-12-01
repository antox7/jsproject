const allFilters = {
    crimeEvent: 'ALL',
    yearEvent: 'ALL',
    ageEvent: 'ALL',
    raceEvent: 'ALL',
    genderChosen: 'ALL',
}

window.onload = function initMap() {

    document.getElementById('crime-type-input').addEventListener('change', 
        function() {
            allFilters.crimeEvent = this.value;
            createMap(allFilters);
        }, 
        false
    );
    
    document.getElementById('year-type-input').addEventListener('change', 
        function () {
        allFilters.yearEvent = this.value;
        createMap(allFilters);
        }, 
        false
    );

    document.getElementById('race-type-input').addEventListener('change',
        function () {
            allFilters.raceEvent = this.value;
            createMap(allFilters);
        },
        false
    );

    document.getElementById('gender-type-input').addEventListener('change',
        function () {
            allFilters.genderChosen = this.value;
            createMap(allFilters);
        },
        false
    );

    document.getElementById('age-type-input').addEventListener('change',
        function () {
            if(this.value === "18") {
                allFilters.ageEvent = '<18';
            } else {
                allFilters.ageEvent = this.value;
            }
            createMap(allFilters);
        },
        false
    );

    const createMap = (filter) => {

        crimeDataYear(filter).done(function (data) {
            
            const heatmapData = [];
            
            data.forEach((datum) => {
                if(datum.latitude && datum.longitude) {
                    heatmapData.push(new google.maps.LatLng(datum.latitude, datum.longitude));                        
                }
            })

            const mapProp = {
                center: new google.maps.LatLng(40.7481, -73.9848),
                zoom: 11,
                panControl: false,
                streetViewControl: false,
                styles: [
                    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{ color: '#263c3f' }]
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#6b9a76' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{ color: '#38414e' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#212a37' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#9ca5b3' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [{ color: '#746855' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{ color: '#1f2835' }]
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#f3d19c' }]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{ color: '#2f3948' }]
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#d59563' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{ color: '#17263c' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#515c6d' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.stroke',
                        stylers: [{ color: '#17263c' }]
                    }
                ]
            };
            
            const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            
            const heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapData,
                map: map
            });

            heatmap.set('radius', 5);
            
            heatmap.setMap(map);
        })
    }

    crimeDataYear(allFilters).done(function (data) {

        const heatmapData = [];
        
        data.forEach((datum) => {
            if (datum.latitude && datum.longitude) {
                heatmapData.push(new google.maps.LatLng(datum.latitude, datum.longitude));
            }
        })
        
        const mapProp = {
            center: new google.maps.LatLng(40.7481, -73.9848),
            zoom: 11,
            panControl: false,
            streetViewControl: false,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#263c3f' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#6b9a76' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#38414e' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#212a37' }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9ca5b3' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#746855' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#1f2835' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#f3d19c' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{ color: '#2f3948' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#17263c' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515c6d' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#17263c' }]
                }
            ]
        };

        const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        
        const heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            map: map
        });

        heatmap.set('radius', 5);

        heatmap.setMap(map);
    
    })
    
    document.getElementById('root').addEventListener('click', e => {
        window.location.href = "https://antox7.github.io/exploreCrime/"
    })
}