/**
 * Created by truemenhale on 16/5/1.
 */
$(function(){

    var oSpace = $('.space');
    var EBox = $('.EveryBox');
    var wHeight = $(window).height();
    var AvatarBox = $('.AvatarBox');
    oSpace.css('height',wHeight*0.85);
    EBox.css({'margin-top': wHeight*0.04,'height': wHeight*0.68});
    AvatarBox.css({'margin-top' : wHeight*0.05,'height': $(window).width()*0.727});
});