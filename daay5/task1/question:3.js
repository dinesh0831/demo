var a=[1,2,3,4,5,6,7,8,90,10];
var c=0;
var b=function(num)
{
    c= c+num;
}

for (i=0;i<a.length;i++)
{
b(a[i]);
}
console.log(c)
