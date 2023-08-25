/************************************************
 * registerform.js
 * Created at 2023. 8. 9. 오후 3:01:12.
 *
 * @author USER
 ************************************************/
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad2(e){
	var submission = app.lookup("updateSession");
	submission.send();
}
/*
 * "회원정보 수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	var submission = app.lookup("update");
	var id = app.lookup("userId");
	var pwd = app.lookup("password");
	var pwdChk = app.lookup("passwordChk");
	var adr = app.lookup("Address");
	var detailAdr = app.lookup("detailAddress");
	var Tel = app.lookup("Tel_mask");
	var name = app.lookup("userName");
	var nickName = app.lookup("nickName")
	var email = app.lookup("email");
	
	if (pwd.length == 0) {
		alert("비밀번호를 입력해주세요.");
		return false;
	}
	if (pwd.value != pwdChk.value) {
		alert("비밀번호가 일치하지 않습니다.");
		return false;
	} else if (pwd.length < 8 || pwd.length > 16) {
		alert("비밀번호를 8~16자리로 입력해주세요");
		return false;
	}
	if (adr.length == 0) {
		alert("우편번호와 도로명 또는 지번주소를 입력해주세요.");
		return false;
	}
	if (detailAdr.length == 0) {
		alert("상세주소를 입력해주세요.");
		return false;
	}if (Tel.length < 0 || Tel.length > 11) {
		alert("전화번호를 입력해주세요.");
		return false;
	}
	if (name.length == 0) {
		alert("이름을 입력해주세요.");
		return false;
	}
	if (nickName.length == 0) {
		alert("닉네임을 입력해주세요");
		return false;
	}
	if(email.length==0){
		alert("이메일을 입력해주세요.")
	}
		
	app.openDialog("updateMemberdialog", {
		width : 400,
		height : 300,
		headerVisible: false
	}, function(dialog){
		dialog.ready(function(dialogApp){
			dialog.initValue={
			param1 : id.value, 
			param2 : pwd.value, 
			param3 : adr.value,
			param4 : Tel.value, 
			param5 : name.value, 
			param6 : nickName.value,
			param7 : email.value
			}
		dialogApp.addEventListener("click", function(e){
		});
	});
//	}).then(function(returnValue){
//		;
	});
	
	
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onUpdateSessionSubmitSuccess(e){
	var updateSession = e.control;
	var id = app.lookup("userId");
	var adr = app.lookup("Address");
	var tel = app.lookup("Tel_mask");
	var name = app.lookup("userName");
	var nick = app.lookup("nickName");
	var email = app.lookup("email");
	var responseText = updateSession.xhr.responseText;
	var any = JSON.parse(responseText);
	console.log(any.loginSession);
	var userInfo = any.loginSession
	id.value = userInfo.userId;
	adr.value = userInfo.address;
	tel.value = userInfo.userTel;
	name.value = userInfo.userName;
	nick.value = userInfo.nickName;
	email.value = userInfo.email;
	
}


/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
//function onSms1SubmitSuccess2(e) {
//	var sms1 = e.control;
//	var responseText = sms1.xhr.responseText;
//	var any = JSON.parse(responseText);
//	console.log(any.loginSession);
//	window.location.href = "/";
//	alert("회원정보가 수정되었습니다.");
//}


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
	window.location.href = "/";
}

/*
 * "회원정보 수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick4(e){
	var button = e.control;
	
}

