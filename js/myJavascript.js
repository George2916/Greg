/* add italicised text to top of index.html */

$(document).ready(function(){
  if($( window ).width() < 768){
      $(".classAA").css('font-style', 'italic').text("Click on a photo for more information about it.");
  }else{    
     $(".classAA").css('font-style', 'italic').text("Click on a photo to view an enlarged version.");
      
  }
});
$( window ).resize(function() {
 if($( window ).width() < 768){
      $(".classAA").css('font-style', 'italic').text("Click on a photo for more information about it.");
  }else{
      $(".classAA").css('font-style', 'italic').text("Click on a photo to view an enlarged version.");
  }
});

/* activate Previous and Next buttons that appear in the modals */

$("div[id^='myModal']").each(function(){
  
    var currentModal = $(this);
    
    //click next
    currentModal.find('.btn-next').click(function(){
      currentModal.modal('hide');
      currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
    });
    
    //click prev
    currentModal.find('.btn-prev').click(function(){
      currentModal.modal('hide');
      currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
    });
  
  });

/* java for tailend.html */

  function mySetupFunction() {
    if ($(window).width() <= 767) {
        $('.BBB').css('visibility', 'visible');
        $('.AAA').css('visibility', 'hidden');
    }
    
    else {
        $('.BBB').css('visibility', 'hidden');
        $('.AAA').css('visibility', 'visible');
    }
}

$(document).ready(mySetupFunction);
$(window).resize(mySetupFunction);

  
function sixPageFirstFlip() {
  var x = document.getElementById("page1of6");  
  var y = document.getElementById("page2of6");
  x.style.display = "none"; 
  y.style.display = "block";
}

function sixPageSecondFlip() {
  var x = document.getElementById("page2of6");
  var y = document.getElementById("page3of6");
  x.style.display = "none";
  y.style.display = "block";
}

function sixPageThirdFlip() {
  var x = document.getElementById("page3of6");
  var y = document.getElementById("page4of6");
  x.style.display = "none";
  y.style.display = "block";
}

function sixPageFourthFlip() {
  var x = document.getElementById("page4of6");
  var y = document.getElementById("page5of6");
  x.style.display = "none";
  y.style.display = "block";
}

function sixPageFifthFlip() {
  var x = document.getElementById("page5of6");
  var y = document.getElementById("page6of6");
  x.style.display = "none";
  y.style.display = "block";
}

function sixPageUnflip() {
  var x = document.getElementById("page6of6");
  var y = document.getElementById("page1of6");
  x.style.display = "none";
  y.style.display = "block";
}

 