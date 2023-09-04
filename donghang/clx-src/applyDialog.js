/************************************************
 * dialog.js
 * Created at 2023. 8. 22. 오후 7:06:37.
 *
 * @author USER
 ************************************************/

/*
 * "닫기" 버튼(no_btn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onNo_btnClick2(e){
	var no_btn = e.control;
	app.close();
}

/*
 * 그룹에서 before-draw 이벤트 발생 시 호출.
 * 그룹 컨텐츠가 그려지기 직전에 호출되는 이벤트 입니다. 내부 컨텐츠를 동적으로 구성하기위한 용도로만 사용됩니다.
 */
function onApplydialogBeforeDraw(e){
	var applydialog = e.control;
	var initValue = app.getHost().initValue;
	var output = app.lookup("check");
	output.value = initValue.param;
}
