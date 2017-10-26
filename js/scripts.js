//Arctext
setArcText($(window).width());

$(window).resize(function() {
   setArcText($(window).width());
});

//Media Element Player
$('video').mediaelementplayer();

function setArcText(radius) {
   console.log(radius);
   $('#curved-trailer').replaceWith($('<h1 id="curved-trailer">MOVIE TRAILER</h1>'));
   
   $('#curved-trailer').fitText(2.5);
   $('#curved-trailer').arctext({
      radius: radius/2
   });
}