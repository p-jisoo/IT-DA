/************************************************
 * detailBoard.js
 * Created at 2023. 8. 8. 오전 10:04:40.
 *
 * @author USER
 ************************************************/

/*
 * "등록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */

function onButtonClick(e){
	var button = e.control;
	var submission = app.lookup("createsms");
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
	dataMap.setValue("EDU_BOARD_ADDRESS", addressinputBox.value+"-"+detailAdressinputBox.value);
	console.log("EDU_BOARD_ADDRESS", addressinputBox.value+"-"+detailAdressinputBox.value);
	
	submission.send()
	window.location.href="toBoardList.do";
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
<<<<<<< HEAD
}
=======
}

>>>>>>> refs/heads/main
/*
 * "목록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	window.location.href= 'toBoardList.do'
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	var submission = app.lookup("sessioncheck");
	submission.send();	
}

