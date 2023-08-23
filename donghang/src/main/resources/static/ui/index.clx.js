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
						window.location.href = "toBaordList.do";
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
			function onButtonClick2(e) {
				var button = e.control;
				window.location.href="register.do";													
			}

			/*
			 * "  로그인   " 버튼(login)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onLoginClick(e){
				window.location.href="login";
			}

			function onBodyLoad(e){
				var submission = app.lookup("sessioncheck");
				submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSms2SubmitSuccess(e){
				var sms2 = e.control;
				var login = app.lookup("login");
				var myPage = app.lookup("mypage");
				var helloWelcome = app.lookup("welcom");
				var register = app.lookup("btn_register");
				var output = app.lookup("whoName");
			//	var welcome2 = new cpr.controls.Output("welcom");
			//					welcome2.visible = true;
			//					welcome2.value = "";
			//					welcome2.style.css({
			//						"font-weight" : "bold",
			//						"font-size" : "1.15rem"
			//					});
			//					container.addChild(welcome2, {
			//						"top": "22px",
			//						"left": "1340px",
			//						"width": "158px",
			//						"height": "39px"
			//					});
			//	

			var responseText = sms2.xhr.responseText;
			var any = JSON.parse(responseText);
			console.log(any.loginSession.userName);
			if(any.loginSession.userName==""){
				onLoginClick();
				login.value="로그인";
			}else{
				output.value = any.loginSession.userName;
				register.visible=false;
				helloWelcome.visible=true;
				myPage.visible=true;
				login.value="로그아웃인가?";
			}

				
			}
			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onWhoSubmitSuccess(e){
				var who = e.control;
				console.log(app.lookup("dm1").getValue("userName"));
				var whoNm = app.lookup("whoName");
			//	var obj=JSON.parse(who.getResponseData("dm1"));
			//console.log(obj.whoName);
				app.lookup("whoName").redraw();
			}

			/*
			 * "  로그인   " 버튼(login)에서 value-change 이벤트 발생 시 호출.
			 * Button의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
			 */
			function onLoginValueChange(e){
				var login = e.control;
				var logout = app.lookup("login");
				var submission = app.lookup("logout");
				logout.addEventListener("click", function(e){
					submission.send();
				});
				
				
				
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSms3SubmitSuccess(e){
				var sms3 = e.control;
				var login = app.lookup("login");
				login.value="로그인";
				window.location.href="/";
			}

			/*
			 * "임시 회원탈퇴 버튼, 후에 마이페이지 내에 넣을 예정" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick3(e){
				var button = e.control;
				window.location.href="deleteMember.clx"
			}

			/*
			 * "회원정보 수정" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick4(e){
				var button = e.control;
				window.location.href="updateMember.clx"
			}

			/*
			 * "마이페이지" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick5(e){
				var button = e.control;
				window.location.href="myPage.clx"
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
			
			var dataSet_2 = new cpr.data.DataSet("loginSession");
			dataSet_2.parseData({
				"columns" : [
					{"name": "USER_ID"},
					{"name": "PASSWORD"},
					{"name": "ADDRESS"},
					{"name": "USER_TEL"},
					{"name": "userName"},
					{"name": "NICKNAME"}
				]
			});
			app.register(dataSet_2);
			var dataMap_1 = new cpr.data.DataMap("dm1");
			dataMap_1.parseData({
				"columns" : [{"name": "userName"}]
			});
			app.register(dataMap_1);
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
			
			var submission_2 = new cpr.protocols.Submission("sessioncheck");
			submission_2.action = "loginSessionMember";
			submission_2.addResponseData(dataSet_2, false);
			if(typeof onSms2SubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onSms2SubmitSuccess);
			}
			if(typeof onSessioncheckSubmitDone == "function") {
				submission_2.addEventListener("submit-done", onSessioncheckSubmitDone);
			}
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("logout");
			submission_3.action = "logoutMember";
			if(typeof onSms3SubmitSuccess == "function") {
				submission_3.addEventListener("submit-success", onSms3SubmitSuccess);
			}
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("who");
			submission_4.action = "whoName";
			submission_4.addResponseData(dataMap_1, false);
			if(typeof onWhoSubmitSuccess == "function") {
				submission_4.addEventListener("submit-success", onWhoSubmitSuccess);
			}
			if(typeof onWhoReceiveJson == "function") {
				submission_4.addEventListener("receive-json", onWhoReceiveJson);
			}
			app.register(submission_4);
			app.supportMedia("all and (min-width: 1980px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1979px)", "default");
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
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var group_2 = new cpr.controls.Container();
				var xYLayout_3 = new cpr.controls.layouts.XYLayout();
				group_2.setLayout(xYLayout_3);
				(function(container){
					var button_1 = new cpr.controls.Button("btn_register");
					button_1.value = "회원가입  ";
					button_1.style.css({
						"background-color" : "#FFFFFF",
						"border-right-style" : "none",
						"color" : "#4682A9",
						"border-left-style" : "none",
						"font-weight" : "bold",
						"font-size" : "1.15rem",
						"border-bottom-style" : "none",
						"background-image" : "none",
						"border-top-style" : "none"
					});
					if(typeof onButtonClick2 == "function") {
						button_1.addEventListener("click", onButtonClick2);
					}
					container.addChild(button_1, {
						"top": "19px",
						"left": "1819px",
						"width": "135px",
						"height": "44px"
					});
					var button_2 = new cpr.controls.Button("mypage");
					button_2.visible = false;
					button_2.value = " 마이페이지 ";
					button_2.style.css({
						"background-color" : "#FFFFFF",
						"border-right-style" : "none",
						"color" : "#4682A9",
						"border-left-style" : "none",
						"font-weight" : "bold",
						"font-size" : "1.15rem",
						"border-bottom-style" : "none",
						"background-image" : "none",
						"border-top-style" : "none"
					});
					if(typeof onButtonClick == "function") {
						button_2.addEventListener("click", onButtonClick);
					}
					container.addChild(button_2, {
						"top": "19px",
						"left": "1558px",
						"width": "157px",
						"height": "44px"
					});
					var button_3 = new cpr.controls.Button("login");
					button_3.value = "  로그인   ";
					button_3.style.css({
						"background-color" : "#FFFFFF",
						"border-right-style" : "none",
						"color" : "#4682A9",
						"border-left-style" : "none",
						"font-weight" : "bold",
						"font-size" : "1.15rem",
						"border-bottom-style" : "none",
						"background-image" : "none",
						"border-top-style" : "none"
					});
					if(typeof onLoginClick == "function") {
						button_3.addEventListener("click", onLoginClick);
					}
					if(typeof onLoginValueChange == "function") {
						button_3.addEventListener("value-change", onLoginValueChange);
					}
					container.addChild(button_3, {
						"top": "19px",
						"left": "1694px",
						"width": "135px",
						"height": "44px"
					});
					var output_1 = new cpr.controls.Output("welcom");
					output_1.visible = false;
					output_1.value = "님 환영합니다.";
					output_1.style.css({
						"font-weight" : "bold",
						"font-size" : "1.15rem"
					});
					if(typeof onWelcomValueChange == "function") {
						output_1.addEventListener("value-change", onWelcomValueChange);
					}
					container.addChild(output_1, {
						"top": "22px",
						"left": "1420px",
						"width": "158px",
						"height": "39px"
					});
					var button_4 = new cpr.controls.Button("temporary_btn");
					button_4.value = "임시 회원탈퇴 버튼, 후에 마이페이지 내에 넣을 예정";
					if(typeof onButtonClick3 == "function") {
						button_4.addEventListener("click", onButtonClick3);
					}
					container.addChild(button_4, {
						"top": "19px",
						"left": "762px",
						"width": "357px",
						"height": "45px"
					});
					var output_2 = new cpr.controls.Output("whoName");
					output_2.style.css({
						"font-weight" : "bold",
						"font-size" : "1.15rem",
						"text-align" : "center"
					});
					output_2.bind("value").toDataMap(app.lookup("dm1"), "userName");
					if(typeof onOutputValueChange == "function") {
						output_2.addEventListener("value-change", onOutputValueChange);
					}
					container.addChild(output_2, {
						"top": "19px",
						"left": "1302px",
						"width": "108px",
						"height": "46px"
					});
					var button_5 = new cpr.controls.Button();
					button_5.value = "회원정보 수정";
					if(typeof onButtonClick4 == "function") {
						button_5.addEventListener("click", onButtonClick4);
					}
					container.addChild(button_5, {
						"top": "22px",
						"left": "519px",
						"width": "139px",
						"height": "43px"
					});
					var button_6 = new cpr.controls.Button();
					button_6.value = "마이페이지";
					if(typeof onButtonClick5 == "function") {
						button_6.addEventListener("click", onButtonClick5);
					}
					container.addChild(button_6, {
						"top": "19px",
						"left": "304px",
						"width": "164px",
						"height": "44px"
					});
				})(group_2);
				if(typeof onGroupClick2 == "function") {
					group_2.addEventListener("click", onGroupClick2);
				}
				container.addChild(group_2, {
					"top": "0px",
					"right": "1092px",
					"left": "0px",
					"height": "74px"
				});
				var image_1 = new cpr.controls.Image();
				image_1.src = "theme/images/pivot/logodonghang .png";
				container.addChild(image_1, {
					"top": "73px",
					"left": "101px",
					"width": "170px",
					"height": "102px"
				});
				var image_2 = new cpr.controls.Image();
				image_2.src = "theme/images/pivot/back.jpg";
				container.addChild(image_2, {
					"top": "265px",
					"left": "359px",
					"width": "1444px",
					"height": "502px"
				});
				var navigationBar_1 = new cpr.controls.NavigationBar("nav1");
				navigationBar_1.barItemSpacing = 150;
				navigationBar_1.style.css({
					"border-right-style" : "none",
					"border-left-style" : "none",
					"font-weight" : "bold",
					"font-size" : "1.3rem",
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
				if(typeof onNav1SelectionChange == "function") {
					navigationBar_1.addEventListener("selection-change", onNav1SelectionChange);
				}
				container.addChild(navigationBar_1, {
					"top": "73px",
					"right": "1114px",
					"left": "594px",
					"height": "142px"
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "ITda";
				output_3.style.css({
					"color" : "#4682A9",
					"font-weight" : "bolder",
					"font-size" : "2rem"
				});
				container.addChild(output_3, {
					"top": "92px",
					"left": "288px",
					"width": "207px",
					"height": "44px"
				});
				var output_4 = new cpr.controls.Output();
				output_4.value = "Accompany";
				output_4.style.css({
					"color" : "#4682A9",
					"font-weight" : "bold",
					"font-size" : "1.6rem"
				});
				container.addChild(output_4, {
					"top": "134px",
					"left": "288px",
					"width": "296px",
					"height": "41px"
				});
			})(group_1);
			if(typeof onGroupClick == "function") {
				group_1.addEventListener("click", onGroupClick);
			}
			container.addChild(group_1, {
				"top": "-2px",
				"right": "20px",
				"bottom": "22px",
				"left": "20px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "index";
	cpr.core.Platform.INSTANCE.register(app);
})();
