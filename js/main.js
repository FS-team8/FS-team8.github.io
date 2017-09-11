function showDiv(id) {
	$.each($('.tooltip'), function(index, item) {
    	$(this).hide();
    }
  );
  $(id).show();
}

 $(document).ready(function(){
   $("#map").bind("mousemove",function(e){
    var offset = $("#map").offset();
    var clickX=e.clientX - offset.left;
    var clickY=e.clientY - offset.top;
    //console.log("X:" + clickX + ", Y:" + clickY);
      if((clickX>1080)&&(clickY>210)&&(clickY<380)) {
      	showDiv('#product-zoo');
      } else if ((clickX>800)&&(clickY>420)){
        showDiv('#product-east');
      } else if ((clickX>600)&&(clickX<900)&&(clickY>420)&&(clickY<580)) {
      	showDiv('#product-funk');
      } else if ((clickX>250)&&(clickX<600)&&(clickY>160)&&(clickY<400)) {
      	showDiv('#product-state');
      } else {
        $.each($('.tooltip'), function(index, item) {
            $(this).hide();
        });
      }
  });
});