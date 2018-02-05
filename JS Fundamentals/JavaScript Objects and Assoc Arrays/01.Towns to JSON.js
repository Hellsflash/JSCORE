function townsToJSON(array) {
    let townArray = [];
    for (let town of array.slice(1)) {
        let [empty, townName, lat, lng] = town.split(/\s*\|\s*/);
        let townObj = {Town: townName, Latitude: Number(lat), Longitude: Number(lng)};
        townArray.push(townObj);
    }
    console.log(JSON.stringify(townArray));
}
townsToJSON(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']);
townsToJSON(['| Town | Latitude | Longitude |', '| Veliko Turnovo | 43.0757 | 25.6172 |', '| Monatevideo | 34.50 | 56.11 |']);