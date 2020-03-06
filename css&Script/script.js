/*--Jorge Munoz.
    CSD 122 Javascript and JQery.
    Web Project, Feb 2020.*/
//The ready event occurs when the DOM (document object model) has been loaded.
$(document).ready(function() {
    
//---------------------------on click logo-------------------------------
	$('.logo').click(function() {
		//Not define still
	});

//-------------------------when mouse enters/leaves-----------------------
//When mouse hovers execute the function that add class transition, 
//this class is defined in csss file and change opacity.
//When mouse leafe remove the class and give a opacity in icon.
    $(".logo").hover(function() {
        $(this).addClass('transition');
        $(this).css('opacity','1');
    }, function() {
        $(this).removeClass('transition');
        $(this).css('opacity','0.7');
    });
//The same effect happens to the social media icons. the function add a class transition 
//and when leave remove the class.
    $("i").hover(function() {
        $(this).addClass('transition');
        $(this).css('opacity','1');
    }, function() {
        $(this).removeClass('transition');
        $(this).css('opacity','0.7');
    });

//--------jQuery Code to Animate Skill Bar------------
//The class skillbar execute funtion for each elemente, find the skillvar-bar, 
//that is the representation of data-percent, then animates. 
//This animation consists in a transition of width based u=in the attribute data-percent. 
//Animation speed is defined as 6000ms
    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
    });

//-------------Contact section--------------------
//Mouse over and leave for each button for change background color//
    $(":submit").mouseover(function() {
        $(this).css("background-color","#0b2255");
    });
    $(":submit").mouseleave(function() {
        $(this).css("background-color","#0b75db");
    });
    $(":button").mouseover(function() {
        $(this).css("background-color","#0b2255");
    });
    $(":button").mouseleave(function() {
        $(this).css("background-color","#0b75db");
    });

//----------------------Validation contact --------------------------------//
//The click event occurs when the element with id join_list is clicked.
//and call a function that verificates the input fiels. Store in a variable the element we will use, email and name.
//A bollean variabe indicate if there is any input wrong and avoid submit infromation.
    $("#Submit").click(     
		function() {           
			var emailAddress = $("#email_address").val();  
			var first_name = $("#first_name").val();         
            var last_name = $("#last_name").val();         
            var subject = $("#subject").val(); 
            var isValid = true; 
//Every letter in the email has match with pattern: like Jorgeluis@gmail.com or s-jorge.munoz@lwtech.edu.
//metacharacter \b s used to find a match at the beginning or end of a word. 
//Inside [incloude any letter or sign like -,_,%]. 
//The end $ has to match with these, no other character like number.
//(+) Match the preceding character 1 or more times. next @ and more conteins of letters and sing. 
//next the domanin, no number or sings (org,com,edu,etc) betwen 2 and 4 characters.
            var patternEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i; 
//Pattern for validating of name. The first character is only letter the secon can be space or letter. 
//The end $ has to match with these, no other chaaracter like number.
            var patternName = /^[a-z]+[a-z ]*$/i; 
			if (first_name == "") {      
				$("#first_name").next().text("This field is required.");  
				isValid = false;         
			}  else if (!patternName.test(first_name)) { 
				$("#first_name").next().text("No valid Name"); 
				isValid = false;         
			}else {
				$("#first_name").next().text("");      
            }	
            if (last_name == "") {      
				$("#last_name").next().text("This field is required.");   
				isValid = false;         
			}  else if (!patternName.test(last_name)) { 
				$("#last_name").next().text("No valid Name"); 
				isValid = false;        
			}else {
				$("#last_name").next().text("");
			}	
			if (emailAddress == "") {   
				$("#email_address").next().text("This field is required."); 
				isValid = false;        
			} else if (!patternEmail.test(emailAddress)) { 
				$("#email_address").next().text("No valid email address"); 
				isValid = false;        
			} else {                    
				$("#email_address").next().text("");   
            } 
            if (subject == "") {      
				$("#subject").next().text("This field is required.");  
				isValid = false;         
            } else {                    
				$("#subject").next().text("");   
            }   
            if (isValid) {                  //All input are true
				$("#email_form").submit();  //action="email.html"
			}	
		}// end function
    );
//On click button clear execute function that clear fields
//All tags input of type text (not buttons) setting them with an empty string "".
//Inser * in the element immediately following the specified element.
//This function need this focus too for reposisionet in the firs field.
	$("#clear").click(function() {               
        $('input[type="text"]').val('').next().text("*");
        $("#first_name").focus();                    
        });
//Double click call funtion delate specific texbox. This (not other input) value = "" (empty).
    $('input[type="text"]').dblclick(function() {
      $(this).val('');                           
    });
    $("#first_name").focus(); 
  });//---------------------------------------------------------------------------------