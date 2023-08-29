/*
 * App URI: deleteMemberPopup
 * Source Location: deleteMemberPopup.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4640), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("deleteMemberPopup", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * loginMember.js
			 * Created at 2023. 8. 9. 오후 2:50:05.
			 *
			 * @author USER
			 ************************************************/

			/*
			 * "탈퇴하러 가기" 버튼(btn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnClick(e){
				var btn = e.control;
				var checkBox = app.lookup("cbx1");
				if(checkBox.checked==true){
					window.location.href="deleteMember.clx"
				}else{
					alert("회원탈퇴 안내에 동의하시면 네모박스에 체크해주세요.");
				}
			}

			/*
			 * 이미지에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onImageClick(e){
				var image = e.control;
				window.location.href="/"
			}

			/*
			 * "취소" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				window.location.href="/"
			};
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			group_1.style.css({
				"vertical-align" : "top",
				"text-align" : "left"
			});
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "\r\n [회원 탈퇴 약관]\r\n\r\n\r\n 회원 탈퇴 신청 전 안내 사항을 확인해주세요.\r\n 회원 탈퇴를 신청하면 현재 로그인된  아이디는 사용할 수 없습니다.\r\n 회원 탈퇴를 하시면 서비스 약관 및 개인정보 취급 방안에 따라 즉시 삭제됩니다.\r\n \r\n\r\n - 회원정보\r\n - 활동 및 기록 에 관한 기록";
				output_1.style.css({
					"border-right-style" : "solid",
					"border-bottom-color" : "#b3b3b3",
					"border-top-width" : "4px",
					"color" : "#898989",
					"border-right-width" : "4px",
					"font-weight" : "bold",
					"border-left-color" : "#b3b3b3",
					"vertical-align" : "top",
					"font-size" : "1.1rem",
					"border-right-color" : "#b3b3b3",
					"border-left-width" : "4px",
					"border-top-style" : "solid",
					"border-radius" : "0.7rem",
					"border-left-style" : "solid",
					"border-bottom-width" : "4px",
					"border-top-color" : "#b3b3b3",
					"border-bottom-style" : "solid",
					"text-align" : "left"
				});
				if(typeof onOutputValueChange == "function") {
					output_1.addEventListener("value-change", onOutputValueChange);
				}
				container.addChild(output_1, {
					"top": "304px",
					"left": "444px",
					"width": "759px",
					"height": "275px"
				});
				var checkBox_1 = new cpr.controls.CheckBox("cbx1");
				checkBox_1.value = "";
				checkBox_1.text = "  위 안내 사항을 모두 확인하였으며 , 이에 동의합니다.";
				checkBox_1.style.css({
					"font-weight" : "bold",
					"font-size" : "1.1rem"
				});
				container.addChild(checkBox_1, {
					"top": "588px",
					"left": "719px",
					"width": "484px",
					"height": "32px"
				});
				var image_1 = new cpr.controls.Image();
				image_1.src = "theme/images/img/warning2_donghang.png";
				container.addChild(image_1, {
					"top": "142px",
					"left": "348px",
					"width": "72px",
					"height": "65px"
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "회원정보 탈퇴 ";
				output_2.style.css({
					"font-weight" : "bold",
					"font-size" : "2.5rem"
				});
				container.addChild(output_2, {
					"top": "142px",
					"left": "434px",
					"width": "364px",
					"height": "65px"
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "회원정보 탈퇴 안내";
				output_3.style.css({
					"font-weight" : "bolder",
					"font-size" : "1.7rem"
				});
				container.addChild(output_3, {
					"top": "252px",
					"left": "444px",
					"width": "350px",
					"height": "42px"
				});
				var output_4 = new cpr.controls.Output();
				output_4.value = "ITda";
				output_4.style.css({
					"color" : "#262626",
					"font-weight" : "bolder",
					"font-size" : "1.5rem"
				});
				container.addChild(output_4, {
					"top": "30px",
					"left": "135px",
					"width": "87px",
					"height": "44px"
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "Accompany";
				output_5.style.css({
					"color" : "black",
					"font-weight" : "bold",
					"font-size" : "1.3rem"
				});
				container.addChild(output_5, {
					"top": "73px",
					"left": "135px",
					"width": "160px",
					"height": "41px"
				});
				var image_2 = new cpr.controls.Image();
				image_2.src = "theme/images/img/logo2_donghang.png";
				if(typeof onImageValueChange == "function") {
					image_2.addEventListener("value-change", onImageValueChange);
				}
				if(typeof onImageClick == "function") {
					image_2.addEventListener("click", onImageClick);
				}
				container.addChild(image_2, {
					"top": "10px",
					"left": "10px",
					"width": "115px",
					"height": "94px"
				});
				var button_1 = new cpr.controls.Button("btn");
				button_1.value = "탈퇴하러 가기";
				button_1.style.css({
					"background-color" : "#E01D5C",
					"color" : "#FFFFFF",
					"font-weight" : "bold",
					"background-image" : "none"
				});
				if(typeof onBtnClick == "function") {
					button_1.addEventListener("click", onBtnClick);
				}
				container.addChild(button_1, {
					"top": "646px",
					"left": "890px",
					"width": "147px",
					"height": "43px"
				});
				var output_6 = new cpr.controls.Output();
				output_6.value = "ITda Accompany    |";
				output_6.style.css({
					"color" : "#EBA5BF",
					"font-weight" : "normal",
					"font-size" : "1rem",
					"text-align" : "left"
				});
				container.addChild(output_6, {
					"top": "882px",
					"left": "719px",
					"width": "162px",
					"height": "21px"
				});
				var output_7 = new cpr.controls.Output();
				output_7.value = "고객센터 : 010-8299-1244";
				output_7.style.css({
					"color" : "#6F6F6F",
					"font-weight" : "normal",
					"font-size" : "1rem",
					"text-align" : "left"
				});
				container.addChild(output_7, {
					"top": "882px",
					"left": "882px",
					"width": "200px",
					"height": "21px"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "취소";
				button_2.style.css({
					"background-color" : "#E9E9E9",
					"color" : "#383838",
					"font-weight" : "bold",
					"font-size" : "14px",
					"background-image" : "none"
				});
				if(typeof onButtonClick == "function") {
					button_2.addEventListener("click", onButtonClick);
				}
				container.addChild(button_2, {
					"top": "647px",
					"left": "1047px",
					"width": "145px",
					"height": "42px"
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "0px",
						"left": "0px",
						"width": "3563px",
						"height": "1077px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "0px",
						"left": "0px",
						"width": "1900px",
						"height": "1077px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "0px",
						"left": "0px",
						"width": "928px",
						"height": "1077px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "0px",
						"left": "0px",
						"width": "649px",
						"height": "1077px"
					}
				]
			});
		}
	});
	app.title = "deleteMemberPopup";
	cpr.core.Platform.INSTANCE.register(app);
})();
