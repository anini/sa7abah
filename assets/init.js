$(document).ready(function(){
	$('#header').fadeIn(1500);
	$('#footer').fadeIn(1500);
	$('#bg').fadeIn(2000);
	setTimeout(function(){
		$('#face').css('top', '220px');
		$('#face').hover(function(){
			$('#face').addClass('blink');
			setTimeout(function(){
				$('#face').removeClass('blink');
			}, 200);
		});
		setInterval(function(){$('#face').trigger('mouseenter');}, 4500);
		setTimeout(function(){
			$('#dialog').fadeIn();
			setTimeout(function(){
				$('#dialog').html('اضغطني لتبدأ اللعبة');
				$('#face').attr('onclick', 'construct(); return false;');
			}, 2000);
		}, 500);
	}, 2500);
	var script=document.createElement('script'); script.type='text/javascript'; script.async=true;
	script.src='assets/main.js';
	var s=document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
});