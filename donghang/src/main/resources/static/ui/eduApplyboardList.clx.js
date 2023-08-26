/*
 * App URI: eduApplyboardList
 * Source Location: eduApplyboardList.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("eduApplyboardList", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * eduApplyboardList.js
			 * Created at 2023. 8. 11. 오후 1:43:07.
			 *
			 * @author USER
			 ************************************************/


			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e){
				var submission2 = app.lookup("loginCheck");
				var page = app.lookup("page");
				var currentPageIndex = page.currentPageIndex;
				var dataMap = app.lookup("dm2");
				dataMap.setValue("nowpage", currentPageIndex);
				var submission = app.lookup("sms2");
				submission2.send();
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
				var dataMap = app.lookup("dm3");
				var submission = app.lookup("sms3");
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
				var host = app.getHost();
				var hostAppInstance = host.getAppInstance();
				var grid = app.lookup("grd1");
				grid.addEventListener("cell-click", function(e){
					var vcEmb = hostAppInstance.lookup("ea1");
					var vsAppId = "detailBoard";
					if(vsAppId == null) {
					return alert("추가될 App이 존재하지 않습니다.");
				}
					cpr.core.App.load(vsAppId, function(/*cpr.core.App*/ loadedApp){
					/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
					if(vcEmb.getEmbeddedAppInstance()){
						vcEmb.getEmbeddedAppInstance().dispose();
					}
					/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
					if(loadedApp){						
						/*초기값을 전달합니다.*/			
						vcEmb.ready(function(/*cpr.controls.EmbeddedApp*/embApp){
						embApp.initValue =e.row.getRowData().EDU_BOARD_NO;
						})
						/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
						vcEmb.app = loadedApp;
						var app1 = vcEmb.app;
						app1.getInstances()
					}
				}); 
				});
				
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
				var button = e.control;
					var dataSet = app.lookup("tpSlct");
				var dataSet2 = app.lookup("dsSlct");
				var searchInput = app.lookup("searchCtl");
				var comboBox = app.lookup("cmb1");
				var dataMap = app.lookup("dm3");
				var inputValue = searchInput.value.replace(/\s/g, "");
				var listBox = app.lookup("lbx1");
				var submission = app.lookup("sms3");
				var pageIndexer = app.lookup("page");
				if(pageIndexer.currentPageIndex>1){
					dataMap.setValue("nowpage", dataMap.setValue("nowpage", pageIndexer.currentPageIndex=1));
					}
				console.log(dataSet2.getRowData(comboBox.getSelectedDataSetIndices()[0]).label);
				dataMap.setValue("status", dataSet.getRowData(listBox.getSelectedDataSetIndices()[0]).label);
				dataMap.setValue("type", dataSet2.getRowData(comboBox.getSelectedDataSetIndices()[0]).label);
				dataMap.setValue("keyword", inputValue);
				console.log(inputValue);
				submission.send();
			}

			/*
			 * 리스트 박스에서 item-click 이벤트 발생 시 호출.
			 * 아이템 클릭시 발생하는 이벤트.
			 */
			function onLbx1ItemClick(e){
				var pageIndexer = app.lookup("page");
				var searchInput = app.lookup("searchCtl");
				var dataMap = app.lookup("dm2");
				var inputValue = searchInput.value.replace(/\s/g, ""); //공백많이 넣더라도 하나로취급
				var listBox = app.lookup("lbx1");
				var submission = app.lookup("sms2");
				var dataSet = app.lookup("tpSlct");
				dataMap.setValue("status", dataSet.getRowData(listBox.getSelectedDataSetIndices()[0]).label);
				console.log(listBox.getSelectedDataSetIndices()[0]);
				if(pageIndexer.currentPageIndex>1){
					dataMap.setValue("nowpage", dataMap.setValue("nowpage", pageIndexer.currentPageIndex=1));
					}
					submission.send();
			}



			function submissionSC(){
				var page = app.lookup("page");
				var dataSet = app.lookup("ds3");
				console.log("total count",dataSet.getValue(0, "TOTAL_BOARD_COUNT"));
				page.totalRowCount = Number(dataSet.getValue(0, "TOTAL_BOARD_COUNT"));
				console.log("프리브",dataSet.getValue(0, "PREVPAGE"));
				console.log("넥스트",dataSet.getValue(0, "NEXTPAGE"));
				if(dataSet.getValue(0, "PREVPAGE")==="1"){
					page.visiblePrevButton = true;
				}else{
					page.visiblePrevButton = false;
				}
				if(dataSet.getValue(0, "NEXTPAGE")==="1"){
					page.visibleNextButton =true;
				}else{
					page.visibleNextButton =false;
				}
				page.redraw();	
			}
			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSms2SubmitSuccess2(e){
				var sms2 = e.control;
				submissionSC();
				console.log("호출");
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSms3SubmitSuccess(e){
				var sms3 = e.control; //
				submissionSC();
				console.log("sms3 호출");
			}


			function onButtonClick2(e){
				var button = e.control;
				window.location.href="createBoard.clx";
			}

			/*
			 * 그리드에서 cell-click 이벤트 발생 시 호출.
			 * Grid의 Cell 클릭시 발생하는 이벤트.
			 */
			function onGrd1CellClick(e){
				var grd1 = e.control;
				var grid = app.lookup("grd1");
				var cellValue = grid.getCellValue(e.row.getIndex(),0);
				console.log(grid.getCellValue(e.row.getIndex(),0));
				console.log(app.getRootAppInstance());
				
			}

			/*
			 * "Output" 아웃풋(opt)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onLoginCheckSubmitSuccess(e){
				var loginCheck = e.control;
				var button = app.lookup("applyCtl");
				var login = JSON.parse(loginCheck.xhr.responseText);
				if(login.name){
					console.log("로그인");
				}else{
					console.log("로그인못함");
					button.dispose();
				}
				
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "BOARD_NO",
						"dataType": "string",
						"displayOnly": true
					},
					{
						"name": "BOARD_TITLE",
						"displayOnly": false
					},
					{
						"name": "PERIOD",
						"dataType": "string",
						"displayOnly": true
					},
					{
						"name": "BOARD_CATEGORY",
						"displayOnly": true
					},
					{
						"name": "APPLY_STATUS",
						"displayOnly": true
					},
					{"name": "TOTAL_BOARD_COUNT"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("ds2");
			dataSet_2.parseData({
				"columns": [
					{"name": "BOARD_NO"},
					{"name": "BOARD_TITLE"},
					{"name": "PERIOD"},
					{"name": "BOARD_CATEGORY"},
					{"name": "APPLY_STATUS"},
					{"name": "NOW_PAGE"},
					{"name": "TOTAL_BOARD_COUNT"},
					{"name": "PREVPAGE"},
					{"name": "NEXTPAGE"}
				],
				"rows": []
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("dsSlct");
			dataSet_3.parseData({
				"columns": [
					{"name": "label"},
					{"name": "value"}
				],
				"rows": [
					{"label": "제목", "value": "value1"},
					{"label": "내용", "value": "value2"},
					{"label": "작성자", "value": "value3"}
				]
			});
			app.register(dataSet_3);
			
			var dataSet_4 = new cpr.data.DataSet("tpSlct");
			dataSet_4.parseData({
				"columns": [
					{"name": "label"},
					{"name": "value"}
				],
				"rows": [
					{"label": "전체", "value": "value1"},
					{"label": "모집중", "value": "value2"},
					{"label": "모집마감", "value": "value3"}
				]
			});
			app.register(dataSet_4);
			
			var dataSet_5 = new cpr.data.DataSet("ds3");
			dataSet_5.parseData({
				"columns": [
					{"name": "EDU_BOARD_NO"},
					{"name": "EDU_BOARD_TITLE"},
					{"name": "TOTAL_COUNT"},
					{"name": "BOARD_CATEGORY"},
					{"name": "EDU_BOARD_STATUS"},
					{"name": "NOW_PAGE"},
					{"name": "TOTAL_BOARD_COUNT"},
					{"name": "PREVPAGE"},
					{"name": "NEXTPAGE"},
					{"name": "USER_ID"}
				],
				"rows": []
			});
			app.register(dataSet_5);
			
			var dataSet_6 = new cpr.data.DataSet("ds4");
			dataSet_6.parseData({
				"columns": [{"name": "textarea"}],
				"rows": [{"textarea": "\"단어의 철자가 정확한지 확인해 보세요.\\r\\n한글을 영어로 혹은 영어를 한글로 입력했는지 확인해 보세요.\\r\\n검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해 보세요.\\r\\n두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 보세요. 네이버 맞춤법 검사기\\r\\n검색 옵션을 변경해서 다시 검색해 보세요.\""}]
			});
			app.register(dataSet_6);
			var dataMap_1 = new cpr.data.DataMap("dm1");
			dataMap_1.parseData({
				"columns" : [{"name": "nowpage"}]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("dm2");
			dataMap_2.parseData({
				"columns" : [
					{"name": "nowpage"},
					{
						"name": "status",
						"dataType": "string"
					}
				]
			});
			app.register(dataMap_2);
			
			var dataMap_3 = new cpr.data.DataMap("dm3");
			dataMap_3.parseData({
				"columns" : [
					{"name": "nowpage"},
					{
						"name": "status",
						"dataType": "string"
					},
					{"name": "type"},
					{"name": "keyword"}
				]
			});
			app.register(dataMap_3);
			
			var dataMap_4 = new cpr.data.DataMap("dm4");
			dataMap_4.parseData({
				"columns" : [{"name": "name"}]
			});
			app.register(dataMap_4);
			var submission_1 = new cpr.protocols.Submission("sms1");
			submission_1.action = "findBaordList.do";
			submission_1.addResponseData(dataSet_1, false);
			if(typeof onSms1SubmitDone == "function") {
				submission_1.addEventListener("submit-done", onSms1SubmitDone);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("pageInd");
			submission_2.action = "findBoardListByPage.do";
			submission_2.addRequestData(dataMap_1);
			submission_2.addResponseData(dataSet_2, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("sms2");
			submission_3.action = "findBoardListWithStatusByPage.do";
			submission_3.addRequestData(dataMap_2);
			submission_3.addResponseData(dataSet_5, false);
			if(typeof onSms2SubmitSuccess2 == "function") {
				submission_3.addEventListener("submit-success", onSms2SubmitSuccess2);
			}
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("sms3");
			submission_4.action = "findBoardListPageAndSearchKeyword.do";
			submission_4.addRequestData(dataMap_3);
			submission_4.addResponseData(dataSet_5, false);
			if(typeof onSms3SubmitSuccess == "function") {
				submission_4.addEventListener("submit-success", onSms3SubmitSuccess);
			}
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("createBoardSms");
			submission_5.action = "createBoardUI.do";
			app.register(submission_5);
			
			var submission_6 = new cpr.protocols.Submission("loginCheck");
			submission_6.action = "loginCheck.do";
			if(typeof onLoginCheckSubmitSuccess == "function") {
				submission_6.addEventListener("submit-success", onLoginCheckSubmitSuccess);
			}
			app.register(submission_6);
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
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
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.scrollable = false;
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "0px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["234px", "194px", "1429px", "1fr"]);
			formLayout_1.setRows(["1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var listBox_1 = new cpr.controls.ListBox("lbx1");
				(function(listBox_1){
					listBox_1.setItemSet(app.lookup("tpSlct"), {
						"label": "label",
						"value": "value"
					})
				})(listBox_1);
				if(typeof onLbx1ItemClick == "function") {
					listBox_1.addEventListener("item-click", onLbx1ItemClick);
				}
				container.addChild(listBox_1, {
					"colIndex": 0,
					"rowIndex": 0,
					"horizontalAlign": "fill",
					"verticalAlign": "fill"
				});
				var comboBox_1 = new cpr.controls.ComboBox("cmb1");
				(function(comboBox_1){
					comboBox_1.setItemSet(app.lookup("dsSlct"), {
						"label": "label",
						"value": "value"
					});
				})(comboBox_1);
				container.addChild(comboBox_1, {
					"colIndex": 1,
					"rowIndex": 0,
					"colSpan": 1,
					"rowSpan": 1,
					"horizontalAlign": "center",
					"verticalAlign": "center",
					"width": 130,
					"height": 60
				});
				var searchInput_1 = new cpr.controls.SearchInput("searchCtl");
				container.addChild(searchInput_1, {
					"colIndex": 2,
					"rowIndex": 0,
					"colSpan": 1,
					"rowSpan": 1,
					"horizontalAlign": "fill",
					"verticalAlign": "center",
					"height": 60
				});
				var button_1 = new cpr.controls.Button();
				button_1.value = "Button";
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"colIndex": 3,
					"rowIndex": 0,
					"colSpan": 1,
					"rowSpan": 1,
					"verticalAlign": "center",
					"height": 60
				});
			})(group_1);
			container.addChild(group_1, {
				"width": "1036px",
				"height": "84px"
			});
			
			var grid_1 = new cpr.controls.Grid("grd1");
			grid_1.readOnly = true;
			grid_1.init({
				"dataSet": app.lookup("ds3"),
				"selectionMulti": "single",
				"noDataMessage": " ",
				"clickMode": "select",
				"pasteMode": "none",
				"tabMode": "none",
				"columns": [
					{"width": "39px"},
					{"width": "18px"},
					{"width": "170px"},
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"}
				],
				"detail": {
					"rows": [{"height": "78px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.columnName = "EDU_BOARD_NO";
								cell.style.css({
									"border-right-style" : "none"
								});
								cell.control = (function(){
									var inputBox_1 = new cpr.controls.InputBox("ipb1");
									inputBox_1.bind("value").toDataColumn("EDU_BOARD_NO");
									return inputBox_1;
								})();
								cell.controlConstraint = {};
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "EDU_BOARD_STATUS";
								cell.style.css({
									"border-right-style" : "none",
									"border-left-style" : "none"
								});
								cell.control = (function(){
									var button_2 = new cpr.controls.Button();
									button_2.enabled = false;
									button_2.readOnly = true;
									button_2.style.css({
										"background-color" : "#F6F4EB",
										"background-image" : "none"
									});
									button_2.style.bind("color").toExpression("EDU_BOARD_STATUS == \"모집중\" ? \"green\" : \"red\"");
									button_2.bind("value").toDataColumn("EDU_BOARD_STATUS");
									return button_2;
								})();
								cell.controlConstraint = {
									"verticalAlign": "center",
									"height": 40
								};
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "EDU_BOARD_TITLE";
								cell.style.css({
									"border-right-style" : "none",
									"border-left-style" : "none",
									"border-top-style" : "none"
								});
								cell.control = (function(){
									var inputBox_2 = new cpr.controls.InputBox("ipb2");
									inputBox_2.style.css({
										"border-right-style" : "none",
										"border-left-style" : "none",
										"border-bottom-style" : "none",
										"border-top-style" : "none"
									});
									inputBox_2.bind("value").toDataColumn("EDU_BOARD_TITLE");
									return inputBox_2;
								})();
								cell.controlConstraint = {"leftSpacing": 30};
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.columnName = "TOTAL_COUNT";
								cell.style.css({
									"border-right-style" : "none",
									"border-left-style" : "none"
								});
								cell.control = (function(){
									var inputBox_3 = new cpr.controls.InputBox("ipb3");
									inputBox_3.style.css({
										"border-right-style" : "none",
										"border-left-style" : "none"
									});
									inputBox_3.bind("value").toDataColumn("TOTAL_COUNT");
									return inputBox_3;
								})();
								cell.controlConstraint = {};
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.columnName = "USER_ID";
								cell.control = (function(){
									var inputBox_4 = new cpr.controls.InputBox("ipb4");
									inputBox_4.bind("value").toDataColumn("USER_ID");
									return inputBox_4;
								})();
								cell.controlConstraint = {};
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
								cell.control = (function(){
									var output_1 = new cpr.controls.Output();
									return output_1;
								})();
								cell.controlConstraint = {};
							}
						}
					]
				}
			});
			grid_1.style.css({
				"border-right-style" : "none",
				"border-left-style" : "none",
				"border-bottom-style" : "none"
			});
			if(typeof onGrd1CellClick == "function") {
				grid_1.addEventListener("cell-click", onGrd1CellClick);
			}
			container.addChild(grid_1, {
				"width": "1239px",
				"height": "630px"
			});
			
			var group_2 = new cpr.controls.Container();
			var formLayout_2 = new cpr.controls.layouts.FormLayout();
			formLayout_2.scrollable = false;
			formLayout_2.topMargin = "0px";
			formLayout_2.rightMargin = "0px";
			formLayout_2.bottomMargin = "0px";
			formLayout_2.leftMargin = "0px";
			formLayout_2.horizontalSpacing = "0px";
			formLayout_2.verticalSpacing = "0px";
			formLayout_2.setColumns(["1fr", "100px"]);
			formLayout_2.setRows(["1fr"]);
			group_2.setLayout(formLayout_2);
			(function(container){
				var button_3 = new cpr.controls.Button("applyCtl");
				button_3.value = "신청";
				if(typeof onButtonClick2 == "function") {
					button_3.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_3, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var pageIndexer_1 = new cpr.controls.PageIndexer("page");
				pageIndexer_1.pageRowCount = 8;
				pageIndexer_1.viewPageCount = 4;
				pageIndexer_1.step = -1;
				pageIndexer_1.visibleFirstButton = false;
				pageIndexer_1.visibleLastButton = false;
				pageIndexer_1.visiblePrevButton = false;
				pageIndexer_1.visibleNextButton = false;
				pageIndexer_1.pageIndexWidth = "50px";
				pageIndexer_1.style.next.css({
					"font-size" : "30px"
				});
				pageIndexer_1.init(1, 1, 1);
				if(typeof onPageSelectionChange == "function") {
					pageIndexer_1.addEventListener("selection-change", onPageSelectionChange);
				}
				container.addChild(pageIndexer_1, {
					"colIndex": 0,
					"rowIndex": 0,
					"horizontalAlign": "center",
					"width": 400
				});
			})(group_2);
			container.addChild(group_2, {
				"width": "400px",
				"height": "82px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
		}
	});
	app.title = "eduApplyboardList";
	cpr.core.Platform.INSTANCE.register(app);
})();
