/*
 * App URI: registerMember
 * Source Location: registerMember.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4640), Don't edit manually.
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
			function onButtonClick(e) {
				var button = e.control;
				var pwd = app.lookup("password");
				var pwdChk = app.lookup("passwordChk");
				var adr = app.lookup("Address");
				var id = app.lookup("ipb1");
				var detailAdr = app.lookup("detailAddress");
				var Tel = app.lookup("Tel_mask");
				var name = app.lookup("userName");
				var nickName = app.lookup("nickName");
				var email = app.lookup("email");
					if (id.length == 0) {
						alert("아이디를 입력해주세요.");
						return false;
					}
					else if (id.length < 8 || id.length > 16) {
						alert("아이디를 8~16자리로 입력해주세요.");
						return false;		
					}
					else if (pwd.length == 0) {
						alert("비밀번호를 입력해주세요.");
						return false;
					}
					else if (pwd.value != pwdChk.value) {
						alert("비밀번호가 일치하지 않습니다.");
						return false;
					} 
					else if (pwd.length < 8 || pwd.length > 16) {
						alert("비밀번호를 8~16자리로 입력해주세요");
						return false;
					}
					else if (adr.length == 0) {
						alert("우편번호와 도로명 또는 지번주소를 입력해주세요.");
						return false;
					}
					else if (detailAdr.length == 0) {
						alert("상세주소를 입력해주세요.");
						return false;
					}else if (Tel.length < 0 || Tel.length > 11) {
						alert("전화번호를 입력해주세요.");
						return false;
					}
					else if(name.length == 0) {
						alert("이름을 입력해주세요.");
						return false;
					}
					else if (nickName.length == 0) {
						alert("닉네임을 입력해주세요");
						return false;
					}
					else if(email.length==0){
						alert("이메일을 입력해주세요");
						return false;
					}
				app.openDialog("regiseterDialog", {
					width: 500,
					height: 350,
					headerVisible: false
				}, function(dialog) {
					dialog.ready(function(dialogApp) {
					dialog.initValue={param1 : id.value, param2: pwd.value, param3: adr.value, param4: Tel.value, param5: name.value,param6: nickName.value,param7:email.value};
						
						dialogApp.addEventListener("click", function(e) {
									
						});	
					});
				}).then(function(returnValue) {
					console.log(returnValue);
					if(returnValue == "true"){
						window.location.href="/";
					}
				});
				}
			/*
			 *  중복확인 버튼을 눌렀을 시 발생하는 이벤트
			 */
			function onButtonClick2(e) {
				var button = e.control;
				var id = app.lookup("ipb1").value;
				var dataMap = app.lookup("CheckId");
				dataMap.setValue("userId", id);
				var submission = app.lookup("sms2");
				submission.send();
			}
			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSms2SubmitSuccess(e) {
				var sms2 = e.control;
				var metadata = sms2.getMetadata("checkId");
				var id = app.lookup("ipb1");
				var chkId = app.lookup("checkId");
				
				if (id.length == 0) {
					chkId.text = "아이디를 입력해주세요."
					chkId.style.css("color", "#ED3838");
					return false;
					
				} else if (id.length < 8 || id.length > 16) {
					chkId.text = "8~16자리로 입력해주세요.";
					chkId.style.css("color", "#ED3838");
					return false;
					
					//	}else if(id.length(/\s/) != -1){
					//		chkId.text = "공백없이 입력해주세요."
					//		chkId.style.css("color", "#ED3838");
					//		return false;
					//	}else if(id. < 0 || eng < 0 || spe < 0 ){
					//  		chkId.text ="영문,숫자, 특수문자를 혼합하여 입력해주세요.";
					//  		chkId.style.css("color", "#ED3838");	
					// 		 return false;
				}
				
				if (metadata != "null") {
					var chkId = app.lookup("ipb1");
					chkId.value = "";
					chkId.redraw();
					var chkIdMsg = app.lookup("checkId");
					chkIdMsg.text = "이미 사용중인 아이디입니다.";
					chkIdMsg.style.css("color", "#ED3838");
					return false;
				} else {
					var chkIdnull = app.lookup("ipb1");
					var chkMsg = app.lookup("checkId");
					chkMsg.text = "사용가능한 아이디입니다."
					chkMsg.style.css("color", "#00B237");
					return true;
				}
				
			}

			/*
			 * 인풋 박스에서 value-change 이벤트 발생 시 호출.
			 * 변경된 value가 저장된 후에 발생하는 이벤트.
			 */

			function onPasswordValueChange(e) {
				var pwd = app.lookup("password");
				var pwdChk = app.lookup("passwordChk");
				var pwdMsg = app.lookup("pwdMsg");
				if (pwd.length == 0) {
					pwdMsg.text = "비밀번호를 입력해주세요."
					pwdMsg.style.css("color", "#ED3838");
					return false;
				} else if (pwd.length < 8 || pwd.length > 16) {
					pwdMsg.text = "8~16자리로 입력해주세요.";
					pwdMsg.style.css("color", "#ED3838");
					return false;
				}
				//	}else if(pwd.length(/\s/) != -1){
				//		pwdMsg.text = "공백없이 입력해주세요."
				//		pwdMsg.style.css("color", "#ED3838");
				//		return false;
				//		}
				
				if (pwd.text === pwdChk.text) {
					pwdMsg.text = "비밀번호가 일치합니다.";
					pwdMsg.style.css("color", "#00B237");
					return true;
					
				} else {
					pwdMsg.text = "비밀번호가 서로 일치하지않습니다.";
					pwdMsg.style.css("color", "#ED3838");
					return false;
				}
				
			}

			/*
			 * 인풋 박스에서 value-change 이벤트 발생 시 호출.
			 * 변경된 value가 저장된 후에 발생하는 이벤트.
			 */
			function onPasswordChkValueChange(e) {
				console.log("확인");
				var pwdChk = app.lookup("passwordChk");
				var pwd = app.lookup("password");
				var pwdMsg = app.lookup("pwdMsg");
				
				if (pwdChk.length == 0 && pwd.length == 0) {
					pwdMsg.text = "비밀번호를 입력해주세요.";
					pwdMsg.style.css("color", "#ED3838");
					return false;
				} else if (pwdChk.length == 0) {
					pwdMsg.text = "비밀번호 재확인을 입력해주세요.";
					pwdMsg.style.css("color", "#ED3838");
					return false;
				} else if (pwd.length < 8 || pwd.length > 16) {
					pwdMsg.text = "8~16자리로 입력해주세요.";
					pwdMsg.style.css("color", "#ED3838");
					return false;
				}
				if (pwdChk.text === pwd.text) {
					pwdMsg.text = "비밀번호가 일치합니다.";
					pwdMsg.style.css("color", "#00B237");
					return true;
				} else {
					pwdMsg.text = "비밀번호가 서로 일치하지않습니다.";
					pwdMsg.style.css("color", "#ED3838");
					return false;
				}
				
			}

			/*
			 * "우편번호 확인" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick3(e) {
				var button = e.control;
				cpr.core.ResourceLoader.loadScript("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js")
					.then(function(input) {
						new daum.Postcode({
							oncomplete: function(data) {
								// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
								// 예제를 참고하여 다양한 활용법을 확인해 보세요.
								var inputBox = app.lookup("Address");
								var inputBox2 = app.lookup("PostCode");
								var addr = "";
								console.log(addr);
								//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
								if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
									addr = data.roadAddress;
									inputBox.value = addr;
								} else { // 사용자가 지번 주소를 선택했을 경우(J)
									addr = data.jibunAddress;
									inputBox.value = addr;
								}
								
								inputBox2.value = data.zonecode;
								
							}
						}).open();
					});
			}

			/*
			 * 이미지에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onImgHomeClick(e){
				var imgHome = e.control;
				window.location.href="/"
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
					},
					{"name": "email"}
				]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("CheckId");
			dataMap_2.parseData({
				"columns" : [{"name": "userId"}]
			});
			app.register(dataMap_2);
			
			var dataMap_3 = new cpr.data.DataMap("ChkPassword");
			dataMap_3.parseData({
				"columns" : [{"name": "password"}]
			});
			app.register(dataMap_3);
			var submission_1 = new cpr.protocols.Submission("sms1");
			submission_1.action = "registerMember";
			submission_1.addRequestData(dataMap_1);
			if(typeof onSms1SubmitSuccess2 == "function") {
				submission_1.addEventListener("submit-success", onSms1SubmitSuccess2);
			}
			if(typeof onSms1SubmitError2 == "function") {
				submission_1.addEventListener("submit-error", onSms1SubmitError2);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("sms2");
			submission_2.action = "checkIdMember";
			submission_2.addRequestData(dataMap_2);
			submission_2.addResponseData(dataMap_2, false);
			if(typeof onSms2SubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onSms2SubmitSuccess);
			}
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("sms3");
			submission_3.addRequestData(dataMap_3);
			submission_3.addResponseData(dataMap_3, false);
			app.register(submission_3);
			app.supportMedia("all and (min-width: 1980px)", "register");
			app.supportMedia("all and (min-width: 1920px) and (max-width: 1979px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"text-align" : "center",
				"color" : "#91C8E4",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var output_1 = new cpr.controls.Output();
			output_1.value = "ITda";
			output_1.style.css({
				"color" : "#000000",
				"font-weight" : "bolder",
				"font-size" : "2rem"
			});
			container.addChild(output_1, {
				"top": "58px",
				"left": "167px",
				"width": "84px",
				"height": "44px"
			});
			
			var output_2 = new cpr.controls.Output();
			output_2.value = "Accompany";
			output_2.style.css({
				"color" : "#000000",
				"font-weight" : "bold",
				"font-size" : "1.6rem"
			});
			container.addChild(output_2, {
				"top": "100px",
				"left": "167px",
				"width": "157px",
				"height": "41px"
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
				"top": "1062px",
				"left": "768px",
				"width": "177px",
				"height": "54px"
			});
			
			var group_1 = new cpr.controls.Container();
			group_1.style.css({
				"font-style" : "normal"
			});
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.placeholder = "아이디를 입력해주세요.";
				inputBox_1.autoSkip = true;
				inputBox_1.style.css({
					"border-radius" : "0.5rem",
					"font-weight" : "normal",
					"font-size" : "0.9rem",
					"font-style" : "normal"
				});
				inputBox_1.bind("value").toDataMap(app.lookup("dm1"), "userId");
				if(typeof onIpb1ValueChange == "function") {
					inputBox_1.addEventListener("value-change", onIpb1ValueChange);
				}
				container.addChild(inputBox_1, {
					"top": "48px",
					"left": "300px",
					"width": "247px",
					"height": "42px"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "중복확인";
				button_2.style.css({
					"font-weight" : "bold",
					"font-size" : "1.15rem"
				});
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					"top": "57px",
					"left": "558px",
					"width": "102px",
					"height": "32px"
				});
				var output_3 = new cpr.controls.Output("checkId");
				output_3.value = "영어, 숫자, 특수문자로 8~16자로 입력해주세요.";
				output_3.style.css({
					"border-radius" : "0.5rem",
					"color" : "#ED3838",
					"font-size" : "0.9rem",
					"text-align" : "left"
				});
				container.addChild(output_3, {
					"top": "89px",
					"left": "300px",
					"width": "372px",
					"height": "42px"
				});
				var inputBox_2 = new cpr.controls.InputBox("password");
				inputBox_2.fieldLabel = "13";
				inputBox_2.secret = true;
				inputBox_2.placeholder = "비밀번호를 입력해주세요.";
				inputBox_2.style.css({
					"border-radius" : "0.5rem",
					"font-size" : "0.9rem"
				});
				inputBox_2.bind("value").toDataMap(app.lookup("dm1"), "password");
				if(typeof onIpb2Keyup == "function") {
					inputBox_2.addEventListener("keyup", onIpb2Keyup);
				}
				if(typeof onPasswordValueChange == "function") {
					inputBox_2.addEventListener("value-change", onPasswordValueChange);
				}
				container.addChild(inputBox_2, {
					"top": "185px",
					"left": "300px",
					"width": "247px",
					"height": "42px"
				});
				var inputBox_3 = new cpr.controls.InputBox("passwordChk");
				inputBox_3.secret = true;
				inputBox_3.placeholder = "비밀번호 재확인을 입력해주세요.";
				inputBox_3.style.css({
					"border-radius" : "0.5rem",
					"font-size" : "0.9rem"
				});
				if(typeof onPasswordChkValueChange == "function") {
					inputBox_3.addEventListener("value-change", onPasswordChkValueChange);
				}
				container.addChild(inputBox_3, {
					"top": "235px",
					"left": "300px",
					"width": "247px",
					"height": "42px"
				});
				var output_4 = new cpr.controls.Output("pwdMsg");
				output_4.value = "영어, 숫자, 특수문자로 8~16자로 입력해주세요.";
				output_4.style.css({
					"border-radius" : "0.5rem",
					"color" : "#ED3838",
					"font-size" : "0.9rem",
					"text-align" : "left"
				});
				container.addChild(output_4, {
					"top": "278px",
					"left": "300px",
					"width": "371px",
					"height": "42px"
				});
				var inputBox_4 = new cpr.controls.InputBox("PostCode");
				inputBox_4.readOnly = true;
				inputBox_4.placeholder = "우편번호";
				inputBox_4.style.css({
					"border-radius" : "0.5rem",
					"font-size" : "0.9rem"
				});
				container.addChild(inputBox_4, {
					"top": "390px",
					"left": "300px",
					"width": "230px",
					"height": "42px"
				});
				var button_3 = new cpr.controls.Button();
				button_3.value = "우편번호 확인";
				button_3.style.css({
					"font-weight" : "bold",
					"font-size" : "1.15rem"
				});
				if(typeof onButtonClick3 == "function") {
					button_3.addEventListener("click", onButtonClick3);
				}
				container.addChild(button_3, {
					"top": "398px",
					"left": "546px",
					"width": "125px",
					"height": "36px"
				});
				var inputBox_5 = new cpr.controls.InputBox("Address");
				inputBox_5.readOnly = true;
				inputBox_5.placeholder = "도로명주소 , 지번주소";
				inputBox_5.style.css({
					"border-radius" : "0.5rem",
					"font-size" : "0.9rem"
				});
				inputBox_5.bind("value").toDataMap(app.lookup("dm1"), "address");
				if(typeof onRoadAddressChange == "function") {
					inputBox_5.addEventListener("change", onRoadAddressChange);
				}
				if(typeof onRoadAddressKeydown == "function") {
					inputBox_5.addEventListener("keydown", onRoadAddressKeydown);
				}
				if(typeof onRoadAddressKeyup2 == "function") {
					inputBox_5.addEventListener("keyup", onRoadAddressKeyup2);
				}
				container.addChild(inputBox_5, {
					"top": "442px",
					"left": "300px",
					"width": "380px",
					"height": "42px"
				});
				var inputBox_6 = new cpr.controls.InputBox("detailAddress");
				inputBox_6.placeholder = "상세 주소";
				inputBox_6.style.css({
					"border-radius" : "0.5rem",
					"font-size" : "0.9rem"
				});
				container.addChild(inputBox_6, {
					"top": "494px",
					"left": "300px",
					"width": "380px",
					"height": "42px"
				});
				var maskEditor_1 = new cpr.controls.MaskEditor("Tel_mask");
				maskEditor_1.mask = "XXX-XXXX-XXXX";
				maskEditor_1.autoSkip = true;
				maskEditor_1.style.css({
					"border-radius" : "0.5rem",
					"font-size" : "0.9rem"
				});
				maskEditor_1.bind("value").toDataMap(app.lookup("dm1"), "userTel");
				container.addChild(maskEditor_1, {
					"top": "593px",
					"left": "300px",
					"width": "266px",
					"height": "42px"
				});
				var inputBox_7 = new cpr.controls.InputBox("userName");
				inputBox_7.placeholder = "이름을 입력해주세요.";
				inputBox_7.style.css({
					"border-radius" : "0.5rem",
					"font-size" : "0.9rem"
				});
				inputBox_7.bind("value").toDataMap(app.lookup("dm1"), "userName");
				container.addChild(inputBox_7, {
					"top": "643px",
					"left": "300px",
					"width": "266px",
					"height": "42px"
				});
				var inputBox_8 = new cpr.controls.InputBox("nickName");
				inputBox_8.placeholder = "닉네임을 입력해주세요.";
				inputBox_8.style.css({
					"border-radius" : "0.5rem",
					"font-size" : "0.9rem"
				});
				inputBox_8.bind("value").toDataMap(app.lookup("dm1"), "nickName");
				container.addChild(inputBox_8, {
					"top": "693px",
					"left": "300px",
					"width": "266px",
					"height": "42px"
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "*아이디";
				output_5.style.css({
					"border-radius" : "0.5rem",
					"font-weight" : "bold",
					"font-size" : "0.9rem"
				});
				container.addChild(output_5, {
					"top": "53px",
					"left": "0px",
					"width": "206px",
					"height": "42px"
				});
				var output_6 = new cpr.controls.Output();
				output_6.value = "*비밀번호";
				output_6.style.css({
					"border-radius" : "0.5rem",
					"font-weight" : "bold",
					"font-size" : "0.9rem"
				});
				container.addChild(output_6, {
					"top": "194px",
					"left": "0px",
					"width": "208px",
					"height": "42px"
				});
				var output_7 = new cpr.controls.Output();
				output_7.value = "*비밀번호 재확인";
				output_7.style.css({
					"border-radius" : "0.5rem",
					"font-weight" : "bold",
					"font-size" : "0.9rem"
				});
				container.addChild(output_7, {
					"top": "237px",
					"left": "0px",
					"width": "281px",
					"height": "42px"
				});
				var output_8 = new cpr.controls.Output();
				output_8.value = "*주소";
				output_8.style.css({
					"border-radius" : "0.5rem",
					"font-weight" : "bold",
					"font-size" : "0.9rem"
				});
				container.addChild(output_8, {
					"top": "395px",
					"left": "0px",
					"width": "208px",
					"height": "42px"
				});
				var output_9 = new cpr.controls.Output();
				output_9.value = "*전화번호";
				output_9.style.css({
					"border-radius" : "0.5rem",
					"font-weight" : "bold",
					"font-size" : "0.9rem"
				});
				container.addChild(output_9, {
					"top": "593px",
					"left": "0px",
					"width": "208px",
					"height": "42px"
				});
				var output_10 = new cpr.controls.Output();
				output_10.value = "*성함";
				output_10.style.css({
					"border-radius" : "0.5rem",
					"font-weight" : "bold",
					"font-size" : "0.9rem"
				});
				container.addChild(output_10, {
					"top": "643px",
					"left": "0px",
					"width": "208px",
					"height": "42px"
				});
				var output_11 = new cpr.controls.Output();
				output_11.value = "*닉네임";
				output_11.style.css({
					"border-radius" : "0.5rem",
					"font-weight" : "bold",
					"font-size" : "0.9rem"
				});
				container.addChild(output_11, {
					"top": "693px",
					"left": "0px",
					"width": "208px",
					"height": "42px"
				});
				var output_12 = new cpr.controls.Output();
				output_12.value = "*  이메일";
				output_12.style.css({
					"border-radius" : "0.5rem",
					"font-weight" : "bold",
					"font-size" : "0.9rem"
				});
				container.addChild(output_12, {
					"top": "743px",
					"left": "0px",
					"width": "208px",
					"height": "42px"
				});
				var inputBox_9 = new cpr.controls.InputBox("email");
				inputBox_9.placeholder = "이메일을 입력해주세요.";
				inputBox_9.style.css({
					"border-radius" : "0.5rem",
					"font-size" : "0.9rem"
				});
				inputBox_9.bind("value").toDataMap(app.lookup("dm1"), "email");
				container.addChild(inputBox_9, {
					"top": "743px",
					"left": "300px",
					"width": "266px",
					"height": "42px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "177px",
				"left": "480px",
				"width": "949px",
				"height": "825px"
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
				"top": "20px",
				"left": "20px",
				"width": "137px",
				"height": "121px"
			});
			
			var output_13 = new cpr.controls.Output();
			output_13.value = "회원가입";
			output_13.style.css({
				"font-weight" : "bold",
				"font-size" : "3rem",
				"font-family" : "'맑은 고딕' , 'Malgun Gothic' , sans-serif",
				"font-style" : "normal"
			});
			container.addChild(output_13, {
				"top": "83px",
				"left": "779px",
				"width": "236px",
				"height": "75px"
			});
		}
	});
	app.title = "registerMember";
	cpr.core.Platform.INSTANCE.register(app);
})();
