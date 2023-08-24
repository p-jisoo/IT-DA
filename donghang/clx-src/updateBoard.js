/************************************************
 * detailBoard.js
 * Created at 2023. 8. 8. 오전 10:04:40.
 *
 * @author USER
 ************************************************/
/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e) {
	
	var step;
	for (step = 0; step < 3; step++) {
		console.log("Walking east one step");
	}
	
	//Board 기존값
	var submission = app.lookup("selectsms");
	submission.send();
}
/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSelectsmsSubmitSuccess(e) {
	var selectsms = e.control;
	
	
	//board
	var title = app.lookup("title");
	var category = app.lookup("category")
	var memberCount = app.lookup("memberCount")
	var content = app.lookup("content")
	var udccomduodatepicker1 = app.lookup("udccomduodatepicker1")
	var udccomduodatepicker2 = app.lookup("udccomduodatepicker2")
	var address = app.lookup("address")
	
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	
	eduApplyBoardMap.setValue("EDU_BOARD_TITLE", title.value);
	eduApplyBoardMap.setValue("EDU_BOARD_CATEGORY", category.value);
	eduApplyBoardMap.setValue("EDU_BOARD_MAX_MEMBER_COUNT", memberCount.value);
	eduApplyBoardMap.setValue("EDU_BOARD_CONTENT", content.value);
	eduApplyBoardMap.setValue("EDU_BOARD_START_PERIOD", udccomduodatepicker1.fromValue);
	eduApplyBoardMap.setValue("EDU_BOARD_END_PERIOD", udccomduodatepicker1.toValue);
	eduApplyBoardMap.setValue("EDU_BOARD_APPLY_START_PERIOD", udccomduodatepicker2.fromValue);
	eduApplyBoardMap.setValue("EDU_BOARD_APPLY_END_PERIOD", udccomduodatepicker2.toValue);
	eduApplyBoardMap.setValue("EDU_BOARD_ADDRESS", address.value);
	
	app.lookup("title").redraw();
	app.lookup("category").redraw();
	app.lookup("memberCount").redraw();
	app.lookup("content").redraw();
	app.lookup("udccomduodatepicker1").redraw();
	app.lookup("udccomduodatepicker2").redraw();
	app.lookup("address").redraw();
}

/*
 * "수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */

function onButtonClick(e){
	var button = e.control;
	var submission = app.lookup("updatesms");
	var dataMap = app.lookup("eduApplyBoardMap");
	var udcExamDuoDatePicker = app.lookup("udccomduodatepicker1");
	dataMap.setValue("EDU_BOARD_START_PERIOD", udcExamDuoDatePicker.fromValue);
	dataMap.setValue("EDU_BOARD_END_PERIOD", udcExamDuoDatePicker.toValue);
	var udcExamDuoDatePicker2 = app.lookup("udccomduodatepicker2");
	dataMap.setValue("EDU_BOARD_APPLY_START_PERIOD", udcExamDuoDatePicker2.fromValue);
	dataMap.setValue("EDU_BOARD_APPLY_END_PERIOD", udcExamDuoDatePicker2.toValue);
	console.log("fromValue",udcExamDuoDatePicker.fromValue);
	console.log("toValue",udcExamDuoDatePicker.toValue);
	var addressinputBox = app.lookup("address");
	var detailAdressinputBox = app.lookup("detailAdress");
	
	if(detailAdressinputBox.value!=null){
	dataMap.setValue("EDU_BOARD_ADDRESS", addressinputBox.value+"-"+detailAdressinputBox.value);
	}	
	submission.send()
	widnwo.location.href = 'eduApplyboardList.clx'
}

/*
 * "주소찾기" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick3(e){
	var button = e.control;
		cpr.core.ResourceLoader.loadScript("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js")
		.then(function(input) {
			new daum.Postcode({
				oncomplete: function(data) {
					// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
					// 예제를 참고하여 다양한 활용법을 확인해 보세요.
					var inputBox = app.lookup("address");
					//var inputBox2 = app.lookup("PostCode");
					var addr = "";
					console.log(addr);
					//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
					if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
						addr = data.roadAddress;
						inputBox.value = data.zonecode+"-"+addr;
					} else { // 사용자가 지번 주소를 선택했을 경우(J)
						addr = data.jibunAddress;
						inputBox.value = data.zonecode+"-"+addr;
					}
					//inputBox2.value = data.zonecode;
				}
			}).open();
		});
}

/*
 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
		var button = e.control;
	var submission = app.lookup("deletesms");
	submission.send()
}

/*
 * "기존 값" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick4(e){
	var button = e.control;
		var submission = app.lookup("selectsms");
	var dataMap = app.lookup("eduApplyBoardMap");
	
	
	app.lookup("title").redraw();
	app.lookup("category").redraw();
	app.lookup("memberCount").redraw();
	app.lookup("content").redraw();
	app.lookup("udccomduodatepicker1").redraw();
	app.lookup("udccomduodatepicker2").redraw();
	app.lookup("address").redraw();
	submission.send()
	
}

/*
 * "목록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick5(e){
	var button = e.control;
	window.location.href = 'toBoardList.do'
}
