//JavaScript
	var audio;

$(document).ready(function(e){
	document.addEventListener("deviceready",function(e){
	
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('mario','audio/mario.mp3',function(msg){},function(msg){alert('error: '+msg);});
	
	
	$('#beep').bind("tap",function(e){
	navigator.notification.beep(3);
});

$('#vibrar').bind("tap",function(e){
	navigator.notification.vibrate(1000);
});

$('#play').bind("tap",function(e){
	audio.play('mario');
});
});
});//ready