/************************************************
 * registerform.js
 * Created at 2023. 8. 9. 오후 3:01:12.
 *
 * @author USER
 ************************************************/

/*
 * "회원가입" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	var submission = app.lookup("sms1");
	submission.send();
}


