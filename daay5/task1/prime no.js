var a=[5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]

var prime=function(num)
{
    
    
    if(num<40 && num>3)
    {
        for(i=1;i<=6;i++)
        {
            
            
            if ( num==(6*i)+1 || num==(6*i)-1   )
                {
                    console.log(num);
                }
                
            
            
       
         }     
        }
    else if(num>40)
    {
        for(j=0; j<(num);j++)
        {
         if(num==((Math.pow(j,2))+j+41))
                {
                    console.log(num)     
                }
            }
    }
    
    
}
for(k=0;k<a.length;k++)
{
prime(a[k])
}
