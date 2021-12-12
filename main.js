$(document).ready(function(){
  
  $(window).on('load scroll',function(){

    if($(window).scrollTop() > 30){
      $('.header').css({'background':'#000','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
      $('.header .logo img').css({'height':'50px'});
    }else{
      $('.header').css({'background':'none','box-shadow':'none'});
      $('.header .logo img').css({'height':'80px'});
    }
  });

});