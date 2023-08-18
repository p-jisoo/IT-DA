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
function onImageClick(e){
	var image = e.control;
	window.location.href="deleteMemberPopup.clx";
}

/*
 * "탈퇴" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	var submission = app.lookup("deletePasswordSbm");
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onDeletePasswordSbmSubmitSuccess(e){
	var deletePasswordSbm = e.control;
	var pwd = app.lookup("password");
	var pwdChk = app.lookup("passwordChk");
//	if(pwd.value== pwdChk){
		
	}
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onDeletePasswordSbmSubmitError(e){
	var deletePasswordSbm = e.control;
	var pwd = app.lookup("password");
	var pwdChk = app.lookup("passwordChk");
	if(pwd.value !=pwdChk.value){
		alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다");
		return false;
		}
}
