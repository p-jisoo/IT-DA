/************************************************
 * dialog.js
 * Created at 2023. 8. 22. 오후 7:06:37.
 *
 * @author USER
 ************************************************/

/*
 * "yes" 버튼(yes_btn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onYes_btnClick(e){
	var yes_btn = e.control;
	var submission = app.lookup("sms1");
	var initValue = app.getHost().initValue;
	var password=initValue.param1;
	
	// 바인딩 해주기!
	console.log(initValue);
	var dMap = app.lookup("dm1");
	dMap.setValue("password", password);
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
		alert("회원탈퇴가 성공적으로 되었습니다.");
		window.location.href="/"
		
	}else if(any.result=="fail"){
		alert("비밀번호가 틀렸습니다.");
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
//function onSms1SubmitSuccess2(e){
//	var sms1 = e.control;
//	var metadata = sms1.getMetadata("registerSuccess");
//	//map의 키를 가져온다!
//	
//	console.log(metadata);
//	// metadata가 true 일때 메타데이터를 닫아준다.
//	if(metadata == "true"){
//		app.close(metadata);
//	}
//	
//}

/*
 * "cancle" 버튼(no_btn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onNo_btnClick(e){
	var no_btn = e.control;
	var dialog = app.lookup("registerdialog");
	app.close();
}


