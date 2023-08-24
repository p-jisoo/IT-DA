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
//		if (id.length == 0) {
//			alert("아이디를 입력해주세요.");
//			return false;
//		}
//		else if (id.length < 8 || id.length > 16) {
//			alert("아이디를 8~16자리로 입력해주세요.");
//			return false;		
//		}
//		else if (pwd.length == 0) {
//			alert("비밀번호를 입력해주세요.");
//			return false;
//		}
//		else if (pwd.value != pwdChk.value) {
//			alert("비밀번호가 일치하지 않습니다.");
//			return false;
//		} 
//		else if (pwd.length < 8 || pwd.length > 16) {
//			alert("비밀번호를 8~16자리로 입력해주세요");
//			return false;
//		}
//		else if (adr.length == 0) {
//			alert("우편번호와 도로명 또는 지번주소를 입력해주세요.");
//			return false;
//		}
//		else if (detailAdr.length == 0) {
//			alert("상세주소를 입력해주세요.");
//			return false;
//		}else if (Tel.length < 0 || Tel.length > 11) {
//			alert("전화번호를 입력해주세요.");
//			return false;
//		}
//		else if(name.length == 0) {
//			alert("이름을 입력해주세요.");
//			return false;
//		}
//		else if (nickName.length == 0) {
//			alert("닉네임을 입력해주세요");
//			return false;
//		}
//		else if(email.length==0){
//			alert("이메일을 입력해주세요");
//			return false;
//		}
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
}
