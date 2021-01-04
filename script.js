$("#horizontal_wrap").wrapInner("<table cellspacing='10'><tr>");
$(".segment").wrap("<td></td>");

var sections = document.querySelectorAll('section');
var images = document.querySelectorAll('img');
var x = screen.width;
var b = `${x.toString()}px`;
for (let i = 0; i < sections.length; i++) {
 let section = sections[i];
 let image = images[0];
 image.style.width = b;
 section.style.width = b;
}