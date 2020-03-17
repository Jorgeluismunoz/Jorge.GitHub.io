/*--Jorge Munoz.
    CSD 122 Javascript and JQery.
    Web Project, Feb 2020.*/
//The ready event occurs when the DOM (document object model) has been loaded.
$(document).ready(function() {
    var youWin = 0;      
    var computerWin = 0; 
    var countTime = 0; 
//Array that hold the three options: 0(paper), 1(scissor) or 2(rock).  
    var chooses = ["📄","✂️", "🌑"];   
    
//------------------ User choose--------------------------------------------------
//Main function, when the user chose one button execute ...
//with avariable value 1(paper), 2(scissor) or 3(rock).
//function pick(PlayerChoose){  
    $('input').on('click', function (e) {  
        var PlayerChoose = $(this).data("value");     
        //Function called with a variable PlayerChoose(0, 1 or 2).
        $( "input" ).fadeIn( "puff" );
        $("#Player1").html(chooses[PlayerChoose]); 
                                
//----------------- Computer choose------------------------------------------------
//The function is not closed, coninues. Calculate computer chose by random methed.
        var ComputerChoose = Math.floor((Math.random() * 3) + 1);  
        if (ComputerChoose == 1) ComputerChoose = 0 ;       
        else if(ComputerChoose == 2) ComputerChoose = 1;  
        else if(ComputerChoose == 3) ComputerChoose = 2;
        $("#Player2").html(chooses[ComputerChoose]); 
        //Change the HTML content of a tag element with id=Player2 value.

//----------------------- Result -------------------------------------------------
//Once both players have choose, determnate who wins.
        if(PlayerChoose == ComputerChoose ){ 
            $("#result").html("😴"+chooses[PlayerChoose]+" The result is a tie! "+chooses[ComputerChoose]+"😑");
            countTime++; 
        }
        else if(PlayerChoose == 0 && ComputerChoose == 1){  
            $("#result").html("😡✋ Scissor wins!(Computer) ✌😀");
            computerWin++; 
            countTime++; 
        }
        else if(PlayerChoose == 0 && ComputerChoose == 2){ 
            $("#result").html("😄✋ Paper wins(You) ✊😠");
            youWin++; 
            countTime++; 
        }
        else if(PlayerChoose == 1 && ComputerChoose == 0){ 
            $("#result").html("😆✌ Scissor wins!(You) ✋😭");
            youWin++; 
            countTime++; 
        }
        else if(PlayerChoose == 1 && ComputerChoose == 2){ 
            $("#result").html("😱✌ Rock wins!(Computer) ✊😝");
            computerWin++; 
            countTime++; 
        }
        else if(PlayerChoose == 2 && ComputerChoose == 0){ 
            $("#result").html("😢✊ Paper wins(Computer) ✋😂");
            computerWin++; 
            countTime++; 
        }
        else if(PlayerChoose == 2 && ComputerChoose == 1){ 
            $("#result").html("😜✊ Rock wins!(You) ✌😨");
            youWin++; 
            countTime++; 
        } 

//----------------------- Count -----------------------------------------------------
//Assign accumulated value inside tag element wiht each id. 

        $("#countYouWin").html(youWin);
        $("#countComputerWin").html(computerWin);
        $("#countTimeGame").html(countTime);
    });
 //----------------------Effect hover--------------------------------------------------- 
//Add class transition to the three burrons with an opacity
    $("input").hover(function() {
        $(this).addClass('transition');
        $(this).css('opacity','1');
    }, function() {
        $(this).removeClass('transition');
        $(this).css('opacity','0.7');
    });
});
