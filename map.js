let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 10.432795895401657, lng: -61.24541694555724 },
        zoom: 12,
    });
}


function initMap()
{
    const map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(10.277712259574821, -61.291530970292385),
        zoom: 10,
    });

    const inflatorLocations = [
        {
            name: 'Np Royal Road',
            coords: new google.maps.LatLng(10.28083584429533, -61.45252037121375),
            status: 'Working',
        },
        {
            name: 'Cross Crossing',
            coords: new google.maps.LatLng(10.26438840264066, -61.45936981283887),
            status: 'Not Working',
        },
        {
            name: 'Carrousel Service Station Limited',
            coords: new google.maps.LatLng(10.279850572268387, -61.44660478159375),
            status: 'Not Working',
        },
        {
            name: "Unipet Brentwood Gas Station / U Store (Convenience Shopping)",
            coords: new google.maps.LatLng(10.505703394788119, -61.404850645021355),
            status: "Working"
        },
        {
            name: "NPMC QuikShoppe & Gas Station Gasparillo",
            coords: new google.maps.LatLng(10.317948981457926, -61.42532531899903),
            status: "Working",
        },
        {
            name: "Unipet Lady Hailes Avenue Gas Station / U Store (Convenience Shopping)",
            coords: new google.maps.LatLng(10.265809002874844, -61.46305689115477),
            status: "Working",
        },
        {
            name: "Naparima Mayaro Rd Unipet",
            coords: new google.maps.LatLng(10.270587903059715, -61.37168552584178),
            status: "Not Working",
        }
    ];

        for (let i = 0; i < inflatorLocations.length; i++) {
            const marker = new google.maps.Marker({
                position: inflatorLocations[i].coords,
                map: map,
                title: inflatorLocations[i].name, 
            });
            const infowindow = new google.maps.InfoWindow({
                content: inflatorLocations[i].name + ' tire inflator is ' + inflatorLocations[i].status,
            });
            
            marker.addListener("click", () =>
            {
                infowindow.open(map, marker);
            });
        }
    }


