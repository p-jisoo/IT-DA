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
			window.location.href = "toBaordList.do";
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
	window.location.href="register.do";													
}

/*
 * "  로그인   " 버튼(login)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onLoginClick(e){
	var login = e.control;
	window.location.href="login";
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
//
//
//function f_getUserInfo() {
//    var result = "USER_ID : " + util.Auth.getUserInfo(app, "USER_ID") + "\n" +
//        "USER_NAME : " + util.Auth.getUserInfo(app, "USER_NM");
//        console.log("1");
//    return result;
// 
//}

function onBodyLoad(e){
//	f_getUserInfo();
	var login = app.lookup("login");
	var submission = app.lookup("세션확인");
	submission.send();
	
	
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSms2SubmitSuccess(e){
	var sms2 = e.control;
	var login = app.lookup("login");
	var myPage = app.lookup("mypage");
	var helloWelcome = app.lookup("welcom");
	var register = app.lookup("btn_register");
	var name = app.lookup("name");
//	var submission = app.lookup("누구누구님");
//	submission.send();
	
//	name.
	register.visible=false;
	helloWelcome.visible=true;
	myPage.visible=true;
	login.value="로그아웃";
	//console.log("이름 바뀜?");
}

/*
 * "  로그인   " 버튼(login)에서 value-change 이벤트 발생 시 호출.
 * Button의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onLoginValueChange(e){
	var login = e.control;
	var logout = app.lookup("login");
	var submission = app.lookup("로그아웃");
	submission.send();
	
	
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSms3SubmitSuccess(e){
	var sms3 = e.control;
	var login = app.lookup("login");
	login.value="로그인";
	window.location.href="/";
}


}
