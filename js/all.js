$(document).ready(function(){
	$('.showmenu').on('click',function(e){
		e.preventDefault();
		$('body').toggleClass('menu-show');
		$('.line1,.line2,.text').toggleClass('active');
		  });
	})

$(document).ready(function () {
	var showSkill = false;
	$('.scrollTop,.m-menu-link').click(function (event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var targetPos = $(target).offset().top;
		$('html, body').animate({ scrollTop: targetPos }, 1000);
	});
});
$(document).ready(function () {
	//carousel options
	$('#quote-carousel').carousel({
		pause: true, interval: 3000,
	});
});
$(window).scroll(function () {
	var windowHeight = $(window).height();
	var scrollPos = $(window).scrollTop();
	showSkill = false;
	var skillTop = $('#skill').position().top;
	if (skillTop <= (scrollPos + windowHeight / 2)) {
		$('#skill .progress-bar').each(function () {
			var thisValue = $(this).data('progress');
			$(this).css('width', thisValue + '%');
		});
	}
	var aboutTop = $('#about').position().top;
	if (aboutTop <= (scrollPos + windowHeight / 2)) {
		$('.img-bar').addClass('active');
	};
})
$('.contact_w2').hover(function(){
	$('.mail_icon').toggleClass('fa-envelope-open');
	$('.mail_icon').toggleClass('bounceIn')
})
$('.contact_w3').hover(function(){
	$('.phone_icon').toggleClass('tada');
})
var typed = new Typed('.element', {
	strings: ["If a thing is worth doing it is worth doing well", "Where there is a will ,there is a way"], //输入内容, 支持html标签
	typeSpeed: 100,
	backSpeed: 50,
	loop: true
});
wow = new WOW({
	animateClass: 'animated',
});
wow.init();

$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus')
  })


