let red = 0;
let green = 0;
let blue = 0;



setInterval(changeBorderColor, 50);
setAge();

    function changeBorderColor()
    {
        
    document.getElementById("photo").style.borderColor =
     "rgb("+ red + ", " + green + ", " + blue + ")";
        
        if(red == 0 && blue == 0 && green == 0 )
        {
            red += 1;
        }
        else if(red < 255 && blue == 0 && green == 0 )
        {
            red += 1;
        }

        else if(red == 255 && blue == 0 && green == 0 )
        {
            blue += 1;
        }

        else if(red == 255 && blue < 255 && green == 0 )
        {
            blue += 1;
        }

        else if(red == 255 && blue == 255 && green == 0 )
        {
           green += 1;
        }

        else if(red == 255 && blue == 255 && green < 255 )
        {
           green += 1;
        }

        else if(red == 255 && blue == 255 && green == 255 )
        {
           red -= 1;
        }

        else if(red > 0 && blue == 255 && green == 255 )
        {
           red -= 1;
        }
        
        else if(red == 0 && blue == 255 && green == 255 )
        {
           blue -= 1;
        }
        
        else if(red == 0 && blue > 0 && green == 255 )
        {
           blue -= 1;
        }

        else {
            green -=1;
        }
       
}

function setAge()
{
   let birth = new Date("2000-06-13");
   let today = new Date();
   const age = today.getFullYear() - birth.getFullYear();

   document.getElementById("age").innerText = age;
   
}