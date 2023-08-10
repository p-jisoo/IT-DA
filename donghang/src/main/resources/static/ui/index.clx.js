/*
 * App URI: index
 * Source Location: index.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("index", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * index.js
			 * Created at 2023. 8. 9. 오전 10:46:05.
			 *
			 * @author USER
			 ************************************************/
			/*
			 * 내비게이션 바에서 item-click 이벤트 발생 시 호출.
			 * 아이템 클릭시 발생하는 이벤트.
			 */
			function onNav1ItemClick(e) {
				var nav1 = e.control;
				var submission = app.lookup("sms1");
				var navigationBar = app.lookup("nav1");
				var count = navigationBar.getSelectedIndices().toString()
				submission.setParameters("menu", count);
				submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSms1SubmitSuccess2(e) {
				var sms1 = e.control;
				console.log(sms1.getParameters("menu")); 
				var number = sms1.getParameters("menu").toString();
				//	if(number=="0"){
				//		window.location.href="/";
				switch (number) {
					case "0":
						window.location.href = "/";
						break;
					case "1":
						window.location.href = "showmeapply.do";
						break;
					case "2":
						window.location.href = "showmeapply.do";
						break;
					case "3":
						window.location.href = "showmeapply.do";
						break;
				}
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({
				"columns": [
					{"name": "labal"},
					{"name": "value"}
				],
				"rows": [
					{"labal": "HOME", "value": "value1"},
					{"labal": "교육신청", "value": "value2"},
					{"labal": "자료", "value": "value3"},
					{"labal": "봉사참여", "value": "value4"}
				]
			});
			app.register(dataSet_1);
			var submission_1 = new cpr.protocols.Submission("sms1");
			submission_1.async = true;
			submission_1.action = "apply.do";
			if(typeof onSms1ReceiveJson == "function") {
				submission_1.addEventListener("receive-json", onSms1ReceiveJson);
			}
			if(typeof onSms1SubmitSuccess2 == "function") {
				submission_1.addEventListener("submit-success", onSms1SubmitSuccess2);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("sms2");
			submission_2.action = "apply.do";
			if(typeof onSms2SubmitSuccess2 == "function") {
				submission_2.addEventListener("submit-success", onSms2SubmitSuccess2);
			}
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("sms3");
			if(typeof onSms3SubmitSuccess == "function") {
				submission_3.addEventListener("submit-success", onSms3SubmitSuccess);
			}
			app.register(submission_3);
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			group_1.setLayout(responsiveXYLayout_1);
			(function(container){
				var group_2 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				group_2.setLayout(xYLayout_2);
				(function(container){
					var button_1 = new cpr.controls.Button();
					button_1.value = "  로그인   ";
					button_1.style.css({
						"background-color" : "#FFFFFF",
						"border-right-style" : "none",
						"color" : "#4682A9",
						"border-left-style" : "none",
						"font-weight" : "bold",
						"border-bottom-style" : "none",
						"border-top-style" : "none"
					});
					container.addChild(button_1, {
						"top": "20px",
						"left": "1372px",
						"width": "70px",
						"height": "44px"
					});
					var button_2 = new cpr.controls.Button();
					button_2.value = "회원가입  ";
					button_2.style.css({
						"background-color" : "#FFFFFF",
						"border-right-style" : "none",
						"color" : "#4682A9",
						"border-left-style" : "none",
						"font-weight" : "bold",
						"border-bottom-style" : "none",
						"border-top-style" : "none"
					});
					if(typeof onButtonClick == "function") {
						button_2.addEventListener("click", onButtonClick);
					}
					container.addChild(button_2, {
						"top": "20px",
						"left": "1441px",
						"width": "107px",
						"height": "44px"
					});
					var button_3 = new cpr.controls.Button();
					button_3.value = " 마이페이지 ";
					button_3.style.css({
						"background-color" : "#FFFFFF",
						"border-right-style" : "none",
						"color" : "#4682A9",
						"border-left-style" : "none",
						"font-weight" : "bold",
						"border-bottom-style" : "none",
						"border-top-style" : "none"
					});
					container.addChild(button_3, {
						"top": "20px",
						"left": "1269px",
						"width": "104px",
						"height": "44px"
					});
				})(group_2);
				container.addChild(group_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "0px",
							"right": "0px",
							"left": "0px",
							"height": "74px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "0px",
							"right": "0px",
							"left": "0px",
							"height": "74px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "0px",
							"right": "0px",
							"left": "0px",
							"height": "74px"
						}
					]
				});
				var image_1 = new cpr.controls.Image();
				image_1.src = "theme/images/pivot/logodonghang .png";
				container.addChild(image_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "83px",
							"left": "172px",
							"width": "88px",
							"height": "102px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "83px",
							"left": "84px",
							"width": "43px",
							"height": "102px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "83px",
							"left": "59px",
							"width": "30px",
							"height": "102px"
						}
					]
				});
				var image_2 = new cpr.controls.Image();
				image_2.src = "theme/images/pivot/back.jpg";
				container.addChild(image_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "251px",
							"left": "269px",
							"width": "1127px",
							"height": "606px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "251px",
							"left": "131px",
							"width": "550px",
							"height": "606px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "251px",
							"left": "92px",
							"width": "385px",
							"height": "606px"
						}
					]
				});
				var textArea_1 = new cpr.controls.TextArea("txa1");
				textArea_1.value = "IT다";
				textArea_1.style.css({
					"background-color" : "#FFFFFF",
					"border-right-style" : "none",
					"color" : "#4682A9",
					"white-space" : "normal",
					"border-left-style" : "none",
					"font-weight" : "bold",
					"font-size" : "1.8rem",
					"border-bottom-style" : "none",
					"border-top-style" : "none"
				});
				container.addChild(textArea_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "103px",
							"left": "269px",
							"width": "140px",
							"height": "61px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "103px",
							"left": "131px",
							"width": "68px",
							"height": "61px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "103px",
							"left": "92px",
							"width": "48px",
							"height": "61px"
						}
					]
				});
				var textArea_2 = new cpr.controls.TextArea("txa2");
				textArea_2.value = "Accompany";
				textArea_2.style.css({
					"background-color" : "#FFFFFF",
					"border-right-style" : "none",
					"color" : "#4682A9",
					"white-space" : "normal",
					"border-left-style" : "none",
					"font-weight" : "bold",
					"font-size" : "1.3rem",
					"border-bottom-style" : "none",
					"border-top-style" : "none"
				});
				container.addChild(textArea_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "153px",
							"left": "269px",
							"width": "183px",
							"height": "50px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "153px",
							"left": "131px",
							"width": "89px",
							"height": "50px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "153px",
							"left": "92px",
							"width": "63px",
							"height": "50px"
						}
					]
				});
				var navigationBar_1 = new cpr.controls.NavigationBar("nav1");
				navigationBar_1.barItemSpacing = 150;
				navigationBar_1.style.css({
					"border-right-style" : "none",
					"border-left-style" : "none",
					"font-weight" : "bold",
					"font-size" : "1.7rem",
					"border-bottom-style" : "none",
					"border-top-style" : "none"
				});
				(function(navigationBar_1){
					navigationBar_1.setItemSet(app.lookup("ds1"), {
						"label": "labal",
						"value": "value"
					});
				})(navigationBar_1);
				if(typeof onNav1ItemClick == "function") {
					navigationBar_1.addEventListener("item-click", onNav1ItemClick);
				}
				if(typeof onNav1SelectionChange == "function") {
					navigationBar_1.addEventListener("selection-change", onNav1SelectionChange);
				}
				if(typeof onNav1Click2 == "function") {
					navigationBar_1.addEventListener("click", onNav1Click2);
				}
				container.addChild(navigationBar_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "84px",
							"left": "540px",
							"width": "1133px",
							"height": "142px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "84px",
							"left": "264px",
							"width": "553px",
							"height": "142px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "84px",
							"left": "185px",
							"width": "387px",
							"height": "142px"
						}
					]
				});
			})(group_1);
			if(typeof onGroupClick == "function") {
				group_1.addEventListener("click", onGroupClick);
			}
			container.addChild(group_1, {
				"top": "0px",
				"right": "-1080px",
				"bottom": "-1980px",
				"left": "0px"
			});
		}
	});
	app.title = "index";
	cpr.core.Platform.INSTANCE.register(app);
})();
