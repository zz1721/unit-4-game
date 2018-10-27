

    var computerPickNum= Math.floor(Math.random()*101)+19;
    console.log(computerPickNum)
    var Wins ="wins";
    var Losses ="losses";
    var Ruby=Math.floor(Math.random()*11)+1;
    var Diamond= Math.floor(Math.random()*11)+1;
    var Opal=Math.floor(Math.random()*11)+1;
    var Emerald= Math.floor(Math.random()*11)+1;
    var userTotalPoints="userTotalPoints";
    var randoms = $("#random");
    var crystal = $("#gem");
    var finalscores = Ruby + Diamond + Emerald + Opal;


    $("#random").html("Random Result: " + computerPickNum);
    $("#score").html(finalscores)
   
    // console.log (computerPickNum);


    $(".crystal").on("click", function (){
        var Ruby=Math.floor(Math.random()*11)+1;
        var Diamond= Math.floor(Math.random()*11)+1;
        var Opal=Math.floor(Math.random()*11)+1;
        var Emerald= Math.floor(Math.random()*11)+1;
        $("#ruby").html("score" + Ruby)
        $("#emerald").html("score" + Emerald)
        $("#opal").html("score" + Opal)
        $("#diamond").html("score" + Diamond)
        console.log(Ruby)
    })




    if(computerPickNum === userTotalPoints)
    {
        alert("YOU WIN!!")
        Wins++;
        $(".win"),html("Wins: " + Wins)
        $("#score").html(0)
        console.log(Wins)

    }
    else if (userTotalPoints > computerPickNum)
    {
        alert("YOU LOSE")
        Losses++;
        $(".loss").html("Losses: " + Losses)
        $("#score").html(0);
        console.log(Losses)
    }
