/************************************************
 * detailBoard.js
 * Created at 2023. 8. 8. 오전 10:04:40.
 *
 * @author USER
 ************************************************/
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
	commentBoardMap.setValue("EDU_BOARD_NO", initValue);
	selectCommentsms.send();
	selectsms.send();
	
	app.lookup("sessionCheck").send();
	
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
	var commentBoardMap = app.lookup("commentBoardMap");
	var deleteButton = app.lookup("deleteButton");
	var updateButton = app.lookup("updateButton");
	var commentContent = app.lookup("commentContent");
	var insertCommentButton = app.lookup("insertCommentButton");
	var deleteColumnBox = app.lookup("deleteColumnBox");
	var grd1 = app.lookup("grd1");
	
	if (eduApplyBoardMap.getValue("USER_ID") == commentBoardMap.getValue("USER_ID")) {
		deleteButton.visible = true;
		updateButton.visible = true;
		deleteColumnBox.visible = true;
		
		deleteButton.redraw();
		updateButton.redraw();
		deleteColumnBox.redraw();
		grd1.redraw();
	}
	if (userId.value.length > 2) {
		commentContent.visible = true;
		insertCommentButton.visible = true;
		
		//		commentContent.redraw();
		//		insertCommentButton.redraw();
	}
	
	eduApplyBoardMap.setValue("EDU_BOARD_TITLE", title.value);
	eduApplyBoardMap.setValue("EDU_BOARD_CATEGORY", category.value);
	eduApplyBoardMap.setValue("EDU_BOARD_MAX_MEMBER_COUNT", memberCount.value);
	eduApplyBoardMap.setValue("EDU_BOARD_CONTENT", content.value);
	var fromValueList = udccomduodatepicker1.fromValue.split(" ");
	var toValueList = udccomduodatepicker1.toValue.split(" ");
	var fromValueList2 = udccomduodatepicker2.fromValue.split(" ");
	var toValueList2 = udccomduodatepicker2.toValue.split(" ");
	eduApplyBoardMap.setValue("EDU_BOARD_START_PERIOD", fromValueList[0]);
	eduApplyBoardMap.setValue("EDU_BOARD_END_PERIOD", toValueList[0]);
	eduApplyBoardMap.setValue("EDU_BOARD_APPLY_START_PERIOD", fromValueList2[0]);
	eduApplyBoardMap.setValue("EDU_BOARD_APPLY_END_PERIOD", toValueList2[0]);
	eduApplyBoardMap.setValue("EDU_BOARD_ADDRESS", address.value);
	
	app.lookup("title").redraw();
	app.lookup("category").redraw();
	app.lookup("memberCount").redraw();
	app.lookup("content").redraw();
	app.lookup("udccomduodatepicker1").redraw();
	app.lookup("udccomduodatepicker2").redraw();
	app.lookup("address").redraw();
	/////////////////////jisoo//////////////////
	//지원
	var button = app.lookup("apply");
	//좋아요
	var output = app.lookup("numberLike");
	var any = JSON.parse(selectsms.xhr.responseText);
	eduApplyBoardMap.setValue("countLike",any.eduApplyBoardMap.countLike);
	output.redraw();
	if (any.eduApplyBoardMap.IsLike >= 1) {
		eduApplyBoardMap.setValue("likeCount", "theme/images/img/redheart.png");
	} else {
		eduApplyBoardMap.setValue("likeCount", "theme/images/img/whiteheart.png");
	}
	
	//지원
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
			eduApplyBoardMap.setValue("btnApply", "본인교육");
			button.enabled = false;
			break;
		case 3:
			eduApplyBoardMap.setValue("btnApply", "모집마감");
			button.style.css("color", "#F14747");
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
	
	var grid = app.lookup("grd1");
	var deleteColumnBox = app.lookup("deleteColumnBox");
	var eduApplyBoardMap = app.lookup("eduApplyBoardMap");
	var commentBoardMap = app.lookup("commentBoardMap");
	var commentListSet = app.lookup("commentListSet");
	var userId = app.lookup("userId");
	var deleteButton = app.lookup("deleteButton");
	var updateButton = app.lookup("updateButton");
	var commentContent = app.lookup("commentContent");
	var insertCommentButton = app.lookup("insertCommentButton");
	var image = app.lookup("like");
	var button = app.lookup("apply");
	userId.redraw();
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
	var udcExamDuoDatePicker2 = app.lookup("udccomduodatepicker2");
	var fromValueList = udcExamDuoDatePicker.fromValue.split(" ");
	var toValueList = udcExamDuoDatePicker.toValue.split(" ");
	var fromValueList2 = udcExamDuoDatePicker2.fromValue.split(" ");
	var toValueList2 = udcExamDuoDatePicker2.toValue.split(" ");
	dataMap.setValue("EDU_BOARD_START_PERIOD", fromValueList[0]);
	dataMap.setValue("EDU_BOARD_END_PERIOD", toValueList[0]);
	dataMap.setValue("EDU_BOARD_APPLY_START_PERIOD", fromValueList2[0]);
	dataMap.setValue("EDU_BOARD_APPLY_END_PERIOD", toValueList2[0]);
	var addressinputBox = app.lookup("address");
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
	alert("삭제 되었습니다");
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
	var insertCommentButton = app.lookup("insertCommentButton");
	var userIdMap = commentBoardMap.getValue("USER_ID");
	var grid = app.lookup("grd1");
	
	commentBoardMap.setValue("USER_ID", userId.value);
	commentBoardMap.setValue("EDU_APPLY_COMMENT_CONTENT", commentContent.value);
	commentBoardMap.setValue("EDU_BOARD_NO", eduApplyBoardMap.getValue("EDU_BOARD_NO"));
	
	if (commentContent.value.length < 5) {
		alert(" 댓글을 5자 이상 작성해주세요");
	} else {
		createCommentsms.send();
		
		if (createCommentsms.isSuccess()) {
			commentBoardMap.setValue("EDU_BOARD_NO", eduApplyBoardMap.getValue("EDU_BOARD_NO"));
			selectCommentsms.send();
			grid.redraw();
		}
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
	var deleteCommentsms = app.lookup("deleteCommentsms");
	var grid = app.lookup("grd1");
	commentBoardMap.setValue("EDU_BOARD_NO", eduApplyBoardMap.getValue("EDU_BOARD_NO"));
	deleteCommentsms.send();
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
	
	if (sessionCheck.xhr.responseText.length > 3) {
		image.enabled = true;
		button.visible = true;
	} else {
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
	var output = app.lookup("numberLike");
	image.dispose();
	if (dataMap.getValue("IsLike") == 0) {
		var container = app.getContainer();
		var image_2 = new cpr.controls.Image("like");
		image_2.src = "theme/images/img/redheart.png";
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
		image_2.src = "theme/images/img/whiteheart.png";
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
	var any = JSON.parse(likeCaculate.xhr.responseText);
	dataMap.setValue("countLike", any.count);
	output.redraw();
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
		apply.dispose();
		submission2.send();
	} else {}
}

/*
 * 서브미션에서 submit-done 이벤트 발생 시 호출.
 * 응답처리가 모두 종료되면 발생합니다.
 */
function onApplyEduBoardSubmitDone(e) {
	var applyEduBoard = e.control;
		app.openDialog("applyDialog", {
		width: 500,
		height: 350,
		headerVisible: false
	}, function(dialog) {
		dialog.ready(function(dialogApp) {
			dialog.initValue={param : "등록"};
		});
	});
	var container = app.getContainer();
	var button_14 = new cpr.controls.Button("bt");
	button_14.value = "지원중";
	button_14.style.css({
		"color": "#F14747",
		"background-image" : "none"
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
		app.openDialog("applyDialog", {
		width: 500,
		height: 350,
		headerVisible: false
	}, function(dialog) {
		dialog.ready(function(dialogApp) {
			dialog.initValue={param : "취소"};
		});
	});
	button_14.value = "지원하기";
	button_14.style.css({
		"color": "#15C729",
		"background-image" : "none"
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