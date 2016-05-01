/**
 * Created by truemenhale on 16/5/1.
 */
function toMain(){
    var Lead = $('#LeadPage');
    Lead[0].addEventListener('touchstart',function(event){
        event.stopPropagation();
        var oY = event.touches[0].screenY;
        Lead[0].addEventListener('touchmove',function(event){
            var nY = event.touches[0].screenY;
            event.stopPropagation();
            Lead[0].addEventListener('touchend',function(){
                event.stopPropagation();
                if(oY - nY > 30){
                    $.mobile.changePage('#MainPage',{
                        transition: 'slideup'
                    });
                }
            })
        });
    });
}
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
    toMain();
});