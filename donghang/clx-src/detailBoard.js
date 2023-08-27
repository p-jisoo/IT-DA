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
	
}
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad2(e) {
	
	var selectsms = app.lookup("selectsms");
	var selectCommentsms = app.lookup("selectCommentsms");
	
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var commentBoardMap = app.lookup("commentBoardMap");
	var commentListSet = app.lookup("commentListSet");
	
	var host = app.getHost();
	var initValue = host.initValue;
	//컨트롤러로 boardNo 값 보내기
	eduApplyBoardMap.setValue("EDU_BOARD_NO", initValue);
	console.log("eduApplyBoardMap setValue : " + eduApplyBoardMap.getValue("EDU_BOARD_NO"));
	commentBoardMap.setValue("EDU_BOARD_NO", initValue);
	console.log("commentBoardMap setValue : " + commentBoardMap.getValue("EDU_BOARD_NO"));
	selectCommentsms.send();
	selectsms.send();
	//selectCommentsms.send();
	//	var eduApplyBoardMemeberCountMap = app.lookup("eduApplyBoardMemeberCountMap");
	//	eduApplyBoardMemeberCountMap.setValue("MEMBER_COUNT_ID", value);
	//	eduApplyBoardMemeberCountMap.setValue("USER_ID", value);
	//	eduApplyBoardMemeberCountMap.setValue("EDU_BOARD_NO", value);
	
	//	var host = app.getHost();
	//	host.initValue.value;
	//	//컨트롤러로 boardNo 값 보내기
}
/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSelectsmsSubmitSuccess(e) {
	var selectsms = e.control;
	
	//board
	var title = app.lookup("title");
	var category = app.lookup("category");
	var memberCount = app.lookup("memberCount");
	var content = app.lookup("content");
	var udccomduodatepicker1 = app.lookup("udccomduodatepicker1");
	var udccomduodatepicker2 = app.lookup("udccomduodatepicker2");
	var address = app.lookup("address");
	var userId = app.lookup("userId");
	
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
	
	//	var commentContent = app.lookup("commentContent");
	//	
	//	commentBoardMap.setValue("EDU_APPLY_COMMENT_CONTENT", commentContent.value);
	//	commentBoardMap.setValue("USER_ID", userId.value);
	//	
	//	app.lookup("userId").redraw();
	//	app.lookup("commentContent").redraw();
	//	
}
/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSelectCommentsmsSubmitSuccess(e) {
	var selectCommentsms = e.control;
	app.lookup("userId").redraw();
	var grid = app.lookup("grd1");
	var grdDelete = app.lookup("grdDelete");
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var userIdValue = app.lookup("userId");
	//commentSet
	var commentListSet = app.lookup("commentListSet");
	
	//commentMap
	var commentBoardMap = app.lookup("commentBoardMap");
		for (var i = 1; i < grid.rowCount; i++) {
		console.log(grid.getCellValue(i, "USER_ID"));
		if (grid.getCellValue(i, "USER_ID") == userIdValue.value) {
			grdDelete.visible = true
			grid.redraw();
		}
	}
}
/*
 * "수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */

function onButtonClick(e) {
	var button = e.control;
	var submission = app.lookup("updatesms");
	
	var dataMap = app.lookup("eduApplyBoardMap");
	var udcExamDuoDatePicker = app.lookup("udccomduodatepicker1");
	dataMap.setValue("EDU_BOARD_START_PERIOD", udcExamDuoDatePicker.fromValue);
	dataMap.setValue("EDU_BOARD_END_PERIOD", udcExamDuoDatePicker.toValue);
	var udcExamDuoDatePicker2 = app.lookup("udccomduodatepicker2");
	dataMap.setValue("EDU_BOARD_APPLY_START_PERIOD", udcExamDuoDatePicker2.fromValue);
	dataMap.setValue("EDU_BOARD_APPLY_END_PERIOD", udcExamDuoDatePicker2.toValue);
	var addressinputBox = app.lookup("address");
	//	var detailAdressinputBox = app.lookup("detailAdress");
	//	
	//	if (detailAdressinputBox.value != null) {
	//		dataMap.setValue("EDU_BOARD_ADDRESS", addressinputBox.value + "-" + detailAdressinputBox.value);
	//	}
	submission.send()
	window.location.href = "updateBoard.clx";
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
					console.log(addr);
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
 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	var button = e.control;
	var submission = app.lookup("deletesms");
	submission.send()
	window.location.href = "toBoardList.do";
}

/*
 * "기존 값" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick4(e) {
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
 * "기존 값" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick5(e) {
	var button = e.control;
	var submission = app.lookup("selectCommentsms");
	var dataMap = app.lookup("commentBoardMap");
	
	app.lookup("userId").redraw();
	app.lookup("commentContent").redraw();
	
	submission.send()
}

/*
 * "댓글 수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick6(e) {
	var button = e.control;
	var submission = app.lookup("updateCommentsms");
	var dataMap = app.lookup("commentBoardMap");
	
	submission.send()
}

/*
 * "목록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick7(e) {
	var button = e.control;
	window.location.href = "toBoardList.do";
}
//
///*
// * "참여하기" 버튼에서 click 이벤트 발생 시 호출.
// * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
// */
//function onButtonClick8(e){
//	var button = e.control;
//	var submission = app.lookup("selectMemberCount");
//	var eduApplyBoardMemeberCountMap = app.lookup("eduApplyBoardMemeberCountMap");
//	submission.send();
//	
//	
//	var value = eduApplyBoardMemeberCountMap.getValue("TOTAL_COUNT");
//	var value2 = eduApplyBoardMemeberCountMap.getValue("EDU_BOARD_MAX_MEMBER_COUNT");
//	if(value==value2){
//		var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
//		eduApplyBoardMap.setValue("EDU_BOARD_STATUS", "모집마감");
//		var submission2 = app.lookup("updateMemberCount");
//		submission2.send();
//	}
//}

/*
 * "Button" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick9(e) {
	var button = e.control;
	//수정
	var updateCommentsms = app.lookup("updateCommentsms");
	updateCommentsms.send();
	var grid1 = app.lookup("grd1");
	grid1.redraw();
}

/*
 * "Button" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick10(e) {
	var button = e.control;
	//삭제
	var deleteCommentsms = app.lookup("deleteCommentsms");
	deleteCommentsms.send();
}

/*
 * "Button" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick11(e) {
	var button = e.control;
	var selectCommentsms = app.lookup("selectCommentsms");
	selectCommentsms.send();
	
	var grid = app.lookup("grd1");
	grid.redraw();
	
}

/*
 * "댓글쓰기" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick12(e) {
	var button = e.control;
	var createCommentsms = app.lookup("createCommentsms");
	var selectCommentsms = app.lookup("selectCommentsms");
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var commentBoardMap = app.lookup("commentBoardMap");
	var userId = app.lookup("userId");
	var commentContent = app.lookup("commentContent");
	commentBoardMap.setValue("USER_ID", userId.value);
	commentBoardMap.setValue("EDU_APPLY_COMMENT_CONTENT", commentContent.value);
	commentBoardMap.setValue("EDU_BOARD_NO", eduApplyBoardMap.getValue("EDU_BOARD_NO"));
	console.log("commentBoardMapsetValue : " + commentBoardMap.getValue("EDU_BOARD_NO"));
	
	console.log("eduApplyBoardMap : " + eduApplyBoardMap.getValue("EDU_BOARD_NO"));
	
	createCommentsms.send();
	var userIdMap = commentBoardMap.getValue("USER_ID");
	var userIdValue = app.lookup("userId");
	console.log("userIdValue : " + userIdValue.value);
	
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var grid = app.lookup("grd1");
	console.log("rows" + grid.rowCount);
	//console.log(grid.getCellValue(i, "USER_ID"));
	if (createCommentsms.isSuccess()) {
		commentBoardMap.setValue("EDU_BOARD_NO", eduApplyBoardMap.getValue("EDU_BOARD_NO"));
		selectCommentsms.send();
		grid.redraw();
	}
	grid.redraw();
}

/*
 * "수정버튼" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick13(e) {
	var button = e.control;
	
}

/*
 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick14(e) {
	var button = e.control;
	var button2 = app.lookup("grdDelete");
	var deleteCommentsms = app.lookup("deleteCommentsms");
	var commentBoardMap = app.lookup("commentBoardMap");
	var selectCommentsms = app.lookup("selectCommentsms");
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	
	deleteCommentsms.send();
	var grid = app.lookup("grd1");
	if (deleteCommentsms.isSuccess()) {
		commentBoardMap.setValue("EDU_BOARD_NO", eduApplyBoardMap.getValue("EDU_BOARD_NO"));
		selectCommentsms.send();
		grid.redraw();
	}
	grid.redraw();
}

//var host = app.getHost();
//	var hostAppInstance = host.getAppInstance();
//	var grid = app.lookup("grd1");
//	grid.addEventListener("cell-click", function(e){
//		var vcEmb = hostAppInstance.lookup("ea1");
//		var vsAppId = "detailBoard";
//		if(vsAppId == null) {
//		return alert("추가될 App이 존재하지 않습니다.");
//	}
//		cpr.core.App.load(vsAppId, function(/*cpr.core.App*/ loadedApp){
//		/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
//		if(vcEmb.getEmbeddedAppInstance()){
//			vcEmb.getEmbeddedAppInstance().dispose();
//		}
//		/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
//		if(loadedApp){						
//			/*초기값을 전달합니다.*/			
//			vcEmb.ready(function(/*cpr.controls.EmbeddedApp*/embApp){
//			embApp.initValue =e.row.getRowData().EDU_BOARD_NO;
//			})
//			/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
//			vcEmb.app = loadedApp;
//			var app1 = vcEmb.app;
//			app1.getInstances()
//		}
//	}); 
//	});
//	
//	var listBox = app.lookup("lbx1");
//	var comboBox = app.lookup("cmb1");
//	listBox.selectItemByValue("value1");
//	comboBox.selectItemByValue("value1");