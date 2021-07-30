var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{
    var t = JSON.parse(this.response);
    t.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    });
    }
xhr.onerror = function () 
{
    console.log("Error", this.statusText);
};
    xhr.send();
   
