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
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onSms1SubmitError(e){
	var sms1 = e.control;
	var initValue={
		
		"msg" : "회원가입 안내창"
	}
	
	app.openDialog("appURI", {width : 400, height : 300}, function(dialog){
		dialog.ready(function(dialogApp){
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
			dialogApp.initValue = initValue;
		});
	}).then(function(returnValue){
		alert(JSON.stringify(returnValue));
	});
}

/*
 * "중복확인" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
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
function onSms2SubmitSuccess(e ){
	var sms2 = e.control;
	var metadata = sms2.getMetadata("checkId");
	if(metadata !="null"){
		var chkId = app.lookup("ipb1");
		chkId.value="";
		chkId.redraw();
		var chkIdMsg = app.lookup("checkId");
		chkIdMsg.text="이미 사용중인 아이디입니다.";
		chkIdMsg.style.css("color", "#ED3838");
	}else{
		var chkIdnull = app.lookup("ipb1");
		var chkMsg = app.lookup("checkId");
		chkMsg.text="사용가능한 아이디입니다."
		chkMsg.style.css("color", "#00B237");
	}  
	
}


/*
 * "우편번호 확인" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick3(e){
	var button = e.control;
 	cpr.core.ResourceLoader.loadScript("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js")
		.then(function(input){
		    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        	var inputBox = app.lookup("Address");
            var inputBox2 = app.lookup("PostCode");
        	var addr= "";
              	console.log(addr);
         	  //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                  inputBox.value=addr;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                    inputBox.value=addr;
                }
               
           	inputBox2.value = data.zonecode;
              		                  		
        }
    }).open()	;
 });
}

/*
 * 인풋 박스에서 keyup 이벤트 발생 시 호출.
 * 사용자가 키에서 손을 뗄 때 발생하는 이벤트. 키코드 관련 상수는 {@link cpr.events.KeyCode}에서 참조할 수 있습니다.
 */
function onPasswordChkKeyup(e){
	var passwordChk = e.control;
	var pwdChk = app.lookup("passwordChk").value;
	console.log("pwdchk");
	var pwd = app.lookup("password").value;
	var pwdMsg = app.lookup("pwdMsg");
	if(pwdChk==pwd){
		pwdMsg.text="비밀번호가 일치합니다.";
		
	}else{
		pwdMsg.text="비밀번호가 서로 일치하지않습니다.";
	}
}
