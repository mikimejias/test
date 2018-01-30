$(window).on('scroll', function() {

  $('.showcase-content').css({
    'transform': 'translate(0px,'+$(window).scrollTop()/2+'%)'
  });

  if($(window).scrollTop() > 570) {
    $('nav').addClass('nav-scroll');
  } else {
    $('nav').removeClass('nav-scroll');
  }

  if($(window).scrollTop() > $('.about-title').offset().top - 450) {
    $('.about-title').addClass('is-showing animated slideInDown');
  } else {
    $('.about-title').removeClass('is-showing animated slideInDown');
  }

  if($(window).scrollTop() > $('.about-body').offset().top - 450) {
    $('.about-body').addClass('is-showing animated slideInDown');
  } else {
    $('.about-body').removeClass('is-showing animated slideInDown');
  }

  if($(window).scrollTop() > $('.services-title').offset().top - 450) {
    $('.services-title').addClass('is-showing animated slideInDown');
  } else {
    $('.services-title').removeClass('is-showing animated slideInDown');
  }

  if($(window).scrollTop() > $('.card').offset().top - 450) {
    $('.card').addClass('is-showing animated fadeInRight');
  } else {
    $('.card').removeClass('is-showing animated fadeInRight');
  }

  if($(window).scrollTop() > $('.habilities-title').offset().top - 450) {
    $('.habilities-title').addClass('is-showing animated slideInDown');
  } else {
    $('.habilities-title').removeClass('is-showing animated slideInDown');
  }

  if($(window).scrollTop() > $('.habilities-body').offset().top - 450) {
    $('.habilities-body').addClass('is-showing animated fadeInLeft');
  } else {
    $('.habilities-body').removeClass('is-showing animated fadeInLeft');
  }

  if($(window).scrollTop() > $('.contact-title').offset().top - 450) {
    $('.contact-title').addClass('is-showing animated slideInDown');
  } else {
    $('.contact-title').removeClass('is-showing animated slideInDown');
  }

  if($(window).scrollTop() > $('.contact-body').offset().top - 450) {
    $('.contact-body').addClass('is-showing animated fadeInRight');
  } else {
    $('.contact-body').removeClass('is-showing animated fadeInRight');
  }

})

$(function(){
  var linkskroll = $('.scroll');

  //smooth scrolling
  linkskroll.click(function(e) {
    e.preventDefault();
    //animate({css-property, duration})
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  
});