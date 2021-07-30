
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{
    var t = JSON.parse(this.response);
        var population=t.filter((element)=>
    {
        if (element.population<200000)
        {
        return element.population;
        }
        
    })
    console.log(population)
    }
xhr.onerror = function () 
{
    console.log("Error", this.statusText);
};
    xhr.send();
