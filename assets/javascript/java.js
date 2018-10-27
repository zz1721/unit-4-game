

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


    $("#random").html=("Random Result: " + computerPickNum);
    // console.log (computerPickNum);


    $(".crystal").on("click", function (){
        $("#ruby").html("score" + Ruby)
        $("#emerald").html("score" + Emerald)
        $("#opal").html("score" + Opal)
        $("#diamond").html("score" + Diamond)
        console.log(this)
    })


    if(computerPickNum === userTotalPoints)
    {
        alert("YOU WIN!!")
        Wins++;
        $(".win"),html("Wins: " + Wins)

    }
    else if (userTotalPoints > computerPickNum)
    {
        alert("YOU LOSE")
        Losses++;
        $(".loss").html("Losses: " + Losses)
    }
