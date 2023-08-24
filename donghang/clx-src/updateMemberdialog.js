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
	//console.log(initValue);
	//각각 value값 가져오기
	var userId=initValue.param1; //제외 해줄예정
	var password=initValue.param2;
	var	 address= initValue.param3;
	var userTel=initValue.param4;
	var userName=initValue.param5;
	var nickName=initValue.param6;
	var email=initValue.param7;
	
	// 바인딩 해주기!
	console.log(initValue);
	var dMap = app.lookup("dm1");
	dMap.setValue("userId", userId);
	dMap.setValue("password", password);
	dMap.setValue("address", address);
	dMap.setValue("userTel", userTel);
	dMap.setValue("userName", userName);
	dMap.setValue("nickName", nickName);
	dMap.setValue("email", email);
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
//function onSms1SubmitSuccess2(e){
//	var sms1 = e.control;
//	var metadata = sms1.getMetadata("updateSuccess");
//	//map의 키를 가져온다!
//	var responseText = sms1.xhr.responseText;
//	var any = JSON.parse(responseText);
//	console.log(any.ds1);
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
