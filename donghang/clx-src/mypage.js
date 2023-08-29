/************************************************
 * mypage.js
 * Created at 2023. 8. 21. 오전 11:48:25.
 *
 * @author leeheeeun
 ************************************************/
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
    var submission = app.lookup("sms1");
	var output= app.lookup("userName");
	submission.send();
}
/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSms1SubmitSuccess(e){
	var sms1 = e.control;
	var output = app.lookup("userName");
	var responseText = sms1.xhr.responseText;
	var any = JSON.parse(responseText);
	output.value = any.loginSession.userName;
}
/*
 * 내비게이션 바에서 item-click 이벤트 발생 시 호출.
 * 아이템 클릭시 발생하는 이벤트.
 */
function onNav1ItemClick(e){
	var nav1 = e.control;
	
	// 선택한 아이템에 대한 값 
	emded(e);
}

function emded(e){
	var vcEmb = app.lookup("ea1");
	var vsAppId = e.item.value;
	console.log(vsAppId);
		// 입력값에 선택된 앱이 존재하지 않는 경우
	if(vsAppId == null) {
		return alert("추가될 App이 존재하지 않습니다.");
	}
	
	/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
	cpr.core.App.load(vsAppId, function(/*cpr.core.App*/ loadedApp){
		/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
		if(vcEmb.getEmbeddedAppInstance()){
			vcEmb.getEmbeddedAppInstance().dispose();
		}
		/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
		if(loadedApp){						
			/*초기값을 전달합니다.*/			
			vcEmb.ready(function(/*cpr.controls.EmbeddedApp*/embApp){
				
			})
			/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
			vcEmb.app = loadedApp;
			var app = vcEmb.app;
			app.getInstances()
		}
	}); 
}

/*
 * "회원정보수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	window.location.href="updateMember.clx"
}

/*
 * "회원탈퇴" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	window.location.href="deleteMemberPopup.clx"
}
