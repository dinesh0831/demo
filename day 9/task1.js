var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
{
    var t = JSON.parse(this.response);
    var filtering=t.filter((element)=>
    {
        if(element.region=="Asia")
        {
            return element;
        }
    })
    console.log(filtering)
  }
xhr.onerror = function () 
{
    console.log("Error", this.statusText);
};
    xhr.send();
   
