/************************************************
 * detailBoard.js
 * Created at 2023. 8. 8. 오전 10:04:40.
 *
 * @author USER
 ************************************************/

/*
 * "신청하기" 버튼에서 animationend 이벤트 발생 시 호출.
 * 애니메이션 종료 후 발생하는 이벤트.
 */
function onButtonAnimationend(e){
	var button = e.control;
	
	
}

/*
 * "신청하기" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */

/*
 * "등록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	
	var submission = app.lookup("createsms");
	submission.send();
	
}
