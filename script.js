var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {

  $('form').on('submit', function() {
  	var text = $("#todo").val(),
  		html = template(text);
    console.log(html);

    $('.list').append(html);
    $('#todo').val("");
    
    return false;  
  });
  // toggle star hover
  $('.list').on('click', 'glyphicon-star', function() {
  	$(this).toggleClass('active')
  }); 

  $('.list').on('click', '.glyphicon-remove', function() {
  	$(this).parent().remove();
  });
};

$(document).ready(main);