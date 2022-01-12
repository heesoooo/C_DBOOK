var _ModalPopupBackgroundID = 'modal';
var adminDbook = adminDbook || {};

adminDbook = {
	init: function () {
		//this.loadTimeOut = function() {};
		//this.fileRegist = 0;
		adminDbook.lnbHeight();
		adminDbook.lnbDepth3();
		adminDbook.datailInfo();
		adminDbook.datepicker();
		adminDbook.btnClickPopupShow();
	},

	// show pop
	ShowModalPopup : function(modalPopupID) {
		var popupID = "#" + modalPopupID;

		var className = {
			popupMarginTop: $(popupID).height() / 2,
			popupMarginLeft: $(popupID).width() / 2,
			backgroundSelector: $('<div id="' + _ModalPopupBackgroundID + '" ></div>'),
			popupClose: $(".popup").find(".close")
		}

		$('body').css('overflow', 'hidden');
		$(popupID).css({
			'left': '50%',
			'top': '50%',
			'margin-top': -className.popupMarginTop,
			'margin-left': -className.popupMarginLeft,
			'display': 'block',
			'position': 'fixed',
			'z-index': 99999
		});
	
		className.backgroundSelector.appendTo('body');	
		className.backgroundSelector.css({
			'width': "100%",
			'height': "100%",
			'display': 'none',
			'background-color': '#000',
			'filter':'alpha(opacity=50)',
			'position': 'fixed',
			'top': 0,
			'left': 0,
			'z-index': 99998
		});
	
		className.backgroundSelector.fadeTo('fast', 0.8);
		className.popupClose.click(function(){adminDbook.HideModalPopup(modalPopupID)});
		className.backgroundSelector.click(function(){adminDbook.HideModalPopup(modalPopupID)});	
	},

	// hide pop
	HideModalPopup: function(modalPopupID) {
		$("#" + modalPopupID).css('display', 'none');
		$("#" + _ModalPopupBackgroundID).remove();
		$('body').css('overflow', 'auto');
	},

	// click pop open
	btnClickPopupShow: function() {
		$("[data-target]").on("click", function(e){
			e.preventDefault();
			var target = $(this).attr("data-target");
			adminDbook.ShowModalPopup(target);
		})
	},

	// lnbHeight
	lnbHeight: function () {
		var contentHeight = $("#content").outerHeight();
		$('.lnb, .menu_tree').css("height", contentHeight);
	},

	//lnb 3depth
	lnbDepth3 : function() {
		var className = {
			lnbItem : $(".lnb li>a"),
			menuTree : $(".menu_tree")
		}
		className.lnbItem.on("click", function(e){
			e.preventDefault();
			if($(this).next(".depth_3").length > 0){
				$(this).parent().toggleClass("active");
				$(this).next("ul").slideToggle(200);
			}
			if($(this).next("ul").hasClass("menu_tree")){
				$(this).next().show().parent().siblings().find(className.menuTree).hide();
				$(this).closest(".lnb").next("#content").css("width", 900);
			} else {
				$(className.menuTree).hide(); 
				$("#content").css("width", 1080);
			}
		});
	},

	// datail info
	datailInfo: function () {			
		$("[data-key=detail]").on("click", function(e){
			e.preventDefault();
			$(this).parent().next('.search_detail_area').slideToggle(200);
			$(this).text( $(this).text() == '상세 ▼' ? "상세 ▲" : "상세 ▼");
		});
	},

	//datepicker
	datepicker: function () {
		var className = {
			datepickerInput: $(".form_control_datepicker>input")
		}
		className.datepickerInput.datepicker({
			showOn: "both",
			buttonImage: "../images/datepicker.png",
			buttonImageOnly: true,
			dateFormat: 'yy.mm.dd',
			dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
			dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], 
			monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
		});
	}
};

$(function(){
	adminDbook.init();
})