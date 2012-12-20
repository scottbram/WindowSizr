//
// Standalone javascript that displays the window
// size in an unobtrusive manner and appends a
// description to the page title
// corresponding to the current width
// https://github.com/squarecat/WindowSizr
// http://twitter.com/sbram
//

var pageTitle = $('title').text();
function WindowSizr() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    $('#windowRes').html(windowWidth + ' x ' + windowHeight);
    if (windowWidth <= 703) {
        $('title').html(pageTitle + ' - Breakpoint 1');
    }
    else if (windowWidth > 703 && windowWidth < 959) {
        $('title').html(pageTitle + ' - Breakpoint 2');
    } else if (windowWidth >= 960) {
        $('title').html(pageTitle + ' - Breakpoint 3');
    }
}
$('body').append('<div id="clientDebug" style="position:fixed; right:10px; bottom:10px;'+
  							 'padding:2px 4px; border:1px solid silver;'+
								 'background-color:rgba(60,60,60,0.6); color:white;'+
								 'font:bold 10px sans-serif;'+
								 '-webkit-box-shadow: 2px 2px 3px rgba(30, 30, 30, 0.55);'+
								 '-moz-box-shadow:    2px 2px 3px rgba(30, 30, 30, 0.55);'+
								 'box-shadow:         2px 2px 3px rgba(30, 30, 30, 0.55);">'+
								 '<div id="WindowSizr"><span id="windowRes"></span></div>'+
								 '</div>');
WindowSizr();
$(window).resize( function(){
    WindowSizr();
});
