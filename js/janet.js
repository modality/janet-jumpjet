var JJ = JJ || {};

$(function() {
  JJ.Main = (function() {
    var game_controller, ui_controller;

    function init() {
      game_controller = new JJ.GameController();
      ui_controller = new JJ.UIController();
    }

    function changeGameMode(mode) {
      game_controller.changeGameMode(mode);

      if(mode == 'rules') {
        $('.rules-module').show();
        $('.game-module').hide();
      } else {
        $('.game-module').show();
        $('.rules-module').hide();
      }
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

