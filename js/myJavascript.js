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
