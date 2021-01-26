<script>
var audio = new Audio("http://music.ogg" ) ;

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}

</script>

<input type="image" src="http://button.png" onclick="audio.play()">

