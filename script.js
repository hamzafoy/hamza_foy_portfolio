$("#horizontal_wrap").wrapInner("<table cellspacing='10'><tr>");
$(".segment").wrap("<td></td>");

var sections = document.querySelectorAll('section');
var x = screen.width;
var b = `${x.toString()}px`;
for (let i = 0; i < sections.length; i++) {
 let section = sections[i];
 section.style.width = b;
}
