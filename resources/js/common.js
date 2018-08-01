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

	$(".pace-progress, .pace-activity").remove();

	// 파일명 삽입
	$(document).on('change', '.upload-hidden', function  () {
		var fileTarget = $('.upload-hidden');

		if(window.FileReader){  // modern browser
		  var filename = $(this)[0].files[0].name;
		} else {  // old IE
		  var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
		}
		
		// 추출한 파일명 삽입
		$(this).siblings('.upload-name').val(filename);
	});

	// tab 수정
	$("#tabs.ui-tabs > .ui-tabs-nav > li.ui-tabs-active:first-child > a").css('borderLeft','0');

	// 회원가입 관련
	$("#iframeCnt.membership").css('overflow','hidden');
	$("#iframeCnt.membership .jarviswidget > div").height(186);

	// 버튼 효과
	$("button[type='button']").on({
		"mousedown ":function  (e) {
			if ( $(this).css('position') == 'absolute' ) {
				$(this).css({'marginRight':'1px','marginTop':'1px'});
			} else {
				//$(this).css({'marginRight':'1px'});
			}
		},
		"mouseup":function  (e) {
			if ( $(this).css('position') == 'absolute' ) {
				$(this).css({'marginRight':'0px','marginTop':'0px'});
			} else {
				$(this).css({'marginRight':'0px'});
			}
		}
	});
	/* 레이어 팝업 */
	//$(".popup").addClass('draggable');			// 드래그 기능을 위한 클래스 삽입
	function setLayerPopup ( openBtn, layerId, closeBtn ) {
		$(openBtn).on("click",function  () {
			$(layerId).before('<div id="popupMask"></div>');
			$(layerId).css({ top:'45px' , left:'50px', display:'block' });

			$("#popupMask, "+layerId).fadeIn("fast").attr("tabIndex",0);
			$(layerId).focus();

			$(layerId).append('<a id="lastFocus" href=""></a>').find("#lastFocus").on("focus",function  () {
				$(layerId).focus();
			});
			
			$("#popupMask").on("focus",function  () {
				$(layerId).find(".close_btn").focus();
			});			
			
	
			$(closeBtn).on("click",function  () {
					$("#popupMask, "+layerId).fadeOut("fast",function  () {
						$(this).removeAttr("tabIndex");
						$("#popupMask").remove();
					})
				$(layerId).css('display','none');
			$(openBtn).focus();
				return false;
			});				
			

			/*
			$("#popupMask").on("click",function  () {
				$(closeBtn).click();
			});				
			*/


			return false;
		});
	}

	setLayerPopup("#openBtn1","#popupLayer1","#popupLayer1 .close_btn");
	setLayerPopup("#openBtn2","#popupLayer2","#popupLayer2 .close_btn");
	setLayerPopup("#openBtn3","#popupLayer3","#popupLayer3 .close_btn");
	setLayerPopup("#openBtn4","#popupLayer4","#popupLayer4 .close_btn");
	setLayerPopup("#openBtn5","#popupLayer5","#popupLayer5 .close_btn");

	$(window).on('resize',function  () {
		$("#header").width( $(window).width() ); 
		$("#main, #loginMain").height( $(window).height()-46 );
		$("#iframeCnt").height( $(window).height()-63 );
		$(".box_menu > div").height( $(window).height()-160 );/* 1_1 우측 콘텐츠 높이 */
		$(".table_st2").parent().parent().height( $(window).height()-160 );/* 1_1 좌측 콘텐츠 높이 */

		if ( $("#main").width() <= 980 ) {		// body 가로 스크롤 생성시
			$("#header").width( 1200 );
		}

		if ( $(".box_menu > div").height() < 289 || $(".table_st2").parent().parent().height() < 289 ) {	// 1_1 메뉴 관리 .. height 지정
			$(".box_menu > div").height(260);
			$(".table_st2").parent().parent().height(260);
		}

		if ( $(window).width() <= 900 ) {		// 로그인 영역
			$("#loginHeader, .login").width( 900 )
		} else {
			$("#loginHeader, .login").width( '100%' )
		}
		//$("#loginHeader, #loginMain").parent().css('min-width','900px');

		// 대시보드 차트 영역
		$("#tabs.ui-tabs .ui-tabs-panel").height( $(window).height() - 561 );
		if ( $("#tabs.ui-tabs .ui-tabs-panel").height() <= 230 ) {
			$("#tabs.ui-tabs .ui-tabs-panel").height( 230 )
		}				

		// pager 영역
		$(".ui-jqgrid .ui-pg-table").height( 32 );		// pager 높이
		$('.ui-jqgrid .ui-pg-table td').eq(1).width( $('.grid_area').width() / 3 );		// pager_center 너비

		// 회원가입
		$("#iframeCnt.membership").height( $("#iframeCnt.membership .login").height() );
	});
	$(window).trigger('resize');	

});
