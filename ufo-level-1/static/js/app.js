//variables
let button=d3.select("#filter-btn");
let inputField1=d3.select("#datetime");
let tbody=d3.select("tbody");
let resetbtn=d3.select("#reset-btn");
let columns=["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

//populate table
let populate = (dataInput) => {

    dataInput.forEach(ufo_level_1 => {
        var row=tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_level_1[column]))
    });
}

populate(data);

//filtering
button.on("click", () => {
    d3.event.preventDefault();
    let inputDate=inputField1.property("value").trim();
    let filterDate=data.filter(data=>data.datetime===inputDate);
    console.log(filterDate)
    let filterData=data.filter(data=>data.datetime===inputDate);
    console.log(filterData)

    tbody.html("");

    let response = {
        filterData, filterDate
    }

    if (response.filterData.length !==0) {
        populate(filterData);
    }

        
        else {
            tbody.append("tr").append("td").text("No results found");
        }
})

resetbtn.on("click", () => {
    tbody.html("");
    populate(data);
    console.log("Table reset")
})