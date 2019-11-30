function initMap() {

    const crimeType = document.getElementById('crime-type-input');
    crimeType.addEventListener('change', function() {
        debugger
        createMap(this.value);
    }, false);

    const createMap = (filter) => {
        debugger
        crimeData(10).done(function (data) {
            debugger
            const allData = [];
            data.forEach((datum) => {
                if(!allData.includes(datum.ofns_desc)) {
                    allData.push(datum.ofns_desc);
                }
            })
            console.log(allData);
            // console.log(data.filter((datum) => {
            //     if(filter === "ALL") {
            //         return datum;
            //     } else {
            //         if(datum.law_cat_cd === filter) {
            //             return datum;
            //         }
            //     }
            // }));
            const heatmapData = [];
            data.forEach((datum) => {
                if(datum.latitude && datum.longitude) {
                    if (filter === "ALL") {
                        heatmapData.push(new google.maps.LatLng(datum.latitude, datum.longitude));                        
                    } else {
                        debugger
                        if(datum.ofns_desc === filter) {
                            heatmapData.push(new google.maps.LatLng(datum.latitude, datum.longitude));
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
    crimeData(10).done(function (data) {
        // console.log(data.filter((datum) => {
        //     if (datum.law_cat_cd === filter) {
        //         return datum;
        //     }
        // }));
        const heatmapData = [];
        data.forEach((datum) => {
            if (datum.latitude && datum.longitude) {
                // if (datum.law_cat_cd === filter) {
                    heatmapData.push(new google.maps.LatLng(datum.latitude, datum.longitude));
                // }
            }
        })
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