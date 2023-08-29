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
	var pwd = app.lookup("password").value;
	var pwdChk = app.lookup("passwordChk").value;
	console.log(pwd);
	console.log(pwdChk);
	if (pwd != pwdChk) {
		alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다.");
		return;
	}else{
	submission.send();
	}

}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onDeletePasswordSbmSubmitSuccess(e) {
	var deletePasswordSbm = e.control;
	var responseText = deletePasswordSbm.xhr.responseText;
	var any = JSON.parse(responseText);
	console.log(any.result);
	if(any.result=="success"){
		app.openDialog("deletedialog", {
			width : 400,
			height : 300,
			headerVisible : false
		}, function(dialog){
			dialog.ready(function(dialogApp){
				
			});
		});
		
		
	}else if(any.result=="fail"){
		app.openDialog("deletedialogfail", {
			width : 400,
			height : 300,
			headerVisible : false
		}, function(dialog){
			dialog.ready(function(dialogApp){
				
			});
		});
	}
}


/*
 * 이미지에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onImgHomeClick(e) {
	var imgHome = e.control;
	window.location.href = "/"
}