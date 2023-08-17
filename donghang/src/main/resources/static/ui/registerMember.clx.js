/*
 * App URI: registerMember
 * Source Location: registerMember.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("registerMember", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * registerform.js
			 * Created at 2023. 8. 9. 오후 3:01:12.
			 *
			 * @author USER
			 ************************************************/

			/*
			 * "회원가입" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				var submission = app.lookup("sms1");
				submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSms1SubmitSuccess2(e){
				var sms1 = e.control;
				window.location.href="/";
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("dm1");
			dataMap_1.parseData({
				"columns" : [
					{
						"name": "userId",
						"dataType": "string",
						"info": ""
					},
					{"name": "password"},
					{
						"name": "address",
						"dataType": "string"
					},
					{"name": "userTel"},
					{"name": "userName"},
					{
						"name": "nickName",
						"dataType": "string"
					}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("sms1");
			submission_1.action = "registerMember";
			submission_1.addRequestData(dataMap_1);
			if(typeof onSms1SubmitSuccess2 == "function") {
				submission_1.addEventListener("submit-success", onSms1SubmitSuccess2);
			}
			app.register(submission_1);
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"color" : "#91C8E4",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var image_1 = new cpr.controls.Image();
			image_1.src = "theme/images/pivot/logodonghang .png";
			if(typeof onImageItemClick == "function") {
				image_1.addEventListener("item-click", onImageItemClick);
			}
			if(typeof onImageValueChange == "function") {
				image_1.addEventListener("value-change", onImageValueChange);
			}
			container.addChild(image_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "21px",
						"left": "43px",
						"width": "142px",
						"height": "146px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "21px",
						"left": "43px",
						"width": "142px",
						"height": "146px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "21px",
						"left": "21px",
						"width": "69px",
						"height": "146px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "21px",
						"left": "15px",
						"width": "49px",
						"height": "146px"
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
						"media": "all and (min-width: 1920px)",
						"top": "72px",
						"left": "214px",
						"width": "107px",
						"height": "44px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "72px",
						"left": "214px",
						"width": "107px",
						"height": "44px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "72px",
						"left": "104px",
						"width": "52px",
						"height": "44px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "72px",
						"left": "73px",
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
						"media": "all and (min-width: 1920px)",
						"top": "114px",
						"left": "214px",
						"width": "153px",
						"height": "41px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "114px",
						"left": "214px",
						"width": "153px",
						"height": "41px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "114px",
						"left": "104px",
						"width": "75px",
						"height": "41px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "114px",
						"left": "73px",
						"width": "52px",
						"height": "41px"
					}
				]
			});
			
			var group_1 = new cpr.controls.Container();
			var responsiveXYLayout_2 = new cpr.controls.layouts.ResponsiveXYLayout();
			group_1.setLayout(responsiveXYLayout_2);
			(function(container){
				var output_3 = new cpr.controls.Output();
				output_3.value = "회원가입";
				output_3.style.css({
					"font-weight" : "bold",
					"font-size" : "2.7rem",
					"font-style" : "normal"
				});
				container.addChild(output_3, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "299px",
							"left": "143px",
							"width": "179px",
							"height": "49px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "299px",
							"left": "143px",
							"width": "179px",
							"height": "49px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "299px",
							"left": "70px",
							"width": "87px",
							"height": "49px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "299px",
							"left": "49px",
							"width": "61px",
							"height": "49px"
						}
					]
				});
				var image_2 = new cpr.controls.Image();
				image_2.src = "theme/images/img/register_donghang.png";
				container.addChild(image_2, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "73px",
							"left": "110px",
							"width": "264px",
							"height": "160px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "73px",
							"left": "110px",
							"width": "264px",
							"height": "160px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "73px",
							"left": "54px",
							"width": "129px",
							"height": "160px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "73px",
							"left": "38px",
							"width": "90px",
							"height": "160px"
						}
					]
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "72px",
						"left": "878px",
						"width": "484px",
						"height": "389px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "72px",
						"left": "878px",
						"width": "484px",
						"height": "389px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "72px",
						"left": "429px",
						"width": "236px",
						"height": "389px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "72px",
						"left": "300px",
						"width": "165px",
						"height": "389px"
					}
				]
			});
			
			var group_2 = new cpr.controls.Container();
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "1px";
			formLayout_1.rightMargin = "1px";
			formLayout_1.bottomMargin = "1px";
			formLayout_1.leftMargin = "1px";
			formLayout_1.horizontalSpacing = "1px";
			formLayout_1.verticalSpacing = "1px";
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["50px", "50px", "50px", "50px", "50px", "50px", "50px", "20px"]);
			formLayout_1.setRowAutoSizing(0, true);
			group_2.setLayout(formLayout_1);
			(function(container){
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.placeholder = "유저 아이디";
				inputBox_1.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_1.bind("value").toDataMap(app.lookup("dm1"), "userId");
				container.addChild(inputBox_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb2");
				inputBox_2.secret = true;
				inputBox_2.placeholder = "비밀번호";
				inputBox_2.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_2.bind("value").toDataMap(app.lookup("dm1"), "password");
				container.addChild(inputBox_2, {
					"colIndex": 0,
					"rowIndex": 1
				});
				var inputBox_3 = new cpr.controls.InputBox("ipb3");
				inputBox_3.secret = true;
				inputBox_3.placeholder = "비밀번호";
				inputBox_3.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_3.bind("value").toDataMap(app.lookup("dm1"), "password");
				container.addChild(inputBox_3, {
					"colIndex": 0,
					"rowIndex": 2
				});
				var inputBox_4 = new cpr.controls.InputBox("ipb4");
				inputBox_4.placeholder = "주소";
				inputBox_4.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_4.bind("value").toDataMap(app.lookup("dm1"), "address");
				container.addChild(inputBox_4, {
					"colIndex": 0,
					"rowIndex": 3
				});
				var inputBox_5 = new cpr.controls.InputBox("ipb5");
				inputBox_5.placeholder = "성함";
				inputBox_5.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_5.bind("value").toDataMap(app.lookup("dm1"), "userName");
				container.addChild(inputBox_5, {
					"colIndex": 0,
					"rowIndex": 5
				});
				var inputBox_6 = new cpr.controls.InputBox("ipb6");
				inputBox_6.placeholder = "닉네임";
				inputBox_6.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_6.bind("value").toDataMap(app.lookup("dm1"), "nickName");
				container.addChild(inputBox_6, {
					"colIndex": 0,
					"rowIndex": 6
				});
				var maskEditor_1 = new cpr.controls.MaskEditor("mse1");
				maskEditor_1.mask = "(000)0000-0000";
				maskEditor_1.style.css({
					"font-size" : "1.2rem"
				});
				maskEditor_1.bind("value").toDataMap(app.lookup("dm1"), "userTel");
				container.addChild(maskEditor_1, {
					"colIndex": 0,
					"rowIndex": 4
				});
			})(group_2);
			container.addChild(group_2, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "471px",
						"left": "867px",
						"width": "495px",
						"height": "392px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "471px",
						"left": "867px",
						"width": "495px",
						"height": "392px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "471px",
						"left": "423px",
						"width": "242px",
						"height": "392px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "471px",
						"left": "296px",
						"width": "169px",
						"height": "392px"
					}
				]
			});
			
			var button_1 = new cpr.controls.Button();
			button_1.value = "회원가입";
			button_1.style.css({
				"font-weight" : "bold",
				"font-size" : "1.7rem"
			});
			if(typeof onButtonClick == "function") {
				button_1.addEventListener("click", onButtonClick);
			}
			container.addChild(button_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "905px",
						"left": "1029px",
						"width": "213px",
						"height": "79px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "905px",
						"left": "1029px",
						"width": "213px",
						"height": "79px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "905px",
						"left": "502px",
						"width": "104px",
						"height": "79px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "905px",
						"left": "352px",
						"width": "73px",
						"height": "79px"
					}
				]
			});
		}
	});
	app.title = "registerMember";
	cpr.core.Platform.INSTANCE.register(app);
})();
