$(document).ready(function (){
	// 동적으로 그리는 setting 삭제
	$(".demo").remove();

	// select, input 포커스
	$("select, input").on("focusout",function  () {
		$(this).css("borderColor","#bdbdbd");
	});

	$("select, input").on("focusin",function  () {
		$(this).css("borderColor","#f38a8a");
		if ( $(this).attr('readonly') ) {
			$(this).css("borderColor","#bdbdbd");
		}
	});

	$(".select > div").css('display','none');

	$(".select").on('focusin',function  () {
		$(this).children('div').css('display','block')
	});

	$(".select").on('focusout',function  () {
		$(this).children('div').css('display','none')
	});

	// 1_1 트리메뉴 클릭시
	$(".box_menu li li a.active").removeClass('active');

	$(".box_menu li li a").on('click',function  () {
		$(this).addClass('active').parent().children().removeClass('active');

		return false;
	});
	});
	$(".pace-progress, .pace-activity").remove();

	// 페이징 제어
	$(".ui-jqgrid .ui-jqgrid-pager").height( 30 );
	$(".ui-jqgrid-pager div > table td").eq(1).width('30%');;

// 높이 조절
$(document).ready(function (){
	$(window).on('resize',function  () {
		$("#main, #loginMain").height( $(window).height()-49 );
		$("#loginHeader, .login").width( '100%' );

		var btn_wid = $(".search_box").width();
		var lbl_wid = $(".search_box div > label:first-child").width();

		$(".search_box label.select, .search_box label.input").width( btn_wid-lbl_wid-14 );
	});
	$(window).trigger('resize');	
});

