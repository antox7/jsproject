const crimeDataYear = (filter) => {

    // filter is an object with keys: 
    // crimeEvent, 
    // yearEvent, 
    // ageEvent, 
    // raceEvent, 
    // genderChosen

    let crime, year, age, race, gender

    if(['MISDEMEANOR', 'VIOLATION', 'FELONY'].includes(filter.crimeEvent)) {
        debugger
        crime = `&&law_cat_cd=${filter.crimeEvent}`;
    } else {
        debugger
        filter.crimeEvent.includes('ALL') ? crime = '' : crime = `&&ofns_desc=${filter.crimeEvent}`;  
    }

    // this default 2010 enforces && to be applied productively
    filter.yearEvent.includes('ALL') ? year = 'cmplnt_fr_dt=2010-01-01T00:00:00.000' : year = `cmplnt_fr_dt=${filter.yearEvent}-01-01T00:00:00.000`;
    filter.ageEvent.includes('ALL') ? age = '' : age = `&&susp_age_group=${filter.ageEvent}`;
    filter.raceEvent.includes('ALL') ? race = '' : race = `&&susp_race=${filter.raceEvent}`;
    filter.genderChosen.includes('ALL') ? gender = '' : gender = `&&susp_sex=${filter.genderChosen}`;
    
    debugger

    console.log(`https://data.cityofnewyork.us/resource/qgea-i56i.json?${year}${crime}${age}${race}${gender}`);

    return $.ajax({
        url: `https://data.cityofnewyork.us/resource/qgea-i56i.json?${year}${crime}${age}${race}${gender}`,
        type: "GET",
        data: {
            "$limit": 5000,
            "$$app_token": "5w1zRlrxln1KdlyJ9RGg3sIsu"
        }
    })
}