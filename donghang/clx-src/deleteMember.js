/************************************************
 * loginMember.js
 * Created at 2023. 8. 9. 오후 2:50:05.
 *
 * @author USER
 ************************************************/
/*
 * 이미지에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onImageClick(e) {
	var image = e.control;
	window.location.href = "/";
}

/*
 * "탈퇴" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	var submission = app.lookup("deletePasswordSbm");
	submission.send();
	var pwd = app.lookup("password").value;
	var pwdChk = app.lookup("passwordChk").value;
	console.log(pwd);
	console.log(pwdChk);
	if (pwd != pwdChk) {
		alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다");
		return false;
	} else {
		window.location.href = "/"
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onDeletePasswordSbmSubmitSuccess(e) {
	var deletePasswordSbm = e.control;
	alert("회원정보를 삭제합니다")
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onDeletePasswordSbmSubmitError(e) {
	var deletePasswordSbm = e.control;
	alert("비밀번호가 틀렸습니다");
	return false;
	
}
//window.location.href="deleteMember.clx"

/*
 * 이미지에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onImgHomeClick(e) {
	var imgHome = e.control;
	window.location.href = "/"
}