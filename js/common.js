$(document).ready(function () {
  function getSocial (button, target) {
    $(button).click(function () {
      $(target).toggleClass("show");
    });
  }
  getSocial(".header .get-social", ".header .social-items");

  function toggleMenu (action = 'open') {
    if (action == 'open') {
      $(".toggle-menu").addClass("show");
    }
    if (action == 'close') {
      $(".toggle-menu").removeClass("show");
    }
    return false;
  }

  $(".hamburger").click(function () {
    toggleMenu();
  });
  $(".toggle-menu__close").click(function () {
    toggleMenu('close');
  });

});