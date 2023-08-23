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
			 * 그룹에서 before-draw 이벤트 발생 시 호출.
			 * 그룹 컨텐츠가 그려지기 직전에 호출되는 이벤트 입니다. 내부 컨텐츠를 동적으로 구성하기위한 용도로만 사용됩니다.
			 */

			/*
			 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
			 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
			 */
			function onBodyInit(e){
				var page = app.lookup("page");
				var currentPageIndex = page.currentPageIndex;
				var dataMap = app.lookup("dm2");
				dataMap.setValue("nowpage", currentPageIndex);
				var submission = app.lookup("sms2");
				
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
				var responseDatas = sms3.getResponseData("ds3");
				var dataMap = app.lookup("dm3");
				var value = dataMap.getValue("keyword");
				var grid = app.lookup("grd1");
				var responseText = sms3.xhr.responseText; // xhr 통신을 통해 response를 text로 추출 
				var any =JSON.parse(responseText); //text를 json객체로 변환 
				grid.redraw();
				
			}



			/*
			 * "신청" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
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
			function onOptClick(e){
				var opt = e.control;
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
					{"name": "NEXTPAGE"}
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
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			var dataRowContext_1 = new cpr.bind.DataRowContext(app.lookup("ds3"), 0);
			group_1.setBindContext(dataRowContext_1);
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var pageIndexer_1 = new cpr.controls.PageIndexer("page");
				pageIndexer_1.pageRowCount = 5;
				pageIndexer_1.viewPageCount = 4;
				pageIndexer_1.step = -1;
				pageIndexer_1.visibleFirstButton = false;
				pageIndexer_1.visibleLastButton = false;
				pageIndexer_1.visiblePrevButton = false;
				pageIndexer_1.visibleNextButton = false;
				pageIndexer_1.init(1, 1, 1);
				if(typeof onPageSelectionChange == "function") {
					pageIndexer_1.addEventListener("selection-change", onPageSelectionChange);
				}
				container.addChild(pageIndexer_1, {
					"top": "846px",
					"left": "674px",
					"width": "497px",
					"height": "159px"
				});
				var group_2 = new cpr.controls.Container();
				var formLayout_1 = new cpr.controls.layouts.FormLayout();
				formLayout_1.scrollable = false;
				formLayout_1.topMargin = "0px";
				formLayout_1.rightMargin = "0px";
				formLayout_1.bottomMargin = "0px";
				formLayout_1.leftMargin = "0px";
				formLayout_1.horizontalSpacing = "0px";
				formLayout_1.verticalSpacing = "0px";
				formLayout_1.setColumns(["1fr", "768px", "1fr"]);
				formLayout_1.setRows(["1fr"]);
				group_2.setLayout(formLayout_1);
				(function(container){
					var searchInput_1 = new cpr.controls.SearchInput("searchCtl");
					container.addChild(searchInput_1, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var button_1 = new cpr.controls.Button();
					button_1.value = "Button";
					if(typeof onButtonClick == "function") {
						button_1.addEventListener("click", onButtonClick);
					}
					container.addChild(button_1, {
						"colIndex": 2,
						"rowIndex": 0
					});
					var comboBox_1 = new cpr.controls.ComboBox("cmb1");
					comboBox_1.preventInput = true;
					(function(comboBox_1){
						comboBox_1.setItemSet(app.lookup("dsSlct"), {
							"label": "label",
							"value": "value"
						});
					})(comboBox_1);
					container.addChild(comboBox_1, {
						"colIndex": 0,
						"rowIndex": 0
					});
				})(group_2);
				container.addChild(group_2, {
					"top": "259px",
					"left": "395px",
					"width": "1036px",
					"height": "56px"
				});
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
					"top": "228px",
					"left": "216px",
					"width": "169px",
					"height": "90px"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "신청";
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					"top": "906px",
					"left": "1296px",
					"width": "141px",
					"height": "55px"
				});
				var grid_1 = new cpr.controls.Grid("grd1");
				grid_1.readOnly = true;
				grid_1.init({
					"dataSet": app.lookup("ds3"),
					"selectionUnit": "cell",
					"selectionMulti": "single",
					"noDataMessage": " ",
					"clickMode": "select",
					"columns": [
						{"width": "100px"},
						{"width": "153px"},
						{"width": "100px"},
						{"width": "100px"},
						{"width": "100px"}
					],
					"header": {
						"rows": [{"height": "24px"}],
						"cells": [
							{
								"constraint": {"rowIndex": 0, "colIndex": 0},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.targetColumnName = "EDU_BOARD_NO";
									cell.text = "EDU_BOARD_NO";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.targetColumnName = "EDU_BOARD_TITLE";
									cell.text = "EDU_BOARD_TITLE";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.targetColumnName = "TOTAL_COUNT";
									cell.text = "TOTAL_COUNT";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.targetColumnName = "EDU_BOARD_STATUS";
									cell.text = "EDU_BOARD_STATUS";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.targetColumnName = "TOTAL_BOARD_COUNT";
									cell.text = "TOTAL_BOARD_COUNT";
								}
							}
						]
					},
					"detail": {
						"rows": [{"height": "24px"}],
						"cells": [
							{
								"constraint": {"rowIndex": 0, "colIndex": 0},
								"configurator": function(cell){
									cell.columnName = "EDU_BOARD_NO";
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
									cell.columnName = "EDU_BOARD_TITLE";
									cell.control = (function(){
										var output_1 = new cpr.controls.Output("opt");
										output_1.value = "Output";
										if(typeof onOptClick == "function") {
											output_1.addEventListener("click", onOptClick);
										}
										output_1.bind("value").toDataColumn("EDU_BOARD_TITLE");
										return output_1;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.columnName = "TOTAL_COUNT";
									cell.control = (function(){
										var inputBox_2 = new cpr.controls.InputBox("ipb2");
										inputBox_2.bind("value").toDataColumn("TOTAL_COUNT");
										return inputBox_2;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.columnName = "EDU_BOARD_STATUS";
									cell.control = (function(){
										var button_3 = new cpr.controls.Button();
										button_3.bind("value").toDataColumn("EDU_BOARD_STATUS");
										return button_3;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.columnName = "TOTAL_BOARD_COUNT";
									cell.control = (function(){
										var inputBox_3 = new cpr.controls.InputBox("ipb3");
										inputBox_3.bind("value").toDataColumn("TOTAL_BOARD_COUNT");
										return inputBox_3;
									})();
									cell.controlConstraint = {};
								}
							}
						]
					}
				});
				if(typeof onGrd1CellClick == "function") {
					grid_1.addEventListener("cell-click", onGrd1CellClick);
				}
				container.addChild(grid_1, {
					"top": "369px",
					"left": "224px",
					"width": "1239px",
					"height": "362px"
				});
			})(group_1);
			if(typeof onGroupBeforeDraw == "function") {
				group_1.addEventListener("before-draw", onGroupBeforeDraw);
			}
			container.addChild(group_1, {
				"top": "35px",
				"left": "20px",
				"width": "1880px",
				"height": "1025px"
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
