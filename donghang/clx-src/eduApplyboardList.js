/************************************************
 * eduApplyboardList.js
 * Created at 2023. 8. 11. 오후 1:43:07.
 *
 * @author USER
 ************************************************/

/*
 * 그룹에서 before-draw 이벤트 발생 시 호출.
 * 그룹 컨텐츠가 그려지기 직전에 호출되는 이벤트 입니다. 내부 컨텐츠를 동적으로 구성하기위한 용도로만 사용됩니다.
 */



function onGroupBeforeDraw(e){	
	var page = app.lookup("page");
	var currentPageIndex = page.currentPageIndex;
	var dataMap = app.lookup("dm2");
	dataMap.setValue("nowpage", currentPageIndex);
	var submission = app.lookup("sms2");
	submission.send();
}

/*
 * 페이지 인덱서에서 selection-change 이벤트 발생 시 호출.
 * Page index를 선택하여 선택된 페이지가 변경된 후에 발생하는 이벤트.
 */
function onPageSelectionChange(e){
	var page = app.lookup("page");
	var currentPageIndex = page.currentPageIndex;
	var listBox = app.lookup("lbx1");
	var dataMap = app.lookup("dm2");
	var submission = app.lookup("sms2");
	var dataSet = app.lookup("tpSlct");
	dataMap.setValue("status", dataSet.getRowData(listBox.getSelectedDataSetIndices()[0]).label);
	dataMap.setValue("nowpage", currentPageIndex);
	submission.send();
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onSms1SubmitDone(e){
	var sms1 = e.control;
	var pageIndexer = app.lookup("page");
	console.log(sms1.xhr.responseText);
}




/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var listBox = app.lookup("lbx1");
	var comboBox = app.lookup("cmb1");
	listBox.selectItemByValue("value1");
	comboBox.selectItemByValue("value1");
}

/*
 * "Button" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var dataSet = app.lookup("tpSlct");
	var searchInput = app.lookup("searchCtl");
	var dataMap = app.lookup("dm2");
	var inputValue = searchInput.value.replace(/\s/g, "");
	var listBox = app.lookup("lbx1");
	var submission = app.lookup("sms2");
	if(inputValue=='' && listBox.getSelectedDataSetIndices()[0].valueOf() !=0 ){
		dataMap.setValue("status", dataSet.getRowData(listBox.getSelectedDataSetIndices()[0]).label);
	}
	submission.send();
}

/*
 * 리스트 박스에서 item-click 이벤트 발생 시 호출.
 * 아이템 클릭시 발생하는 이벤트.
 */
function onLbx1ItemClick(e){
	var searchInput = app.lookup("searchCtl");
	var dataMap = app.lookup("dm2");
	var inputValue = searchInput.value.replace(/\s/g, "");
	var listBox = app.lookup("lbx1");
	var submission = app.lookup("sms2");
	var dataSet = app.lookup("tpSlct");
	dataMap.setValue("status", dataSet.getRowData(listBox.getSelectedDataSetIndices()[0]).label);
	console.log(listBox.getSelectedDataSetIndices()[0]);
	submission.send();
}
