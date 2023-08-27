/************************************************
 * findIdOK.js
 * Created at 2023. 8. 28. 오전 12:48:33.
 *
 * @author leeheeeun
 ************************************************/

/*
 * "확 인" 버튼(return_btn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onReturn_btnClick(e){
	var return_btn = e.control;
	var button = app.lookup("return_btn");
	app.close();
	window.location.href="/"	
}
