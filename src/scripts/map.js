const prevEvents = [];

window.onload = function initMap() {

    const crimeType = document.getElementById('crime-type-input');
    crimeType.addEventListener('change', 
        function() {
            prevEvents.push(this.value);
            createMap({crimeType: this.value});
        }, 
        false
    );
    
    const year = document.getElementById('year-type-input');
    year.addEventListener('change', 
        function () {
        // console.log(this.value);
        createMap({crimeType: prevEvents[prevEvents.length - 1], year: this.value});
        }, 
        false
    );

    const createMap = (filter) => {
        if (!filter.year) {
                filter['year'] = '2010';
        }
        crimeDataYear(filter.year).done(function (data) {
        
            const allData = [];
            data.forEach((datum) => {
                if (datum.cmplnt_fr_dt) {
                    if(datum.cmplnt_fr_dt.slice(0, 4) === '2018') {
                    allData.push(datum.cmplnt_fr_dt);
                    }
                }
            })

            console.log(allData);

            const heatmapData = [];
            data.forEach((datum) => {
                if(datum.latitude && datum.longitude) {
                    if (filter.crimeType === "ALL") {
                        if (datum.cmplnt_fr_dt.slice(0, 4) === filter.year) {
                                                heatmapData.push(new google.maps.LatLng(datum.latitude, datum.longitude));                        
                        }
                    } else {
                        if(['MISDEMEANOR', 'VIOLATION', 'FELONY'].includes(filter.crimeType)) {
                            if (datum.cmplnt_fr_dt.slice(0, 4) === filter.year && datum.law_cat_cd === filter.crimeType) {
                                heatmapData.push(new google.maps.LatLng(datum.latitude, datum.longitude));
                            }
                        }
                        else {
                            if (datum.cmplnt_fr_dt.slice(0, 4) === filter.year && datum.ofns_desc === filter.crimeType) {
                            heatmapData.push(new google.maps.LatLng(datum.latitude, datum.longitude));
                            }
                        }
                    }
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

            // var gradient = [
            //     'rgba(0, 255, 255, 0)',
            //     'rgba(0, 255, 255, 1)',
            //     'rgba(0, 191, 255, 1)',
            //     'rgba(0, 127, 255, 1)',
            //     'rgba(0, 63, 255, 1)',
            //     'rgba(0, 0, 255, 1)',
            //     'rgba(0, 0, 223, 1)',
            //     'rgba(0, 0, 191, 1)',
            //     'rgba(0, 0, 159, 1)',
            //     'rgba(0, 0, 127, 1)',
            //     'rgba(63, 0, 91, 1)',
            //     'rgba(127, 0, 63, 1)',
            //     'rgba(191, 0, 31, 1)',
            //     'rgba(255, 0, 0, 1)'
            // ]
            // var gradient = ['rbga(221, 184, 108, 0)'];
            // heatmap.set('gradient', gradient);

            heatmap.set('radius', 7);
            heatmap.setMap(map);
        })
    }
    crimeDataYear('2010').done(function (data) {
        
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
}