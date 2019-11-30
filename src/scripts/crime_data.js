// to retrieve an entire crime data provided by nypd

// const crimeData = () => {
//     return $.ajax({
//     url: "https://data.cityofnewyork.us/resource/qgea-i56i.json",
//     type: "GET",
//     data: {
//         "$limit": 1000,
//         "$$app_token": "5w1zRlrxln1KdlyJ9RGg3sIsu"
//     }
//     })
// }

const crimeDataYear = (yr) => {
    return $.ajax({
        url: `https://data.cityofnewyork.us/resource/qgea-i56i.json?cmplnt_fr_dt=${yr}-01-01T00:00:00.000`,
        type: "GET",
        data: {
            "$limit": 1000,
            "$$app_token": "5w1zRlrxln1KdlyJ9RGg3sIsu"
        }
    })
}