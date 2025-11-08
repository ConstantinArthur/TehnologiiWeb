import fetch from 'node-fetch';

function getObjectFromUrl(url) {
    return fetch(url)
        .then(response => response.json());
}

function getCountryBounds(country) {
    return getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
        .then(object => ({
            minLatitude: parseFloat(object[0].boundingbox[0]),
            maxLatitude: parseFloat(object[0].boundingbox[1]),
            minLongitude: parseFloat(object[0].boundingbox[2]),
            maxLongitude: parseFloat(object[0].boundingbox[3])
        }));
}

function getPlanesAboveCountry(country) {
    return getCountryBounds(country)
        .then(bounds => {
            const url = `https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lomin=${bounds.minLongitude}&lamax=${bounds.maxLatitude}&lomax=${bounds.maxLongitude}`;
            return getObjectFromUrl(url);
        })
        .then(data => data.states || []);
}

getPlanesAboveCountry('Romania').then(planes => {
    console.log(`Avioane deasupra României: ${planes.length}`);
    console.log(planes.slice(0, 5)); 
});
