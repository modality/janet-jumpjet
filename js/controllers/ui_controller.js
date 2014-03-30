var JJ = JJ || {};

JJ.UIController = function() {
  var $rules = $('.rules-module');
  
  for(key in JJ.ConstantsUI) {
    var html = [], $ui = $('<div></div>');

    $ui.addClass('constant');

    html.push('<label for="'+key+'">'+JJ.ConstantsUI[key].name+':</label>');
    html.push('<input type="number" step="1" name="'+key+'" value="'+JJ.Constants[key]+'"/>');

    $ui.html(html.join(''));

    $rules.append($ui);
  }

  $('.rules-module .constant input').on('change', function() {
    var constant = $(this).attr('name');
    JJ.Constants[constant] = parseFloat($(this).val());
  });

  $('.rules-module .constant label').on('click', function() {
    $(this).closest('.constant').find('input').focus();
  });

  var $palette = $('.palette-items');

  for(key in JJ.PaletteItems) {
    console.log("appendin");
    var $pitem = $('<div></div>'),
        $pimage = $('<div></div>');

    $pitem.addClass("palette-item");

    $pimage.addClass("image");
    $pimage.css("background", "url("+JJ.PaletteItems[key]+") no-repeat");

    $pitem.append($pimage);
    $palette.append($pitem);
  }

  $('.palette-item').on('click', function() {
    $('.palette-item').removeClass('selected');
    $(this).addClass('selected');
  });
}
