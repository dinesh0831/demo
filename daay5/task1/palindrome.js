var palindrome=function(str)
{
    reverse_str=reverse(str);
    if(reverse_str==str)
    {
        console.log(str)

    }
    else
    {
        console.log("not a palindrome")
    }
}
let test="heloleh";
palindrome(test);
