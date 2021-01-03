$("#horizontal_wrap").wrapInner("<table cellspacing='10'><tr>");
$(".segment").wrap("<td></td>");

var section = document.querySelectorAll('section');
var x = screen.width;
var b = x.toString();
b += 'px';
section[0].style.width = 'b';
console.log(b);