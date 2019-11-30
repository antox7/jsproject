// to retrieve an entire crime data provided by nypd

const crimeData = (limit) => {
    return $.ajax({
    url: "https://data.cityofnewyork.us/resource/qgea-i56i.json",
    type: "GET",
    data: {
        "$limit": limit,
        "$$app_token": "5w1zRlrxln1KdlyJ9RGg3sIsu"
    }
    })
}