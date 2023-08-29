/************************************************
 * selectPassword.js
 * Created at 2023. 8. 21. 오후 1:42:08.
 *
 * @author USER
 ************************************************/

/*
 * 이미지에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onImageClick(e){
	var image = e.control;
	window.location.href="/"
}

/*
 * "ITda Accompany    |" 아웃풋에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onOutputClick(e){
	var output = e.control;
	window.location.href="/"
}
/*
 * "아이디 찾기" 아웃풋에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onOutputClick2(e){
	var output = e.control;
	window.location.href="selectIdMember.clx"
}

/*
 * "비밀번호 찾으러 가기" 버튼(pwdBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onPwdBtnClick(e){
	var pwdBtn = e.control;
	var id = app.lookup("userId").value;
	var dataMap = app.lookup("CheckId");
	dataMap.setValue("userId", id);
	var submission = app.lookup("sms1");
	submission.send();
	console.log(id);

}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSms1SubmitSuccess2(e){
	var sms1 = e.control;
	//console.log("아이디 확인 완료");
	alert("아이디 확인 완료");
	window.location.href="selectAllowPassword.clx"
		
	}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onSms1SubmitError(e){
	var sms1 = e.control;
	var id = app.lookup("userId").value;
	if(id.length==0){
		alert("아이디를 입력해주세요");
		return false;
	}
	alert("입력하신 아이디는 존재하지 않습니다.");
}

