/*
 * App URI: deleteMember
 * Source Location: deleteMember.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("deleteMember", { 
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
			 * 이미지에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onImageClick(e) {
				var image = e.control;
				window.location.href = "/";
			}

			/*
			 * "탈퇴" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e) {
				var button = e.control;
				var submission = app.lookup("deletePasswordSbm");
				var pwd = app.lookup("password").value;
				var pwdChk = app.lookup("passwordChk").value;
				console.log(pwd);
				console.log(pwdChk);
				if(pwd.length==0){
					alert("비빌번호를 입력해주세요.");
					return;
				}
				else if(pwdChk.length==0){
					alert("비밀번호 재확인을 입력해주세요.");
					return;
				}
				else if(pwd != pwdChk) {
					alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다.");
					return;
				}
				submission.send();
			}


			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onDeletePasswordSbmSubmitSuccess(e) {
				var deletePasswordSbm = e.control;
				var responseText = deletePasswordSbm.xhr.responseText;
				var any = JSON.parse(responseText);
				console.log(any.result);
				if(any.result=="success"){
					app.openDialog("deletedialog", {
						width : 400,
						height : 300,
						headerVisible : false
					}, function(dialog){
						dialog.ready(function(dialogApp){
							
						});
					});
					
					
				}else if(any.result=="fail"){
					app.openDialog("deletedialogfail", {
						width : 400,
						height : 300,
						headerVisible : false
					}, function(dialog){
						dialog.ready(function(dialogApp){
							
						});
					});
				}
			}


			/*
			 * 이미지에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onImgHomeClick(e) {
				var imgHome = e.control;
				window.location.href = "/"
			}
			// End - User Script
			
			// Header
			var dataMap_1 = new cpr.data.DataMap("deletePassword");
			dataMap_1.parseData({
				"columns" : [{"name": "PASSWORD"}]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("deletePasswordSbm");
			submission_1.action = "deleteMember";
			submission_1.addRequestData(dataMap_1);
			submission_1.addResponseData(dataMap_1, false);
			if(typeof onDeletePasswordSbmSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onDeletePasswordSbmSubmitSuccess);
			}
			if(typeof onDeletePasswordSbmSubmitError == "function") {
				submission_1.addEventListener("submit-error", onDeletePasswordSbmSubmitError);
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
			var inputBox_1 = new cpr.controls.InputBox("password");
			inputBox_1.secret = true;
			inputBox_1.placeholder = "비밀번호";
			inputBox_1.style.css({
				"border-radius" : "1rem"
			});
			inputBox_1.bind("value").toDataMap(app.lookup("deletePassword"), "PASSWORD");
			container.addChild(inputBox_1, {
				"top": "489px",
				"left": "787px",
				"width": "352px",
				"height": "58px"
			});
			
			var inputBox_2 = new cpr.controls.InputBox("passwordChk");
			inputBox_2.secret = true;
			inputBox_2.placeholder = "비밀번호 재확인";
			inputBox_2.style.css({
				"border-radius" : "1rem"
			});
			container.addChild(inputBox_2, {
				"top": "557px",
				"left": "787px",
				"width": "352px",
				"height": "58px"
			});
			
			var button_1 = new cpr.controls.Button();
			button_1.value = "회원 탈퇴";
			button_1.style.css({
				"background-color" : "#ECECEC",
				"font-weight" : "bold",
				"font-size" : "17px",
				"background-image" : "none",
				"text-align" : "center"
			});
			if(typeof onButtonClick == "function") {
				button_1.addEventListener("click", onButtonClick);
			}
			container.addChild(button_1, {
				"top": "644px",
				"left": "1017px",
				"width": "120px",
				"height": "40px"
			});
			
			var image_1 = new cpr.controls.Image("imgHome");
			image_1.src = "theme/images/img/logo2_donghang.png";
			if(typeof onImgHomeValueChange == "function") {
				image_1.addEventListener("value-change", onImgHomeValueChange);
			}
			if(typeof onImgHomeClick == "function") {
				image_1.addEventListener("click", onImgHomeClick);
			}
			container.addChild(image_1, {
				"top": "122px",
				"left": "854px",
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
				"top": "323px",
				"left": "800px",
				"width": "325px",
				"height": "46px"
			});
			
			var output_2 = new cpr.controls.Output();
			output_2.value = "ITda Accompany";
			output_2.style.css({
				"color" : "#EBA5BF",
				"font-weight" : "normal",
				"font-size" : "1rem",
				"text-align" : "left"
			});
			container.addChild(output_2, {
				"top": "790px",
				"left": "799px",
				"width": "139px",
				"height": "21px"
			});
			
			var output_3 = new cpr.controls.Output();
			output_3.value = "고객센터 : 010-8299-1244";
			output_3.style.css({
				"color" : "#6F6F6F",
				"font-weight" : "normal",
				"font-size" : "1rem",
				"text-align" : "left"
			});
			container.addChild(output_3, {
				"top": "790px",
				"left": "956px",
				"width": "200px",
				"height": "21px"
			});
			
			var output_4 = new cpr.controls.Output();
			output_4.value = "|";
			output_4.style.css({
				"color" : "#EBA5BF",
				"font-weight" : "normal",
				"font-size" : "1rem",
				"text-align" : "left"
			});
			container.addChild(output_4, {
				"top": "790px",
				"left": "937px",
				"width": "10px",
				"height": "21px"
			});
			
			var output_5 = new cpr.controls.Output();
			output_5.value = "회원정보 탈퇴";
			output_5.style.css({
				"font-weight" : "bold",
				"font-size" : "1.5rem",
				"text-align" : "left"
			});
			container.addChild(output_5, {
				"top": "432px",
				"left": "854px",
				"width": "153px",
				"height": "46px"
			});
			
			var image_2 = new cpr.controls.Image();
			image_2.src = "theme/images/img/delete_donghang.png";
			container.addChild(image_2, {
				"top": "432px",
				"left": "793px",
				"width": "50px",
				"height": "45px"
			});
		}
	});
	app.title = "deleteMember";
	cpr.core.Platform.INSTANCE.register(app);
})();
