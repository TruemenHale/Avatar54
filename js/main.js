/**
 * Created by truemenhale on 16/5/1.
 */
$(function(){
    $.mobile.loading('show');
    var aImg = ['MainPage.jpg','LeadPage.jpg','QRcode.jpg','tuanhui.png'];
    var aLoaded = [];
    var n = 0;
    for(var i = 0,len = aImg.length; i < len; i++){
        var img = new Image();
        img.src = 'images/' + aImg[i];
        img.onload = function(){
            n+=1;
            if(n == 4){
                $.mobile.loading('hide');
                $.mobile.changePage('#LeadPage');
            }
        }
    }
   $('#LeadPage').on('touchmove',function(){
       $.mobile.changePage('#MainPage',{
           transition: 'slideup'
       });
   });
});