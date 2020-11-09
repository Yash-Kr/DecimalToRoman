
var toRoman=function(n)
{
    
    if(n>=1 && n<=9)
    {
      A(n);
    }
    else if(n>=10 && n<=39)
    {
        let count=n/10;
        let rem=n%10;
        if(rem!==0)
        {
          X(count,"X");
          toRoman(rem);
        }
        else
          X(count,"X");
    }
    else if(n>=40 && n<=49)
    {
      result+= "XL";
      if(n!==40)
       toRoman(n%40);
    }
    else if(n>=50 && n<=89)
    {
        result+="L";
        let count=(n-50)/10;
        let rem=(n-50)%10;
        if(rem!==0)
        {
          X(count,"X");
          toRoman(rem);
        }
        else
          X(count,"X");

    }
    else if(n>=90 && n<=99)
    {
        result+= "XC";
        if(n!==90)
         toRoman(n%90);
    }
    else  if(n>=100 && n<=399)
    {
        let count= n/100;
        let rem= n%100;
        if(rem!==0)
        {
          X(count,"C");
          toRoman(rem);
        }
        else
          X(count,"C");
    }

    else if(n>=400 && n<=499)
    {
        result+= "CD";
        if(n!==400)
         toRoman(n%400);
    }
    else if(n>=500 && n<=899)
    {
        result+="D";
        if(n!==500)
        {
          let count= (n-500)/100;
          let rem= (n-500)%100;

            X(count,"C");
            toRoman(rem);
        }
    }
    else if(n>=900 && n<=999)
    {
        result+="CM";
        if(n!==900)
         toRoman(n%900);

    }
    else if(n===1000)
     result+="M";
     
}

var A=function(n)
{
    if(n===1)
      result+="I";
    else if(n===2)
    result+="II";
    else if(n===3)
    result+="III";
    else if(n===4)
    result+="IV";
    else if(n===5)
    result+="V";
    else if(n===6)
    result+="VI";
    else if(n===7)
    result+="VII";
    else if(n===8)
    result+="VIII";
    else if(n===9)
    result+="IX";
    
    
}
var X=function (count,letter)
   {
       result+= letter.repeat(count);
   }

var result='';
var x;

document.querySelector(".btn").addEventListener('click',function()
{
    x=document.querySelector(".input").value;
    if(x)
    {
        if(x== Math.floor(x))
      {
        var n= parseInt(x);
        if(n>=1 && n<=1000)
        {
        toRoman(n);
        document.querySelector(".output").innerHTML= "&#9758; "+n+" in Roman is : "+result;
        result="";
        }
        else
         document.querySelector(".output").textContent="Dont be Smart ! 😎";  
      }
     else
          document.querySelector(".output").textContent="Dont be Smart ! 😎";  
            

    }
});

