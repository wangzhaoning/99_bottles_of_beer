module.exports=function main(input) {
    var solute="";
        for(var i=input;i>0;i--)
        {
            if(i===1)
            {
                solute+="    "+i+" bottle of beer on the wall, "+i+" bottle of beer.\n" +
                    "    Take one down and pass it around, no more bottles of beer on the wall.\n";
            }
            else{
            solute+="    "+i+" bottles of beer on the wall, "+i+" bottles of beer.\n";
            if(i===2)
            {
               solute+= "    Take one down and pass it around, "+(i-1)+" bottle of beer on the wall.\n";
            }
            else{
                solute+= "    Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.\n";
            }

        }
    }
    if(input===1)
    {
        solute+= "    No more bottles of beer on the wall, no more bottles of beer.\n"+
            "    Go to the store and buy some more, "+input+" bottle of beer on the wall.";
    }
    else {
        solute+= "    No more bottles of beer on the wall, no more bottles of beer.\n"+
            "    Go to the store and buy some more, "+input +" bottles of beer on the wall.";
    }


    return solute;
}