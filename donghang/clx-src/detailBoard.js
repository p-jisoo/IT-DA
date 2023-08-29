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
	var hostAppInstance = host.getAppInstance();
	var initValue = host.initValue;
	//컨트롤러로 boardNo 값 보내기
	eduApplyBoardMap.setValue("EDU_BOARD_NO", initValue);
	console.log("eduApplyBoardMap setValue : " + eduApplyBoardMap.getValue("EDU_BOARD_NO"));
	commentBoardMap.setValue("EDU_BOARD_NO", initValue);
	console.log("commentBoardMap setValue : " + commentBoardMap.getValue("EDU_BOARD_NO"));
	selectCommentsms.send();
	selectsms.send();
	
	app.lookup("sessionCheck").send();
	console.log("hostAppInstance : " + hostAppInstance);
	
	//update 이동
	var updateButton = app.lookup("updateButton");
	updateButton.addEventListener("click", function(e) {
		var vcEmb = hostAppInstance.lookup("ea1");
		var vsAppId = "updateBoard";
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
				vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {
					embApp.initValue = eduApplyBoardMap.getValue("EDU_BOARD_NO");
				})
				/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
				vcEmb.app = loadedApp;
				var app1 = vcEmb.app;
				app1.getInstances()
			}
		});
	});
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
				vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {
					embApp.initValue = eduApplyBoardMap.getValue("EDU_BOARD_NO");
				})
				/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
				vcEmb.app = loadedApp;
				var app1 = vcEmb.app;
				app1.getInstances()
			}
		});
	});
	//delete 이동
	var deleteButton = app.lookup("deleteButton");
	deleteButton.addEventListener("click", function(e) {
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
				vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {
					embApp.initValue = eduApplyBoardMap.getValue("EDU_BOARD_NO");
				})
				/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
				vcEmb.app = loadedApp;
				var app1 = vcEmb.app;
				app1.getInstances()
			}
		});
	});
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
	eduApplyBoardMap.setValue("EDU_BOARD_START_PERIOD", udccomduodatepicker1.fromValue.substring(0, 10));
	eduApplyBoardMap.setValue("EDU_BOARD_END_PERIOD", udccomduodatepicker1.toValue.substring(0, 10));
	eduApplyBoardMap.setValue("EDU_BOARD_APPLY_START_PERIOD", udccomduodatepicker2.fromValue.substring(0, 10));
	eduApplyBoardMap.setValue("EDU_BOARD_APPLY_END_PERIOD", udccomduodatepicker2.toValue.substring(0, 10));
	eduApplyBoardMap.setValue("EDU_BOARD_ADDRESS", address.value);
	
	app.lookup("title").redraw();
	app.lookup("category").redraw();
	app.lookup("memberCount").redraw();
	app.lookup("udccomduodatepicker1").redraw();
	app.lookup("udccomduodatepicker2").redraw();
	app.lookup("address").redraw();
	/////////////////////jisoo//////////////////
	//지원
	var button = app.lookup("apply");
	//좋아요
	var any = JSON.parse(selectsms.xhr.responseText);
	if (any.eduApplyBoardMap.IsLike == 1) {
		eduApplyBoardMap.setValue("likeCount", "theme/images/heart-fillsvg.svg");
	} else {
		eduApplyBoardMap.setValue("likeCount", "theme/images/heart.svg");
	}
	
	//지원
	switch (any.eduApplyBoardMap.canApply) {
		case 0:
			eduApplyBoardMap.setValue("btnApply", "지원하기");
			break;
		case 1:
			eduApplyBoardMap.setValue("btnApply", "지원중");
			button.style.css("color", "green");
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
	}
	app.lookup("like").redraw();
	button.redraw();
	/////////////////////jisoo//////////////////
}
/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSelectCommentsmsSubmitSuccess(e) {
	var selectCommentsms = e.control;
	app.lookup("userId").redraw();
	var grid = app.lookup("grd1");
	var deleteColumnBox = app.lookup("deleteColumnBox");
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var commentBoardMap = app.lookup("commentBoardMap");
	var userIdValue = app.lookup("userId");
	var deleteButton = app.lookup("deleteButton");
	var updateButton = app.lookup("updateButton");
	var applyButton = app.lookup("applyButton");
	var commentContent = app.lookup("commentContent");
	var insertCommentButton = app.lookup("insertCommentButton");
	var image = app.lookup("like");
	var button = app.lookup("apply");
	
	console.log("userid " + userIdValue.value);
	console.log("eduboard id " + commentBoardMap.getValue("USER_ID"));
	if (commentBoardMap.getValue("USER_ID") !=null) {

		
		deleteButton.redraw();
		updateButton.redraw();
		commentContent.redraw();
		insertCommentButton.redraw();
	}
	if (userIdValue.value == commentBoardMap.getValue("USER_ID")) {
				deleteButton.visible = true;
		updateButton.visible = true;
		commentContent.visible = true;
		insertCommentButton.visible = true;
		console.log("userIdValue.value : ", userIdValue.value);
		
		if (commentBoardMap.getValue("USER_ID") != null) {
			applyButton.visible = true;
		}
	}
	//commentSet
	var commentListSet = app.lookup("commentListSet");
	//commentMap
	var commentBoardMap = app.lookup("commentBoardMap");
	for (var i = 1; i < grid.rowCount; i++) {
		console.log(grid.getCellValue(i, "USER_ID"));
		if (grid.getCellValue(i, "USER_ID") == userIdValue.value) {
			//			grid.updateRow(i, grdDelete.visible = true)
			deleteColumnBox.visible = true;
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
	dataMap.setValue("EDU_BOARD_START_PERIOD", udcExamDuoDatePicker.fromValue.substring(0, 10));
	dataMap.setValue("EDU_BOARD_END_PERIOD", udcExamDuoDatePicker.toValue.substring(0, 10));
	var udcExamDuoDatePicker2 = app.lookup("udccomduodatepicker2");
	dataMap.setValue("EDU_BOARD_APPLY_START_PERIOD", udcExamDuoDatePicker2.fromValue.substring(0, 10));
	dataMap.setValue("EDU_BOARD_APPLY_END_PERIOD", udcExamDuoDatePicker2.toValue.substring(0, 10));
	var addressinputBox = app.lookup("address");
	//	var detailAdressinputBox = app.lookup("detailAdress");
	//	
	//	if (detailAdressinputBox.value != null) {
	//		dataMap.setValue("EDU_BOARD_ADDRESS", addressinputBox.value + "-" + detailAdressinputBox.value);
	//	}
	submission.send()
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
}

///*
// * "기존 값" 버튼에서 click 이벤트 발생 시 호출.
// * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
// */
//function onButtonClick4(e) {
//	var button = e.control;
//	var submission = app.lookup("selectsms");
//	var dataMap = app.lookup("eduApplyBoardMap");
//	
//	app.lookup("title").redraw();
//	app.lookup("category").redraw();
//	app.lookup("memberCount").redraw();
//	app.lookup("content").redraw();
//	app.lookup("udccomduodatepicker1").redraw();
//	app.lookup("udccomduodatepicker2").redraw();
//	app.lookup("address").redraw();
//	submission.send()
//	
//}
//
///*
// * "기존 값" 버튼에서 click 이벤트 발생 시 호출.
// * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
// */
//function onButtonClick5(e) {
//	var button = e.control;
//	var submission = app.lookup("selectCommentsms");
//	var dataMap = app.lookup("commentBoardMap");
//	
//	app.lookup("userId").redraw();
//	app.lookup("commentContent").redraw();
//	
//	submission.send()
//}

/*
 * "댓글 수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
//function onButtonClick6(e) {
//	var button = e.control;
//	var submission = app.lookup("updateCommentsms");
//	var dataMap = app.lookup("commentBoardMap");
//	
//	submission.send()
//}

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
	var insertCommentButton = app.lookup("insertCommentButton");
	console.log("userId.value : " + userId.value);
	console.log("commentBoardMap value : " + commentBoardMap.getValue("USER_ID"));
	
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
	var commentBoardMap = app.lookup("commentBoardMap");
	var selectCommentsms = app.lookup("selectCommentsms");
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var commentContent = app.lookup("commentContent");
	commentBoardMap.setValue("EDU_BOARD_NO", eduApplyBoardMap.getValue("EDU_BOARD_NO"));
	
	var deleteCommentsms = app.lookup("deleteCommentsms");
	deleteCommentsms.send();
	
	var grid = app.lookup("grd1");
	if (deleteCommentsms.isSuccess()) {
		commentBoardMap.setValue("EDU_BOARD_NO", eduApplyBoardMap.getValue("EDU_BOARD_NO"));
		selectCommentsms.send();
		grid.redraw();
	}
	grid.redraw();
}
/*
 * 그리드에서 cell-click 이벤트 발생 시 호출.
 * Grid의 Cell 클릭시 발생하는 이벤트.
 */
function onGrd1CellClick2(e) {
	var grd1 = e.control;
	var grid = app.lookup("grd1");
	var selectCommentsms = app.lookup("selectCommentsms");
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var commentBoardMap = app.lookup("commentBoardMap");
	var deleteCommentsms = app.lookup("deleteCommentsms");
	var cellValue = grid.getCellValue(e.row.getIndex(), 1);
	console.log("cellValue : " + cellValue);
	commentBoardMap.setValue("EDU_BOARD_NO", eduApplyBoardMap.getValue("EDU_BOARD_NO"));
	commentBoardMap.setValue("EDU_APPLY_COMMENT_CONTENT", cellValue);
	
	deleteCommentsms.send();
	if (deleteCommentsms.isSuccess()) {
		commentBoardMap.setValue("EDU_BOARD_NO", eduApplyBoardMap.getValue("EDU_BOARD_NO"));
		selectCommentsms.send();
		grid.redraw();
	}
	grid.redraw();
}
/*
 * "목록" 버튼(listButton)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onListButtonClick(e) {
	var listButton = e.control;
	
}

///////////jisoo//////////////////////////////////////
//좋아요, 지원(여기서부터 지수 한거)

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSessionCheckSubmitSuccess2(e) {
	var sessionCheck = e.control;
	var image = app.lookup("like");
	var button = app.lookup("apply");
	console.log(sessionCheck.xhr.responseText.length);
	if (sessionCheck.xhr.responseText.length > 3) {
		console.log("로그인됨");
		image.enabled = true;
		button.visible = true;
		
	} else {
		console.log("노로그인");
		image.enabled = false;
		button.dispose();
	}
}

/*
 * 이미지에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onLikeClick2(e) {
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
function onLikeCaculateSubmitDone2(e) {
	var likeCaculate = e.control;
	var dataMap = app.lookup("eduApplyBoardMap");
	var image = app.lookup("like");
	image.dispose();
	
	console.log(dataMap.getValue("IsLike"));
	if (dataMap.getValue("IsLike") == 0) {
		var container = app.getContainer();
		var image_2 = new cpr.controls.Image("like");
		image_2.src = "theme/images/heart-fillsvg.svg";
		if (typeof onLikeClick2 == "function") {
			image_2.addEventListener("click", onLikeClick2);
		}
		container.addChild(image_2, {
			"top": "132px",
			"left": "187px",
			"width": "64px",
			"height": "68px"
		});
		image_2.redraw();
		dataMap.setValue("IsLike", 1);
	} else {
		var container = app.getContainer();
		var image_2 = new cpr.controls.Image("like");
		image_2.src = "theme/images/heart.svg";
		if (typeof onLikeClick2 == "function") {
			image_2.addEventListener("click", onLikeClick2);
		}
		container.addChild(image_2, {
			"top": "132px",
			"left": "187px",
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

function onApplyClick2(e) {
	var apply = e.control;
	var submission = app.lookup("applyEduBoard");
	var submission2 = app.lookup("cancelEduBoard");
	var dataMap = app.lookup("dm1");
	var host = app.getHost();
	dataMap.setValue("board_no", host.initValue);
	if (apply.value == "지원하기") {
		apply.dispose();
		submission.send();
	} else if (apply.value == "지원중") {
		console.log("지원취소");
		apply.dispose();
		submission2.send();
	} else {
		console.log(3);
	}
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onApplyEduBoardSubmitDone(e) {
	var applyEduBoard = e.control;
	var container = app.getContainer();
	var button_14 = new cpr.controls.Button("bt");
	button_14.value = "지원중";
	button_14.style.css({
		"color": "#F14747"
	});
	container.addChild(button_14, {
		"top": "586px",
		"left": "1403px",
		"width": "180px",
		"height": "40px"
	});
	button_14.addEventListener("click", function(e) {
		onApplyClick2(e);
	});
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onCancelEduBoardSubmitDone2(e) {
	var cancelEduBoard = e.control;
	var container = app.getContainer();
	var button_14 = new cpr.controls.Button("bt");
	button_14.value = "지원하기";
	button_14.style.css({
		"color": "#15C729"
	});
	container.addChild(button_14, {
		"top": "586px",
		"left": "1403px",
		"width": "180px",
		"height": "40px"
	});
	button_14.addEventListener("click", function(e) {
		onApplyClick2(e);
	});
}
///////////jisoo//////////////////////////////////////