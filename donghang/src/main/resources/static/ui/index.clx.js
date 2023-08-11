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

			/*
			 * "회원가입  " 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e){
				var button = e.control;
			};
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
			submission_1.action = "apply";
			if(typeof onSms1ReceiveJson == "function") {
				submission_1.addEventListener("receive-json", onSms1ReceiveJson);
			}
			if(typeof onSms1SubmitSuccess2 == "function") {
				submission_1.addEventListener("submit-success", onSms1SubmitSuccess2);
			}
			app.register(submission_1);
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
					if(typeof onButtonClick2 == "function") {
						button_2.addEventListener("click", onButtonClick2);
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
							"top": "289px",
							"left": "230px",
							"width": "1127px",
							"height": "606px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "289px",
							"left": "112px",
							"width": "550px",
							"height": "606px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "289px",
							"left": "79px",
							"width": "385px",
							"height": "606px"
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
				if(typeof onNav1Click2 == "function") {
					navigationBar_1.addEventListener("click", onNav1Click2);
				}
				if(typeof onNav1SelectionChange2 == "function") {
					navigationBar_1.addEventListener("selection-change", onNav1SelectionChange2);
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
				var output_1 = new cpr.controls.Output();
				output_1.value = "ITda";
				output_1.style.css({
					"color" : "#4682A9",
					"font-weight" : "bolder",
					"font-size" : "2rem"
				});
				container.addChild(output_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "102px",
							"left": "269px",
							"width": "107px",
							"height": "44px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "102px",
							"left": "131px",
							"width": "52px",
							"height": "44px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "102px",
							"left": "92px",
							"width": "37px",
							"height": "44px"
						}
					]
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "Accompany";
				output_2.style.css({
					"color" : "#4682A9",
					"font-weight" : "bold",
					"font-size" : "1.6rem"
				});
				container.addChild(output_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "144px",
							"left": "269px",
							"width": "153px",
							"height": "41px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "144px",
							"left": "131px",
							"width": "75px",
							"height": "41px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "144px",
							"left": "92px",
							"width": "52px",
							"height": "41px"
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
