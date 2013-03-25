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
}
