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
			window.location.href = "showmeapply.do";
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
	window.location.href="register";													
}

