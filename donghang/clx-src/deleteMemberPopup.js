/************************************************
 * loginMember.js
 * Created at 2023. 8. 9. 오후 2:50:05.
 *
 * @author USER
 ************************************************/

/*
 * "탈퇴하러 가기" 버튼(btn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnClick(e){
	var btn = e.control;
	var checkBox = app.lookup("cbx1");
	if(checkBox.checked==true){
		window.location.href="deleteMember.clx"
	}else{
		alert("회원탈퇴 안내에 동의하시면 네모박스에 체크해주세요.");
	}
}

/*
 * 이미지에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onImageClick(e){
	var image = e.control;
	window.location.href="/"
}
