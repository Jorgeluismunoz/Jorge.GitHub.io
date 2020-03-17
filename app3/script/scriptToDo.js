/*--Jorge Munoz.
    CSD 122 Javascript and JQuery.
    Web Project.*/
//The ready event occurs when the DOM (document object model) has been loaded.
$(document).ready(function(){

    $('#container').animate({opacity: 1}, 1200, "linear");
    
    // On click funtion that toggle class to mark a line as done.
    $('ul').on('click', 'li', function(){
        $(this).toggleClass('mark_done').blur();
    });
    
    //Remove to do item (prevent event bubbling)
    //Event Bubbling is the event starts from the deepest element or target element to its parents, 
    //then all its ancestors which are on the way to bottom to top. At present, 
    //all the modern browsers have event bubbling as the default way of event flow.
    $('ul').on('click', 'span', function(event){
        $(this).parent().fadeOut(600, function(){
            $(this).remove(); 
        }); // function that runs after item fadesthen stops bubbling
        event.stopPropagation(); 
    });
    
    //In a keypress event, the Unicode value of the key pressed is stored in either the keyCode or charCode property
    // if ENTER pressed & input not blank. ASCII value 13 is carriage return or CR is 13
    $('#items').on('keypress', function(event){
        if(event.which === 13 && $(this).val() !== "") {
            var newItem = $(this).val(); // save input to var
            $('ul').append('<li> ' + newItem + ' <span>❌</span></li>'); // append html and to-do content to ul
            $(this).val("").blur(); // clear input
        }
    });
    
    //Change the title of to do list.
    $("#title").on('keypress', function(event){
        if(event.which === 13) {
            var title = $(this).val();
            $(this).attr("placeholder", title).blur();
        }
    });
    
    //Hide and show input field for ienter new items with a fadeToggle.
    $('.pencil').on('click', function(){
        $('#items').fadeToggle();
    });
    
});