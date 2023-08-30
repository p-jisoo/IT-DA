/************************************************
 * index.js
 * Created at 2023. 8. 9. 오전 10:46:05.
 *
 * @author USER
 ************************************************/

function emded(e) {
	var vcEmb = app.lookup("ea1");
	var vsAppId = e.item.value;
	// 입력값에 선택된 앱이 존재하지 않는 경우
	if (vsAppId == null) {
		return alert("추가될 App이 존재하지 않습니다.");
	}
	
	/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
	cpr.core.App.load(vsAppId, function( /*cpr.core.App*/ loadedApp) {
		/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
		if (vcEmb.getEmbeddedAppInstance()) {
			vcEmb.getEmbeddedAppInstance().dispose();
		}
		/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
		if (loadedApp) {
			/*초기값을 전달합니다.*/
			vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {
				
			})
			/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
			vcEmb.app = loadedApp;
			var app1 = vcEmb.app;
			app1.getInstances()
		}
	});
}
/*
 * 내비게이션 바에서 item-click 이벤트 발생 시 호출.
 * 아이템 클릭시 발생하는 이벤트.
 */
function onNav1ItemClick(e) {
	var nav1 = e.control;
	emded(e);
}

/*
 * "회원가입  " 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	window.location.href = "register.do";
}

/*
 * "  로그인   " 버튼(login)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onLoginClick(e) {
	window.location.href = "login";
}

function onBodyLoad(e) {
	var vcEmb = app.lookup("ea1");
	cpr.core.App.load("home", function( /*cpr.core.App*/ loadedApp) {
		if (loadedApp) {
			vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {})
			vcEmb.app = loadedApp;
			var app1 = vcEmb.app;
			app1.getInstances();
		}
	});
	var submission = app.lookup("sessioncheck");
	submission.send();
}

/*
 * 서브미션(sessionCheck로 변경)에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSms2SubmitSuccess(e) {
	var sms2 = e.control;
	var login = app.lookup("login");
	var myPage = app.lookup("mypage");
	var helloWelcome = app.lookup("welcom");
	var register = app.lookup("btn_register");
	var output = app.lookup("whoName");
	var responseText = sms2.xhr.responseText;
	var any = JSON.parse(responseText);
	if (responseText.length < 3) {
		// 로그인 안된상태 이거만 에러처리 
		return;
	}

	if (any.loginSession == "") {
		onLoginClick();
		login.value = "로그인";
		

	} else {
		output.value = any.loginSession.userName;
		register.visible = false;
		helloWelcome.visible = true;
		myPage.visible = true;
		login.value = "로그아웃";
		
	}
	
}
/*
 * "  로그인   " 버튼(login)에서 value-change 이벤트 발생 시 호출.
 * Button의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onLoginValueChange(e) {
	var login = e.control;
	var logout = app.lookup("login");
	var submission = app.lookup("logout");
	logout.addEventListener("click", function(e) {
		submission.send();
	});
	
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSms3SubmitSuccess(e) {
	var sms3 = e.control;
	var login = app.lookup("login");
	login.value = "로그인";
	window.location.href = "/";
}

/*
 * "임시 회원탈퇴 버튼, 후에 마이페이지 내에 넣을 예정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick3(e) {
	var button = e.control;
	window.location.href = "deleteMember.clx"
}

/*
 * "회원정보 수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick4(e) {
	var button = e.control;
	window.location.href = "updateMember.clx"
}

/*
 * "마이페이지" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick5(e) {
	var button = e.control;
	window.location.href = "myPage.clx"
}