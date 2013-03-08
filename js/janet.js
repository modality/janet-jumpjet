var JJ = JJ || {};

$(function() {
  JJ.Main = (function() {
    var controller;

    function init() {
      controller = new JJ.GameController();
    }

    function changeGameMode(mode) {
      controller.changeGameMode(mode);
    }

    return {
      init: init,
      changeGameMode: changeGameMode
    };
  })();

  $('.menu li').on('click', function() {
    $('.menu li').removeClass('active');
    JJ.Main.changeGameMode($(this).attr('class'));
    $(this).addClass('active'); 
  });

  JJ.Main.init();
});

