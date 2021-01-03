$("#horizontal_wrap").wrapInner("<table cellspacing='10'><tr>");
$(".segment").wrap("<td></td>");

var section = document.querySelectorAll('section');
var x = screen.width;
var b = `${x.toString()}px`;
section[0].style.width = b;