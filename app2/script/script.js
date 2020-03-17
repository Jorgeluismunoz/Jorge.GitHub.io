/*--Jorge Munoz.
    CSD 122 Javascript and JQery.
    Web Project.*/
//The ready event occurs when the DOM (document object model) has been loaded.
$(function(){
    let total = $("#total");
    let result = $("#equal");
    let history = $("#History");
    let number = $(".num");
    let operadores = $(".ope");

//Each button value (num or operator) will be appended in the calculator screem.
    $(number).on("click", function(){
        total.append($(this).val());
    });
    $(operadores).on("click", function(){
        total.append(" "+$(this).val()+" ");
    });
    
//Delate the last digit on cick button. With the for loop, It evaluate each digit in total, for delating one by one.
    $("#clearLast").on("click", function(){
        $("small").text("");
        var len = total.text().length;
        for( i = 0 ; i < len - 1 ; i++ ){
            if(i != (len - 1)){
                var letra = total.text()[i];
                $("small").append(letra);
            }
        }
        total.text($("small").text());
        $("small").text("");
    });

//Delate all contain total inserting an empty string.
    $("#clear").on("click", function(){
        total.text("");
    });

//When click equal button the function will evaluate 'eval()' the final value.
//Alert if any number was entered. The prepend the result in the history.
    $(result).on("click", function(){
        let subtotal = eval(total.text());
        if(subtotal === undefined ){
          alert("Enter a number");
        } else {
          let last_one = total.text();
          history.prepend("<li>"+last_one+" = "+subtotal+"</li>");
          total.text(subtotal);
        }
    });
  
//Delate all contain history inserting an empty string.
    var clear_history = $("#Clear_history")
    clear_history.on("click", function(){
        history.text("")
    })
});