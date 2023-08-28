/************************************************
 * findIdOK.js
 * Created at 2023. 8. 28. 오전 12:48:33.
 *
 * @author leeheeeun
 ************************************************/
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var initValue = app.getHost().initValue;
	var output = app.lookup("userId");
	output.value = initValue.id;
	console.log(initValue.id);
}
/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSms1SubmitSuccess(e){
	var sms1 = e.control;
	var output = app.lookup("userId");
	output.redraw();
}


/*
 * "확 인" 버튼(return_btn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onReturn_btnClick(e){
	var return_btn = e.control;
	var button = app.lookup("return_btn");
	app.close();
	window.location.href="/"	
}

