let red = 0;
let green = 0;
let blue = 0;

setInterval(changeBorderColor, 50);

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

        console.log(red, green, blue);
        

        
    

}