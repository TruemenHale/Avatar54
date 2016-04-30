/**
 * Created by truemenhale on 16/5/1.
 */
$(function(){
   $('#LeadPage').on('scroll',function(){
       $.mobile.changePage('#MainPage',{
           transition: 'slideup'
       });
   });
});