$(document).ready(function() {
  $('#products-icon').click(function() {
      $('.navbar').toggleClass('active');
  });

  $(window).scroll(function() {
      $('.navbar').removeClass('active');
  });

  $('#darkmode').click(function() {
      if ($(this).hasClass('fa-moon')) {
          $(this).removeClass('fa-moon').addClass('fa-sun');
          $('body').addClass('active');
      } else {
          $(this).removeClass('fa-sun').addClass('fa-moon');
          $('body').removeClass('active');
      }
  });
});