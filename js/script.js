$("#submit").on("click", function(event){
    event.preventDefault();
    
    var nombre = $("input").val();
    
    $(".Lista").append(`<div class="item"> <h3 class="itemShop"> ${nombre} </h3> <button id="check"> Check </button> <button id="borra"> Delete </button><p></p></div>`);
  });
  
  $(".Lista").on("click", "#check", function(){
  //  $("h3").toggleClass('check2');
    $(this).parent().toggleClass('check2');
  });
  
  $(".Lista").on("click", "#borra", function(){
    $(this).parent().remove();
  });