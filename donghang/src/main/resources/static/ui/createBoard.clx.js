/*
 * App URI: createBoard
 * Source Location: createBoard.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4640), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("createBoard", { 
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
						"defaultValue": "1234"
					}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("createsms");
			submission_1.action = "createBoard.do";
			submission_1.addRequestData(dataMap_1);
			app.register(submission_1);
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
			var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
			container.setBindContext(dataMapContext_1);
			
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
			container.addChild(button_1, {
				"top": "779px",
				"left": "1340px",
				"width": "180px",
				"height": "50px"
			});
			
			var group_1 = new cpr.controls.Container();
			group_1.style.setClasses(["cl-form-group"]);
			group_1.style.css({
				"font-size" : "18px"
			});
			var dataMapContext_2 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
			group_1.setBindContext(dataMapContext_2);
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
				var inputBox_1 = new cpr.controls.InputBox("ipb3");
				inputBox_1.placeholder = "모집 인원을 입력하세요";
				inputBox_1.inputFilter = "[0-9]";
				inputBox_1.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				var dataMapContext_3 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
				inputBox_1.setBindContext(dataMapContext_3);
				inputBox_1.bind("value").toDataColumn("EDU_BOARD_MAX_MEMBER_COUNT");
				if(typeof onIpb3Click == "function") {
					inputBox_1.addEventListener("click", onIpb3Click);
				}
				container.addChild(inputBox_1, {
					"colIndex": 1,
					"rowIndex": 1
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb8");
				inputBox_2.placeholder = "교육 분야를 입력하세요";
				inputBox_2.style.css({
					"font-size" : "16px",
					"text-align" : "center"
				});
				var dataMapContext_4 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
				inputBox_2.setBindContext(dataMapContext_4);
				inputBox_2.bind("value").toDataColumn("EDU_BOARD_CATEGORY");
				container.addChild(inputBox_2, {
					"colIndex": 3,
					"rowIndex": 1
				});
				var userDefinedControl_1 = new udc.exam.udcExamDuoDatePicker("udccomduodatepicker1");
				userDefinedControl_1.useAutoSelect = true;
				userDefinedControl_1.selectOption = "day";
				userDefinedControl_1.style.css({
					"text-align" : "center"
				});
				container.addChild(userDefinedControl_1, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var userDefinedControl_2 = new udc.exam.udcExamDuoDatePicker("udccomduodatepicker2");
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
						"font-size" : "18px",
						"text-align" : "center"
					});
					container.addChild(inputBox_3, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var inputBox_4 = new cpr.controls.InputBox("detailAdress");
					inputBox_4.placeholder = "상세 주소를 입력 해주세요";
					inputBox_4.style.css({
						"font-size" : "18px",
						"text-align" : "center"
					});
					container.addChild(inputBox_4, {
						"colIndex": 1,
						"rowIndex": 0
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
				"top": "308px",
				"left": "201px",
				"width": "1511px",
				"height": "163px"
			});
			
			var inputBox_5 = new cpr.controls.InputBox("ipb5");
			inputBox_5.placeholder = "     내용을 입력하세요";
			inputBox_5.style.css({
				"font-size" : "18px",
				"text-align" : "left"
			});
			var dataMapContext_5 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
			inputBox_5.setBindContext(dataMapContext_5);
			inputBox_5.bind("value").toDataColumn("EDU_BOARD_CONTENT");
			container.addChild(inputBox_5, {
				"top": "478px",
				"left": "200px",
				"width": "1510px",
				"height": "283px"
			});
			
			var inputBox_6 = new cpr.controls.InputBox("ipb6");
			inputBox_6.placeholder = "     제목을 입력하세요";
			inputBox_6.style.css({
				"font-size" : "18px",
				"text-align" : "left"
			});
			var dataMapContext_6 = new cpr.bind.DataMapContext(app.lookup("eduApplyBoardMap"));
			inputBox_6.setBindContext(dataMapContext_6);
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
				"top": "248px",
				"left": "200px",
				"width": "1509px",
				"height": "50px"
			});
			
			var button_3 = new cpr.controls.Button();
			button_3.value = "등록";
			button_3.style.css({
				"background-color" : "#4682A9",
				"font-size" : "18px"
			});
			if(typeof onButtonClick == "function") {
				button_3.addEventListener("click", onButtonClick);
			}
			container.addChild(button_3, {
				"top": "779px",
				"left": "1530px",
				"width": "180px",
				"height": "50px"
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
				"top": "198px",
				"left": "201px",
				"width": "1512px",
				"height": "40px"
			});
		}
	});
	app.title = "createBoard";
	cpr.core.Platform.INSTANCE.register(app);
})();
