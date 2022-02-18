$(function () {
  const link = $('#pour');
  const boiteText = $('#boiteText');
  const contre = $('#contre');
  const img = $('img.photo');
  const img2 = $('img.photo2');
  const img4 = $('img.photo4');
  const img5 = $('img.photo5');
  link.on('click', function(e) {
    e.preventDefault();
    $(this).fadeOut(1000);
    contre.fadeOut(1000);
    boiteText.fadeIn(1000);
  });
  contre.on('mouseenter', function(e) {
    e.preventDefault();
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)}
      let rndHeight = randomIntFromInterval(1, 500);
      let rndWidth = randomIntFromInterval(1, 750);
      contre.css({top : rndHeight , right : rndWidth});
  });
  img.on('click', function(e) {
    $(this).animate({
      top: '100px',
      right: '200px',
    }, 1000, function() {
      $(this).animate({
        top: '10px',
        right: '10px',
      },1000, function() {
        $(this).animate({
          top:'150px',
          right:'250px',
        },1000);
      });
    });
  });
  img2.on('click', function(e) {
    $(this).animate({
      top: '100px',
      right: '200px',
    }, 1000, function() {
      $(this).animate({
        top: '10px',
        left: '100px',
      },1000, function() {
        $(this).animate({
          top:'150px',
          left:'300px',
        },1000);
      });
    });
  });
  img4.on('click', function(e) {
    $(this).animate({
      top: '100px',
      left
      : '200px',
    }, 1000, function() {
      $(this).animate({
        top: '10px',
        right: '10px',
      },1000, function() {
        $(this).animate({
          top:'150px',
          right:'300px',
        },1000);
      });
    });
  });
  img5.on('click', function(e) {
    $(this).animate({
      top: '100px',
      right: '200px',
    }, 1000, function() {
      $(this).animate({
        top: '10px',
        right: '10px',
      },1000, function() {
        $(this).animate({
          top:'150px',
          right:'300px',
        },1000);
      });
    });
  });
});
