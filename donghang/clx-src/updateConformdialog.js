/*
 * "확 인" 버튼(no_btn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onNo_btnClick2(e){
	var no_btn = e.control;
	var button = app.lookup("cancle_btn");
	window.location.href="/"
}

