/*
 * App URI: detailBoard
 * Source Location: detailBoard.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("detailBoard", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
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
				eduApplyBoardMap.setValue("EDU_BOARD_NO", '1111');
				submission.send();
				commentBoardMap.setValue("EDU_BOARD_NO", '1111');
				commentBoardMap.setValue("USER_ID", '1234');
				submission2.send();
				
				var likeable = app.lookup("sessionCheck");
				likeable.send();

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
				
				//comment
				var commentBoardMap = app.lookup("commentBoardMap");
				
				var userId = app.lookup("userId");
				var commentContent = app.lookup("commentContent");
				
				commentBoardMap.setValue("EDU_APPLY_COMMENT_CONTENT", commentContent.value);
				commentBoardMap.setValue("USER_ID", userId.value);
				
				app.lookup("userId").redraw();
				app.lookup("commentContent").redraw();
				
				
				
				//like
				var image = app.lookup("like");
				var responseText = selectsms.xhr.responseText;
				var any = JSON.parse(responseText);
				console.log("좋아요",any.eduApplyBoardMap.isLike);
				if(any.eduApplyBoardMap.isLike){
					image.src ="theme/images/heart-fillsvg.svg";
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
				window.location.href = "toBoardList.do";
			}

			/*
			 * 이미지에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */


			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSessionCheckSubmitSuccess(e){
				var sessionCheck = e.control;
				var image = app.lookup("like");
				console.log(sessionCheck.xhr.responseText.length);
				if(sessionCheck.xhr.responseText.length>3){
					console.log("로그인됨");
					image.enabled = true;
					console.log(image.readOnly);
				}else {
					console.log("노로그인");
					image.enabled = false;
					console.log(image.readOnly);
				}
			}


			/*
			 * 이미지에서 item-click 이벤트 발생 시 호출.
			 * 이미지 영역 아이템 클릭시 발생하는 이벤트.
			 */
			function onLikeItemClick(e){
				var like = e.control;
				console.log("1");
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("boardList");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "EDU_BOARD_NO",
						"dataType": "number"
					},
					{"name": "EDU_BOARD_TITLE"},
					{"name": "EDU_BOARD_START_PERIOD"},
					{"name": "EDU_BOARD_END_PERIOD"},
					{"name": "EDU_BOARD_APPLY_START_PERIOD"},
					{"name": "EDU_BOARD_APPLY_END_PERIOD"},
					{
						"name": "EDU_BOARD_MEMBER_COUNT",
						"dataType": "number"
					},
					{"name": "EDU_BOARD_STATUS"},
					{"name": "EDU_BOARD_ADDRESS"},
					{"name": "EDU_BOARD_CATEGORY"},
					{"name": "EDU_BOARD_CONTENT"}
				]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("eduApplyBoardMap");
			dataMap_1.parseData({
				"columns" : [
					{
						"name": "EDU_BOARD_TITLE",
						"dataType": "string"
					},
					{"name": "EDU_BOARD_START_PERIOD"},
					{
						"name": "EDU_BOARD_END_PERIOD",
						"dataType": "string"
					},
					{
						"name": "EDU_BOARD_APPLY_START_PERIOD",
						"dataType": "string"
					},
					{"name": "EDU_BOARD_APPLY_END_PERIOD"},
					{
						"name": "EDU_BOARD_MAX_MEMBER_COUNT",
						"dataType": "string"
					},
					{"name": "EDU_BOARD_ADDRESS"},
					{"name": "EDU_BOARD_CATEGORY"},
					{"name": "EDU_BOARD_CONTENT"},
					{
						"name": "USER_ID",
						"defaultValue": ""
					},
					{"name": "EDU_BOARD_NO"},
					{
						"name": "IsLike",
						"dataType": "number"
					}
				]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("commentBoardMap");
			dataMap_2.parseData({
				"columns" : [
					{
						"name": "EDU_APPLY_COMMENT_CONTENT",
						"dataType": "string",
						"defaultValue": ""
					},
					{
						"name": "EDU_BOARD_NO",
						"dataType": "string",
						"defaultValue": ""
					},
					{
						"name": "USER_ID",
						"dataType": "string",
						"defaultValue": ""
					}
				]
			});
			app.register(dataMap_2);
			
			var dataMap_3 = new cpr.data.DataMap("dm1");
			dataMap_3.parseData({});
			app.register(dataMap_3);
			var submission_1 = new cpr.protocols.Submission("updatesms");
			submission_1.action = "updateBoard.do";
			submission_1.addRequestData(dataMap_1);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("deletesms");
			submission_2.action = "deleteBoard.do";
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("selectsms");
			submission_3.method = "post";
			submission_3.action = "selectBoardByBoardNo.do";
			submission_3.addRequestData(dataMap_1);
			submission_3.addResponseData(dataMap_1, false);
			if(typeof onSelectsmsSubmitSuccess == "function") {
				submission_3.addEventListener("submit-success", onSelectsmsSubmitSuccess);
			}
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("updateCommentsms");
			submission_4.action = "updateCommentBoard.do";
			submission_4.addRequestData(dataMap_2);
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("deleteCommentsms");
			submission_5.action = "deleteComment.do";
			app.register(submission_5);
			
			var submission_6 = new cpr.protocols.Submission("selectCommentsms");
			submission_6.action = "selectCommentBoardByBoardNo.do";
			submission_6.addRequestData(dataMap_2);
			submission_6.addResponseData(dataMap_2, false);
			app.register(submission_6);
			
			var submission_7 = new cpr.protocols.Submission("createCommentsms");
			submission_7.action = "createComment.do";
			submission_7.addRequestData(dataMap_2);
			app.register(submission_7);
			
			var submission_8 = new cpr.protocols.Submission("checkLike");
			app.register(submission_8);
			
			var submission_9 = new cpr.protocols.Submission("sessionCheck");
			submission_9.action = "loginSessionMember";
			if(typeof onSessionCheckSubmitProgress == "function") {
				submission_9.addEventListener("submit-progress", onSessionCheckSubmitProgress);
			}
			if(typeof onSessionCheckSubmitSuccess == "function") {
				submission_9.addEventListener("submit-success", onSessionCheckSubmitSuccess);
			}
			app.register(submission_9);
			app.supportMedia("all and (min-width: 1920px)", "notebook");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var button_1 = new cpr.controls.Button();
			button_1.value = "목록";
			button_1.style.css({
				"background-color" : "#4682A9",
				"font-size" : "18px"
			});
			if(typeof onButtonClick7 == "function") {
				button_1.addEventListener("click", onButtonClick7);
			}
			container.addChild(button_1, {
				"top": "594px",
				"left": "1208px",
				"width": "180px",
				"height": "40px"
			});
			
			var group_1 = new cpr.controls.Container();
			group_1.style.setClasses(["cl-form-group"]);
			group_1.style.css({
				"font-size" : "18px"
			});
			var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
			group_1.setBindContext(dataMapContext_1);
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "5px";
			formLayout_1.rightMargin = "5px";
			formLayout_1.bottomMargin = "5px";
			formLayout_1.leftMargin = "5px";
			formLayout_1.horizontalSpacing = "10px";
			formLayout_1.verticalSpacing = "10px";
			formLayout_1.horizontalSeparatorWidth = 1;
			formLayout_1.verticalSeparatorWidth = 1;
			formLayout_1.setColumns(["100px", "1fr", "100px", "1fr"]);
			formLayout_1.setUseColumnShade(0, true);
			formLayout_1.setUseColumnShade(2, true);
			formLayout_1.setRows(["45px", "45px", "45px"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "교육기간";
				output_1.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "모집기간";
				output_2.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				container.addChild(output_2, {
					"colIndex": 2,
					"rowIndex": 0
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "모집인원";
				output_3.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				container.addChild(output_3, {
					"colIndex": 0,
					"rowIndex": 1
				});
				var output_4 = new cpr.controls.Output();
				output_4.value = "교육장소";
				output_4.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				container.addChild(output_4, {
					"colIndex": 0,
					"rowIndex": 2
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "교육분야";
				output_5.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				container.addChild(output_5, {
					"colIndex": 2,
					"rowIndex": 1
				});
				var inputBox_1 = new cpr.controls.InputBox("memberCount");
				inputBox_1.placeholder = "모집 인원을 입력하세요";
				inputBox_1.inputFilter = "[0-9]";
				inputBox_1.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
				inputBox_1.setBindContext(dataMapContext_2);
				inputBox_1.bind("value").toDataColumn("EDU_BOARD_MAX_MEMBER_COUNT");
				if(typeof onIpb3Click == "function") {
					inputBox_1.addEventListener("click", onIpb3Click);
				}
				container.addChild(inputBox_1, {
					"colIndex": 1,
					"rowIndex": 1
				});
				var inputBox_2 = new cpr.controls.InputBox("category");
				inputBox_2.placeholder = "교육 분야를 입력하세요";
				inputBox_2.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				var dataMapContext_3 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
				inputBox_2.setBindContext(dataMapContext_3);
				inputBox_2.bind("value").toDataColumn("EDU_BOARD_CATEGORY");
				container.addChild(inputBox_2, {
					"colIndex": 3,
					"rowIndex": 1
				});
				var userDefinedControl_1 = new udc.exam.udcExamDuoDatePicker("udccomduodatepicker1");
				userDefinedControl_1.useAutoSelect = true;
				userDefinedControl_1.selectOption = "day";
				userDefinedControl_1.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				userDefinedControl_1.bind("fromValue").toDataColumn("EDU_BOARD_START_PERIOD");
				userDefinedControl_1.bind("toValue").toDataColumn("EDU_BOARD_END_PERIOD");
				container.addChild(userDefinedControl_1, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var userDefinedControl_2 = new udc.exam.udcExamDuoDatePicker("udccomduodatepicker2");
				userDefinedControl_2.style.css({
					"font-size" : "16px"
				});
				userDefinedControl_2.bind("fromValue").toDataColumn("EDU_BOARD_APPLY_START_PERIOD");
				userDefinedControl_2.bind("toValue").toDataColumn("EDU_BOARD_APPLY_END_PERIOD");
				container.addChild(userDefinedControl_2, {
					"colIndex": 3,
					"rowIndex": 0
				});
				var group_2 = new cpr.controls.Container();
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.scrollable = false;
				formLayout_2.topMargin = "5px";
				formLayout_2.rightMargin = "5px";
				formLayout_2.bottomMargin = "5px";
				formLayout_2.leftMargin = "5px";
				formLayout_2.horizontalSpacing = "10px";
				formLayout_2.verticalSpacing = "10px";
				formLayout_2.setColumns(["1fr", "1fr", "150px"]);
				formLayout_2.setRows(["1fr"]);
				group_2.setLayout(formLayout_2);
				(function(container){
					var inputBox_3 = new cpr.controls.InputBox("address");
					inputBox_3.placeholder = "주소를 입력 해주세요";
					inputBox_3.style.css({
						"font-size" : "16px",
						"text-align" : "center"
					});
					inputBox_3.bind("value").toDataColumn("EDU_BOARD_ADDRESS");
					container.addChild(inputBox_3, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var inputBox_4 = new cpr.controls.InputBox("detailAdress");
					inputBox_4.placeholder = "상세 주소를 입력 해주세요";
					inputBox_4.style.css({
						"font-size" : "16px",
						"text-align" : "center"
					});
					container.addChild(inputBox_4, {
						"colIndex": 1,
						"rowIndex": 0,
						"colSpan": 1,
						"rowSpan": 1
					});
					var button_2 = new cpr.controls.Button();
					button_2.value = "주소찾기";
					button_2.style.css({
						"font-size" : "18px"
					});
					if(typeof onButtonClick3 == "function") {
						button_2.addEventListener("click", onButtonClick3);
					}
					container.addChild(button_2, {
						"colIndex": 2,
						"rowIndex": 0
					});
				})(group_2);
				container.addChild(group_2, {
					"colIndex": 1,
					"rowIndex": 2,
					"colSpan": 3,
					"rowSpan": 1
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "132px",
				"left": "261px",
				"width": "1511px",
				"height": "163px"
			});
			
			var inputBox_5 = new cpr.controls.InputBox("content");
			inputBox_5.placeholder = "     내용을 입력하세요";
			inputBox_5.style.css({
				"font-size" : "16px",
				"text-align" : "left"
			});
			var dataMapContext_4 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
			inputBox_5.setBindContext(dataMapContext_4);
			inputBox_5.bind("value").toDataColumn("EDU_BOARD_CONTENT");
			container.addChild(inputBox_5, {
				"top": "294px",
				"left": "262px",
				"width": "1510px",
				"height": "283px"
			});
			
			var inputBox_6 = new cpr.controls.InputBox("title");
			inputBox_6.placeholder = "     제목을 입력하세요";
			inputBox_6.style.css({
				"font-size" : "18px",
				"text-align" : "left"
			});
			var dataMapContext_5 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
			inputBox_6.setBindContext(dataMapContext_5);
			inputBox_6.bind("value").toDataColumn("EDU_BOARD_TITLE");
			if(typeof onIpb6ValueChange == "function") {
				inputBox_6.addEventListener("value-change", onIpb6ValueChange);
			}
			if(typeof onIpb6BeforeValueChange == "function") {
				inputBox_6.addEventListener("before-value-change", onIpb6BeforeValueChange);
			}
			if(typeof onIpb6Clear == "function") {
				inputBox_6.addEventListener("clear", onIpb6Clear);
			}
			container.addChild(inputBox_6, {
				"top": "72px",
				"left": "260px",
				"width": "1509px",
				"height": "50px"
			});
			
			var button_3 = new cpr.controls.Button();
			button_3.value = "수정";
			button_3.style.css({
				"background-color" : "#4682A9",
				"font-size" : "18px"
			});
			if(typeof onButtonClick == "function") {
				button_3.addEventListener("click", onButtonClick);
			}
			container.addChild(button_3, {
				"top": "594px",
				"left": "1398px",
				"width": "180px",
				"height": "40px"
			});
			
			var output_6 = new cpr.controls.Output();
			output_6.value = "\t교육 모집 등록";
			output_6.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#d5d5d5",
				"border-top-width" : "1px",
				"border-right-width" : "1px",
				"border-left-color" : "#d5d5d5",
				"font-size" : "20px",
				"border-right-color" : "#d5d5d5",
				"border-left-width" : "1px",
				"border-top-style" : "solid",
				"background-color" : "#FFFFFF",
				"border-left-style" : "solid",
				"border-bottom-width" : "1px",
				"border-top-color" : "#d5d5d5",
				"border-bottom-style" : "solid"
			});
			container.addChild(output_6, {
				"top": "22px",
				"left": "260px",
				"width": "1509px",
				"height": "40px"
			});
			
			var button_4 = new cpr.controls.Button();
			button_4.value = "삭제";
			button_4.style.css({
				"background-color" : "#4682A9",
				"font-size" : "18px"
			});
			if(typeof onButtonClick2 == "function") {
				button_4.addEventListener("click", onButtonClick2);
			}
			container.addChild(button_4, {
				"top": "594px",
				"left": "1589px",
				"width": "180px",
				"height": "40px"
			});
			
			var button_5 = new cpr.controls.Button();
			button_5.value = "기존 값";
			if(typeof onButtonClick4 == "function") {
				button_5.addEventListener("click", onButtonClick4);
			}
			container.addChild(button_5, {
				"top": "622px",
				"left": "370px",
				"width": "100px",
				"height": "20px"
			});
			
			var output_7 = new cpr.controls.Output();
			output_7.value = "댓글";
			output_7.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#d5d5d5",
				"border-top-width" : "1px",
				"border-right-width" : "1px",
				"border-left-color" : "#d5d5d5",
				"font-size" : "20px",
				"border-right-color" : "#d5d5d5",
				"border-left-width" : "1px",
				"border-top-style" : "solid",
				"background-color" : "#FFFFFF",
				"border-left-style" : "solid",
				"border-bottom-width" : "1px",
				"border-top-color" : "#d5d5d5",
				"border-bottom-style" : "solid",
				"text-align" : "center"
			});
			container.addChild(output_7, {
				"top": "652px",
				"left": "260px",
				"width": "197px",
				"height": "40px"
			});
			
			var button_6 = new cpr.controls.Button();
			button_6.value = "댓글 등록";
			container.addChild(button_6, {
				"top": "778px",
				"left": "1450px",
				"width": "100px",
				"height": "20px"
			});
			
			var button_7 = new cpr.controls.Button();
			button_7.value = "댓글 삭제";
			container.addChild(button_7, {
				"top": "777px",
				"left": "1559px",
				"width": "100px",
				"height": "20px"
			});
			
			var button_8 = new cpr.controls.Button();
			button_8.value = "댓글 수정";
			if(typeof onButtonClick6 == "function") {
				button_8.addEventListener("click", onButtonClick6);
			}
			container.addChild(button_8, {
				"top": "777px",
				"left": "1669px",
				"width": "100px",
				"height": "20px"
			});
			
			var button_9 = new cpr.controls.Button();
			button_9.value = "댓글 기존 값";
			if(typeof onButtonClick5 == "function") {
				button_9.addEventListener("click", onButtonClick5);
			}
			container.addChild(button_9, {
				"top": "622px",
				"left": "260px",
				"width": "100px",
				"height": "20px"
			});
			
			var group_3 = new cpr.controls.Container();
			group_3.style.setClasses(["cl-form-group"]);
			var formLayout_3 = new cpr.controls.layouts.FormLayout();
			formLayout_3.scrollable = false;
			formLayout_3.topMargin = "5px";
			formLayout_3.rightMargin = "5px";
			formLayout_3.bottomMargin = "5px";
			formLayout_3.leftMargin = "5px";
			formLayout_3.horizontalSpacing = "10px";
			formLayout_3.verticalSpacing = "10px";
			formLayout_3.horizontalSeparatorWidth = 1;
			formLayout_3.verticalSeparatorWidth = 1;
			formLayout_3.setColumns(["200px", "1fr", "180px"]);
			formLayout_3.setRows(["60px"]);
			group_3.setLayout(formLayout_3);
			(function(container){
				var inputBox_7 = new cpr.controls.InputBox("userId");
				inputBox_7.readOnly = true;
				inputBox_7.placeholder = "USER_ID";
				inputBox_7.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				inputBox_7.bind("value").toDataMap(app.lookup("commentBoardMap"), "USER_ID");
				container.addChild(inputBox_7, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var button_10 = new cpr.controls.Button();
				button_10.value = "댓글쓰기";
				button_10.style.css({
					"background-color" : "#4682A9",
					"font-size" : "18px"
				});
				container.addChild(button_10, {
					"colIndex": 2,
					"rowIndex": 0
				});
				var inputBox_8 = new cpr.controls.InputBox("commentContent");
				inputBox_8.placeholder = "댓글을 입력해주세요";
				inputBox_8.style.css({
					"font-size" : "16px"
				});
				inputBox_8.bind("value").toDataMap(app.lookup("commentBoardMap"), "EDU_APPLY_COMMENT_CONTENT");
				container.addChild(inputBox_8, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_3);
			container.addChild(group_3, {
				"top": "700px",
				"left": "248px",
				"width": "1521px",
				"height": "68px"
			});
			
			var image_1 = new cpr.controls.Image("like");
			image_1.enabled = true;
			image_1.src = "theme/images/heart.svg";
			if(typeof onLikeItemClick == "function") {
				image_1.addEventListener("item-click", onLikeItemClick);
			}
			container.addChild(image_1, {
				"top": "239px",
				"left": "202px",
				"width": "47px",
				"height": "46px"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
			if(typeof onBodyLoad2 == "function"){
				app.addEventListener("load", onBodyLoad2);
			}
		}
	});
	app.title = "detailBoard";
	cpr.core.Platform.INSTANCE.register(app);
})();
