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
function onBodyLoad2(e){
	var submission = app.lookup("selectsms");
	var submission2 = app.lookup("selectCommentsms");
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var commentBoardMap = app.lookup("commentBoardMap");
	var host = app.getHost();
	console.log(host.initValue);
	eduApplyBoardMap.setValue("EDU_BOARD_NO", host.initValue);
	submission.send();
	commentBoardMap.setValue("EDU_BOARD_NO", '1111');
	commentBoardMap.setValue("USER_ID", '1234');
	submission2.send();
	var likeable = app.lookup("sessionCheck");
	likeable.send();
//	var host = app.getHost();
//	console.log("번호",host.initValue);
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
	
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	//지원
	var button = app.lookup("apply");
	
	
	eduApplyBoardMap.setValue("EDU_BOARD_TITLE", title.value);
	eduApplyBoardMap.setValue("EDU_BOARD_CATEGORY", category.value);
	eduApplyBoardMap.setValue("EDU_BOARD_MAX_MEMBER_COUNT", memberCount.value);
	eduApplyBoardMap.setValue("EDU_BOARD_CONTENT", content.value);
	eduApplyBoardMap.setValue("EDU_BOARD_START_PERIOD", udccomduodatepicker1.fromValue);
	eduApplyBoardMap.setValue("EDU_BOARD_END_PERIOD", udccomduodatepicker1.toValue);
	eduApplyBoardMap.setValue("EDU_BOARD_APPLY_START_PERIOD", udccomduodatepicker2.fromValue);
	eduApplyBoardMap.setValue("EDU_BOARD_APPLY_END_PERIOD", udccomduodatepicker2.toValue);
	eduApplyBoardMap.setValue("EDU_BOARD_ADDRESS", address.value);
	
	
	//좋아요 라이크 지수
	var any = JSON.parse(selectsms.xhr.responseText);
	if(any.eduApplyBoardMap.IsLike==1){
		eduApplyBoardMap.setValue("likeCount", "theme/images/heart-fillsvg.svg");
	}else{
		eduApplyBoardMap.setValue("likeCount", "theme/images/heart.svg");
	}
	
   	console.log("어플라이",any.eduApplyBoardMap.canApply);
   	switch (any.eduApplyBoardMap.canApply) {
  case 0:
    	eduApplyBoardMap.setValue("btnApply", "지원하기");
    	button.style.css("color", "#15C729");
    break;
  case 1:
    	eduApplyBoardMap.setValue("btnApply", "지원중");
    		button.style.css("color", "#F14747");
    break;
  case 2:
    	eduApplyBoardMap.setValue("btnApply", "내글이다");
    	button.enabled = false;
    break;
   case 3:
    	eduApplyBoardMap.setValue("btnApply", "모집마감");
    	button.style.css("color", "red");
    	button.enabled = false;
    break;
    	//좋아요 라이크 지수
}
   	button.redraw();
	
	app.lookup("title").redraw();
	app.lookup("category").redraw();
	app.lookup("memberCount").redraw();
	app.lookup("content").redraw();
	app.lookup("udccomduodatepicker1").redraw();
	app.lookup("udccomduodatepicker2").redraw();
	app.lookup("address").redraw();
	app.lookup("like").redraw();
	
	//comment
	var commentBoardMap = app.lookup("commentBoardMap");
	
	var userId = app.lookup("userId");
	var commentContent = app.lookup("commentContent");
	
	commentBoardMap.setValue("EDU_APPLY_COMMENT_CONTENT", commentContent.value);
	commentBoardMap.setValue("USER_ID", userId.value);
	
	app.lookup("userId").redraw();
	app.lookup("commentContent").redraw();
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
	console.log("fromValue", udcExamDuoDatePicker.fromValue);
	console.log("toValue", udcExamDuoDatePicker.toValue);
	var addressinputBox = app.lookup("address");
	var detailAdressinputBox = app.lookup("detailAdress");
	
	if (detailAdressinputBox.value != null) {
		dataMap.setValue("EDU_BOARD_ADDRESS", addressinputBox.value + "-" + detailAdressinputBox.value);
	}
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
}


//좋아요 지수
/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSessionCheckSubmitSuccess(e){
	var sessionCheck = e.control;
	var image = app.lookup("like");
	var button = app.lookup("apply");
	console.log(sessionCheck.xhr.responseText.length);
	if(sessionCheck.xhr.responseText.length>3){
		console.log("로그인됨");
		image.enabled = true;
		button.visible= true;
		
	}else {
		console.log("노로그인");
		image.enabled = false;
		button.dispose();
	}
}

/*
 * 이미지에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onLikeClick2(e){
	var like = e.control;
	var submission = app.lookup("likeCaculate");
	var dataMap = app.lookup("dm1");
	var host = app.getHost();
	console.log(host.initValue);
	dataMap.setValue("board_no", host.initValue);
	submission.send();
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onLikeCaculateSubmitDone(e){
	var likeCaculate = e.control;
	var dataMap = app.lookup("eduApplyBoardMap");
	var image = app.lookup("like");
	image.dispose();
	
	console.log(dataMap.getValue("IsLike"));
		if(dataMap.getValue("IsLike")==0){
	var container = app.getContainer();
	var image_2 = new cpr.controls.Image("like");
			image_2.src = "theme/images/heart-fillsvg.svg";
			if(typeof onLikeClick2 == "function") {
				image_2.addEventListener("click", onLikeClick2);
			}
			container.addChild(image_2, {
				"top": "234px",
				"left": "185px",
				"width": "64px",
				"height": "68px"
			});
			image_2.redraw();
			dataMap.setValue("IsLike", 1);
	}else{
	var container = app.getContainer();
	var image_2 = new cpr.controls.Image("like");
			image_2.src = "theme/images/heart.svg";
			if(typeof onLikeClick2 == "function") {
				image_2.addEventListener("click", onLikeClick2);
			}
			container.addChild(image_2, {
				"top": "234px",
				"left": "185px",
				"width": "64px",
				"height": "68px"
			});
			image_2.redraw();
			dataMap.setValue("IsLike", 0);
	}
}


/*
 * "지원하기" 버튼(apply)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */


function onApplyClick(e){
	var apply = e.control;
	var submission = app.lookup("applyEduBoard");
	var submission2 = app.lookup("cancelEduBoard");
	var dataMap = app.lookup("dm1");
	var host = app.getHost();
	dataMap.setValue("board_no", host.initValue);
	if(apply.value=="지원하기"){
		apply.dispose();
		submission.send();
	} else if (apply.value=="지원중"){
		console.log("지원취소");
		apply.dispose();
		submission2.send();
	}else{
		console.log(3);
	}
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onApplyEduBoardSubmitDone2(e){
	var applyEduBoard = e.control;
	var container = app.getContainer();
	var button_14 = new cpr.controls.Button("bt");
			button_14.value = "지원중";
			button_14.style.css({
				"color" : "#F14747"
			});
			container.addChild(button_14, {
				"top": "592px",
				"left": "1060px",
				"width": "138px",
				"height": "44px"
			});
		button_14.addEventListener("click", function(e){
			onApplyClick(e);
		});
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onCancelEduBoardSubmitDone2(e){
	var cancelEduBoard = e.control;
	var container = app.getContainer();
	var button_14 = new cpr.controls.Button("bt");
			button_14.value = "지원하기";
			button_14.style.css({
				"color" : "#15C729"
			});
			container.addChild(button_14, {
				"top": "592px",
				"left": "1060px",
				"width": "138px",
				"height": "44px"
		});
		button_14.addEventListener("click", function(e){
			onApplyClick(e);
		});
}
//좋아요 지수