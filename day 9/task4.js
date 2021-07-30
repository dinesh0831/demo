var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{
    var t = JSON.parse(this.response);  
var population=t.map((element)=>
    {
        
        return element.population;
        
        
    })
    
    
    var reducer=population.reduce((element1,element2)=>
    {
       return element1+element2
    })
    console.log(reducer)
}
xhr.onerror = function () 
{
    console.log("Error", this.statusText);
};
    xhr.send();
