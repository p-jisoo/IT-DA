/************************************************
 * index.js
 * Created at 2023. 8. 9. 오전 10:46:05.
 *
 * @author USER
 ************************************************/

/*
 * 내비게이션 바에서 selection-change 이벤트 발생 시 호출.
 * 선택된 Item 값이 저장된 후에 발생하는 이벤트.
 */
function onNav1SelectionChange2(/* cpr.events.CEvent */ e){
	/** @type cpr.controls.NavigationBar */
	var nav1 = e.control;
	var dataSet = app.lookup("ds1");
    var submission = app.lookup("sms1");
    submission.send();
    
}

/*
 * "회원가입  " 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(/* cpr.events.CEvent */e){
	var button = e.control;
	
	
}
