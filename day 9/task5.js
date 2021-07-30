var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{
    var t = JSON.parse(this.response);
    var currency=t.filter((element)=>
    {
        if(element.currencies[0].name=="United States dollar")
        {
            return element.name;
        }
    })
    
    console.log(currency)
    }
xhr.onerror = function () 
{
    console.log("Error", this.statusText);
};
    xhr.send();
