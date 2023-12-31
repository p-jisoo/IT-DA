/************************************************
 * detailBoard.js
 * Created at 2023. 8. 8. 오전 10:04:40.
 *
 * @author USER
 ************************************************/
function onBodyLoad(e) {
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var createSessionCheckSms = app.lookup("createSessionCheckSms");
	createSessionCheckSms.send();
	var host = app.getHost();
	var hostAppInstance = host.getAppInstance();
	var initValue = host.initValue;
	var createSessionCheckMap = app.lookup("createSessionCheckMap");
	//컨트롤러로 boardNo 값 보내기
	
	
	//list 이동
	var listButton = app.lookup("listButton");
	listButton.addEventListener("click", function(e) {
		var vcEmb = hostAppInstance.lookup("ea1");
		var vsAppId = "eduApplyboardList";
		if (vsAppId == null) {
			return alert("추가될 App이 존재하지 않습니다.");
		}
		cpr.core.App.load(vsAppId, function( /*cpr.core.App*/ loadedApp) {
			/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
			if (vcEmb.getEmbeddedAppInstance()) {
				vcEmb.getEmbeddedAppInstance().dispose();
			}
			/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
			if (loadedApp) {
				/*초기값을 전달합니다.*/
				//			vcEmb.ready(function(/*cpr.controls.EmbeddedApp*/embApp){
				//			embApp.initValue ="eduApplyBoardMap.getValue("EDU_BOARD_NO");
				//			})
				/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
				vcEmb.app = loadedApp;
				var app1 = vcEmb.app;
				app1.getInstances()
			}
		});
	});
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	//create 이동
	var createButton = app.lookup("createButton");
	createButton.addEventListener("click", function(e) {
		var vcEmb = hostAppInstance.lookup("ea1");
		if (createSessionCheckMap.getValue("USER_ID")) {
			var vsAppId = "eduApplyboardList";
		} else {
			alert("로그인이 필요합니다")
			var vsAppId = " loginMember"
		}
		
		if (vsAppId == null) {
			return alert("추가될 App이 존재하지 않습니다.");
		}
		cpr.core.App.load(vsAppId, function( /*cpr.core.App*/ loadedApp) {
			/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
			if (vcEmb.getEmbeddedAppInstance()) {
				vcEmb.getEmbeddedAppInstance().dispose();
			}
			/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
			if (loadedApp) {
				/*초기값을 전달합니다.*/
				//			vcEmb.ready(function(/*cpr.controls.EmbeddedApp*/embApp){
				//			embApp.initValue ="eduApplyBoardMap.getValue("EDU_BOARD_NO");
				//			})
				/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
				vcEmb.app = loadedApp;
				var app1 = vcEmb.app;
				app1.getInstances()
			}
		});
	});
}
/*
 * "등록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */

function onButtonClick(e) {
	var button = e.control;
	var submission = app.lookup("createsms");
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var udcExamDuoDatePicker = app.lookup("udccomduodatepicker1");
	var udcExamDuoDatePicker2 = app.lookup("udccomduodatepicker2");
	var addressinputBox = app.lookup("address");
	var detailAdressinputBox = app.lookup("detailAdress");
	var content = app.lookup("content");
	var createSessionCheckMap = app.lookup("createSessionCheckMap");
	
	var fromValueList = udcExamDuoDatePicker.fromValue.split(" ");
	var toValueList = udcExamDuoDatePicker.toValue.split(" ");
	var fromValueList2 = udcExamDuoDatePicker2.fromValue.split(" ");
	var toValueList2 = udcExamDuoDatePicker2.toValue.split(" ");
	eduApplyBoardMap.setValue("EDU_BOARD_START_PERIOD",fromValueList[0]);
	eduApplyBoardMap.setValue("EDU_BOARD_END_PERIOD", toValueList[0]);
	eduApplyBoardMap.setValue("EDU_BOARD_APPLY_START_PERIOD", fromValueList2[0]);
	eduApplyBoardMap.setValue("EDU_BOARD_APPLY_END_PERIOD", toValueList2[0]);
	eduApplyBoardMap.setValue("EDU_BOARD_ADDRESS", addressinputBox.value + "-" + detailAdressinputBox.value);
	eduApplyBoardMap.setValue("EDU_BOARD_CONTENT", content.value);
	var value = eduApplyBoardMap.getValue("USER_ID");
	if (createSessionCheckMap.getValue("USER_ID")) {
		submission.send()
		alert("등록 되었습니다");
	}
	
}

/*
 * "주소찾기" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick3(e) {
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
					//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
					if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
						addr = data.roadAddress;
						inputBox.value = data.zonecode + "-" + addr;
					} else { // 사용자가 지번 주소를 선택했을 경우(J)
						addr = data.jibunAddress;
						inputBox.value = data.zonecode + "-" + addr;
					}
					//inputBox2.value = data.zonecode;
				}
			}).open();
		});
}

/*
 * "목록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onCreateSessionCheckSmsSubmitSuccess(e) {
	var createSessionCheckSms = e.control;
	var createSessionCheckMap = app.lookup("createSessionCheckMap");
	var value = createSeszsionCheckMap.getValue("USER_ID");
	if (createSessionCheckMap.getValue("USER_ID")) {}
}

