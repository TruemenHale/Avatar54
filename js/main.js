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
    var oT;
    var n = 0;
    var w = $(window).width()*0.74;
    var canvas = $('.cav');
    canvas.attr('width',w);
    canvas.attr('height',w);
    var gd = canvas[0].getContext('2d');
    for(var i = 0,len = aImg.length; i < len; i++){
        var img = new Image();
        img.src = 'images/' + aImg[i];
        if(aImg[i] == 'tuanhui.png'){
            oT = img;
        }
        img.onload = function(){
            n+=1;
            if(n == 4){
                var avatar = new Image();
                avatar.src = 'images/avatar.png';
                avatar.onload = function(){
                    console.log(avatar.width+','+avatar.height);
                    gd.save();
                    gd.drawImage(avatar,1,w*0.13,w*0.87,w*0.87);
                    gd.drawImage(oT,w*0.7,0,w*0.3,w*0.3);
                    gd.restore();
                    $.mobile.loading('hide');
                    $.mobile.changePage('#LeadPage');
                    var _url = canvas[0].toDataURL();
                    console.log(_url);
                    var img = new Image();
                    img.src = _url;
                    img.onload = function(){
                        $('.avatar').attr('src',_url);
                    }
                };
            }
        }
    }
    toMain();
});