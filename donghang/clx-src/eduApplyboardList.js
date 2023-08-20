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
	var dataMap = app.lookup("dm2");
	var submission = app.lookup("sms2");
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
	var grid = app.lookup("grd1");
	var grid2 = app.lookup("grd2");
	submissionSC(); 
	var datakey = null;
	var responseText = sms3.xhr.responseText; // xhr 통신을 통해 response를 text로 추출 
	
	var any =JSON.parse(responseText); //text를 json객체로 변환 
	if(any.ds3.length==0){
		showSearchDataNotExist();
	}else{
		if(grid2){
			grid2.visible=false;
			grid.visible=true;
		}
	}
}


function showSearchDataNotExist(){
	var container = app.getContainer();
	var dataMap = app.lookup("dm3");
	var grid = app.lookup("grd1");
	var value = dataMap.getValue("keyword");
	var dataSet = app.lookup("ds4");
	var grid_2 = new cpr.controls.Grid("grd2");
				grid_2.init({
					"dataSet": app.lookup("ds4"),
					"hScroll": "hidden",
					"vScroll": "hidden",
					"columns": [
						{"width": "100px"},
						{"width": "100px"},
						{"width": "100px"},
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
									cell.targetColumnName = "textarea";
									cell.text = "EDU_BOARD_NO";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.text = "EDU_BOARD_TITLE";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.text = "TOTAL_COUNT";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.text = "BOARD_CATEGORY";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.text = "EDU_BOARD_STATUS";
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.text = "TOTAL_BOARD_COUNT";
								}
							}
						]
					},
					"detail": {
						"rows": [{"height": "350px"}],
						"cells": [{
							"constraint": {"rowIndex": 0, "colIndex": 0, "rowSpan": 1, "colSpan": 6},
							"configurator": function(cell){
								cell.columnName = "textarea";
								cell.control = (function(){
									var textArea_1 = new cpr.controls.TextArea("txa1");
									textArea_1.style.css({
										"font-size" : "23px"
									});
									textArea_1.bind("value").toDataColumn("textarea");
									return textArea_1;
								})();
								cell.controlConstraint = {};
							}
						}]
					}
				});
				if(typeof onGrd2SelectionChange == "function") {
					grid_2.addEventListener("selection-change", onGrd2SelectionChange);
				}
				container.addChild(grid_2, {
					"top": "369px",
					"left": "224px",
					"width": "1239px",
					"height": "362px"
				});

	dataSet.setValue(0, "textarea",`${value}에 대한 검색결과가 없습니다.\r\n\r\n단어의 철자가 정확한지 확인해 보세요.\r\n한글을 영어로 혹은 영어를 한글로 입력했는지 확인해 보세요.\r\n검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해 보세요.\r\n두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 보세요. \r\n검색 옵션을 변경해서 다시 검색해 보세요.`)
	grid.visible=false;
	grid_2.redraw();
			};



