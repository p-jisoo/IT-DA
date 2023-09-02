/*
 * App URI: loginMember
 * Source Location: loginMember.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4640), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("loginMember", { 
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
			 * "로그인" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				var submission = app.lookup("sms1");	
				var id = app.lookup("ipb1");
				var pwd = app.lookup("ipb2");
					if(id.length==0){
						alert("아이디를 입력하세요")
						return false;
					}
					if(pwd.length==0){
						alert("비밀번호를 입력하세요");
						return false;
					}
					submission.send();
					}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSms1SubmitSuccess(e){
				var sms1 = e.control;
				var responseText = sms1.xhr.responseText;
				var any = JSON.parse(responseText);
				console.log(any.result);
				if(any.result=="success"){
				window.location.href="/"		
				}else if(any.result=="fail"){
					app.openDialog("loginfail", {
						width : 500, 
						height : 350,
						headerVisible:false
					}, function(dialog){
						dialog.ready(function(dialogApp){
						dialog.addEventListener("click", function(e){
						
						});
						});
					}).then(function(returnValue){
						;
					});
					
				}
			}

			/*
			 * "회원가입" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e){
				var button = e.control;
				window.location.href="registerMember.clx";
			}
				

			/*
			 * 이미지에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onImgHomeClick(e){
				var imgHome = e.control;
				var img = app.lookup("imgHome");
				window.location.href="/";
			}

			/*
			 * "아이디 찾기" 아웃풋에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onOutputClick(e){
				var output = e.control;
				window.location.href="findId.clx"
				
			}


			/*
			 * "/ 비밀번호 찾기" 아웃풋에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onOutputClick2(e){
				var output = e.control;
				window.location.href="selectPassword.clx"
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds_member");
			dataSet_1.parseData({
				"columns" : [
					{"name": "USER_ID"},
					{"name": "PASSWORD"},
					{"name": "ADDRESS"},
					{"name": "USER_TEL"},
					{"name": "USER_NAME"},
					{"name": "NICKNAME"}
				]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("dm1");
			dataMap_1.parseData({
				"columns" : [
					{
						"name": "user_id",
						"dataType": "string"
					},
					{"name": "password"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("sms1");
			submission_1.action = "loginMember";
			submission_1.addRequestData(dataMap_1);
			submission_1.addResponseData(dataSet_1, false);
			if(typeof onSms1SubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onSms1SubmitSuccess);
			}
			if(typeof onSms1SubmitError == "function") {
				submission_1.addEventListener("submit-error", onSms1SubmitError);
			}
			app.register(submission_1);
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
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var image_1 = new cpr.controls.Image("imgHome");
				image_1.src = "theme/images/img/logo2_donghang.png";
				if(typeof onImageValueChange == "function") {
					image_1.addEventListener("value-change", onImageValueChange);
				}
				if(typeof onImgHomeClick == "function") {
					image_1.addEventListener("click", onImgHomeClick);
				}
				container.addChild(image_1, {
					"top": "31px",
					"left": "306px",
					"width": "206px",
					"height": "191px"
				});
				var output_1 = new cpr.controls.Output();
				output_1.value = "ITda Accompany";
				output_1.style.css({
					"font-weight" : "bold",
					"font-size" : "2rem",
					"font-style" : "normal",
					"text-align" : "center"
				});
				container.addChild(output_1, {
					"top": "232px",
					"left": "252px",
					"width": "325px",
					"height": "46px"
				});
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.placeholder = "아이디를 입력하세요.";
				inputBox_1.style.css({
					"border-radius" : "0.6rem",
					"border-bottom-color" : "#acacac",
					"border-left-color" : "#acacac",
					"border-top-color" : "#acacac",
					"border-right-color" : "#acacac"
				});
				inputBox_1.bind("value").toDataMap(app.lookup("dm1"), "user_id");
				container.addChild(inputBox_1, {
					"top": "376px",
					"left": "263px",
					"width": "314px",
					"height": "61px"
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb2");
				inputBox_2.secret = true;
				inputBox_2.placeholder = "비밀번호를 입력하세요.";
				inputBox_2.style.css({
					"border-radius" : "0.6rem",
					"border-bottom-color" : "#acacac",
					"border-left-color" : "#acacac",
					"border-top-color" : "#acacac",
					"border-right-color" : "#acacac"
				});
				inputBox_2.bind("value").toDataMap(app.lookup("dm1"), "password");
				container.addChild(inputBox_2, {
					"top": "448px",
					"left": "263px",
					"width": "313px",
					"height": "61px"
				});
				var button_1 = new cpr.controls.Button();
				button_1.value = "로그인";
				button_1.style.css({
					"font-weight" : "bold",
					"text-align" : "center"
				});
				button_1.style.icon.css({
					"padding-top" : "0px"
				});
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"top": "549px",
					"left": "263px",
					"width": "145px",
					"height": "33px"
				});
				var group_2 = new cpr.controls.Container();
				group_2.style.css({
					"background-color" : "#ACACAC"
				});
				var xYLayout_3 = new cpr.controls.layouts.XYLayout();
				group_2.setLayout(xYLayout_3);
				container.addChild(group_2, {
					"top": "343px",
					"left": "221px",
					"width": "400px",
					"height": "2px"
				});
				var group_3 = new cpr.controls.Container();
				group_3.style.css({
					"background-color" : "#ACACAC"
				});
				var xYLayout_4 = new cpr.controls.layouts.XYLayout();
				group_3.setLayout(xYLayout_4);
				container.addChild(group_3, {
					"top": "613px",
					"left": "221px",
					"width": "400px",
					"height": "2px"
				});
				var group_4 = new cpr.controls.Container();
				group_4.style.css({
					"background-color" : "#ACACAC",
					"background-image" : "none"
				});
				var xYLayout_5 = new cpr.controls.layouts.XYLayout();
				group_4.setLayout(xYLayout_5);
				container.addChild(group_4, {
					"top": "344px",
					"left": "221px",
					"width": "2px",
					"height": "270px"
				});
				var group_5 = new cpr.controls.Container();
				group_5.style.css({
					"background-color" : "#ACACAC",
					"background-image" : "none"
				});
				var xYLayout_6 = new cpr.controls.layouts.XYLayout();
				group_5.setLayout(xYLayout_6);
				container.addChild(group_5, {
					"top": "344px",
					"left": "619px",
					"width": "2px",
					"height": "270px"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "회원가입";
				button_2.style.css({
					"font-weight" : "bold",
					"text-align" : "center"
				});
				button_2.style.icon.css({
					"padding-top" : "0px"
				});
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					"top": "549px",
					"left": "436px",
					"width": "145px",
					"height": "33px"
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "아이디가 기억나지 않는다면?";
				output_2.style.css({
					"color" : "#A7A7A7",
					"font-weight" : "normal",
					"font-size" : "1rem"
				});
				container.addChild(output_2, {
					"top": "692px",
					"left": "205px",
					"width": "234px",
					"height": "45px"
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "아이디 찾기";
				output_3.style.css({
					"color" : "#4682A9",
					"font-weight" : "bold",
					"font-size" : "1rem"
				});
				if(typeof onOutputClick == "function") {
					output_3.addEventListener("click", onOutputClick);
				}
				container.addChild(output_3, {
					"top": "692px",
					"left": "430px",
					"width": "96px",
					"height": "45px"
				});
				var output_4 = new cpr.controls.Output();
				output_4.value = "ITda Accompany";
				output_4.style.css({
					"color" : "#91C8E4",
					"font-weight" : "normal",
					"font-size" : "1rem",
					"text-align" : "left"
				});
				container.addChild(output_4, {
					"top": "747px",
					"left": "252px",
					"width": "139px",
					"height": "21px"
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "고객센터 : 010-8299-1244";
				output_5.style.css({
					"color" : "#6F6F6F",
					"font-weight" : "normal",
					"font-size" : "1rem",
					"text-align" : "left"
				});
				container.addChild(output_5, {
					"top": "747px",
					"left": "409px",
					"width": "200px",
					"height": "21px"
				});
				var output_6 = new cpr.controls.Output();
				output_6.value = "디지털 약자를 위한 교육 서비스 플랫폼";
				output_6.style.css({
					"font-weight" : "bold",
					"font-size" : "1rem",
					"text-align" : "center"
				});
				container.addChild(output_6, {
					"top": "288px",
					"left": "221px",
					"width": "387px",
					"height": "33px"
				});
				var output_7 = new cpr.controls.Output();
				output_7.value = "/   비밀번호 찾기";
				output_7.style.css({
					"color" : "#4682A9",
					"font-weight" : "bold",
					"font-size" : "1rem"
				});
				if(typeof onOutputClick2 == "function") {
					output_7.addEventListener("click", onOutputClick2);
				}
				container.addChild(output_7, {
					"top": "692px",
					"left": "525px",
					"width": "139px",
					"height": "45px"
				});
				var output_8 = new cpr.controls.Output();
				output_8.value = "|";
				output_8.style.css({
					"color" : "#91C8E4",
					"font-weight" : "normal",
					"font-size" : "1rem",
					"text-align" : "left"
				});
				container.addChild(output_8, {
					"top": "747px",
					"left": "390px",
					"width": "10px",
					"height": "21px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "21px",
				"left": "544px",
				"width": "825px",
				"height": "778px"
			});
		}
	});
	app.title = "loginMember";
	cpr.core.Platform.INSTANCE.register(app);
})();
