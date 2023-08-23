/*
 * "동적 버튼 컨트롤 3개 추가" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click(e){
	var btn1 = e.control;
	drawBtn();	

}

function drawBtn(){
	/*동적으로 생성될 버튼 컨트롤이 위치할 그룹컨트롤*/	
	var xyGroup = app.lookup("grpLayout1");
	/*그리그전에 해당 레이아웃에 있는 모든 컨트롤을 제거합니다.*/
	xyGroup.removeAllChildren();
	for(var i = 0; i < 3; i++){
		/*버튼 컨트롤 동적 생성*/
		var vcbtn = new cpr.controls.Button("btn-"+i);
		vcbtn.value = "버튼" + i;
		/*해당 그룹에 컨트롤을 추가합니다. 이때 각 레이아웃에 맞는 constraint을 작성해줘야합니다.*/
		xyGroup.addChild(vcbtn, {
			top : 20 + ((i) * 40) + "px",
			left : "20px",
			width : "100px",
			height : "30px"
		});
	}
}

/*
 * "동적 컨트롤 위치 이동" 버튼(button3)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton3Click(e){
	var button3 = e.control;
	
	moveBtn();
	
}

function moveBtn(){
	/* 버튼 컨트롤의 이전 배치에 top, left 앵커가 고정되어 있고, bottom과 right 앵커를 주고 싶을 경우 top과 left 앵커에 빈 값을 주어야 합니다. */
	/* XY 레이아웃 컨트롤 위치 변경 */
	app.lookup("grpLayout1").updateConstraint(app.lookup("btn-0"), {
		top : "",
		left : "",
		bottom : "20px",
		right : "20px",
		height : "30px",
		width : "100px"
	});
}

/*
 * "그리드 컨트롤 동적 생성" 버튼(btn2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn2Click(e) {
	var btn2 = e.control;
	gridDraw();
	
	
}

function gridDraw() {
	var vcGridInfo = {
		dataSet: "",
		columns: [],
		header: {},
		detail: {}
	}	
	var vcDataSet = app.lookup("ds1");
	
	/*그리드 동적으로 생성합니다*/	
	
	/*dataSet 설정*/
	vcGridInfo.dataSet = vcDataSet;
	
	var vaColumns = [];
	/*컬럼 너비 배열*/
	for (var i = 0; i < vcDataSet.getHeaders().length; i++) {
		vaColumns.push({
			"width": "100px"
		});
	}
	vcGridInfo.columns = vaColumns;
	vcGridInfo.header.rows = [{
		"height": "30px"
	}];
	/*헤더 영역 추가*/
	var vaHeaders = [];
	for (var i = 0; i < vcDataSet.getHeaders().length; i++) {
		var columnNm = "column" + (i + 1);
		(function(columnNm) {
			vaHeaders.push({
				"constraint": {
					"rowIndex": 0,
					"colIndex": i
				},
				"configurator": function(cell) {
					cell.filterable = false;
					cell.sortable = false;
					cell.targetColumnName = columnNm;
					cell.text = columnNm;
				}
			});
		})(columnNm)
	};
	vcGridInfo.header.cells = vaHeaders;
	/*디테일 영역 추가*/
	vcGridInfo.detail.rows = [{
		"height": "30px"
	}];
	var vaDetail = [];
	for (var i = 0; i < vcDataSet.getHeaders().length; i++) {
		var columnNm = "column" + (i + 1);
		(function(columnNm) {
			vaDetail.push({
				"constraint": {
					"rowIndex": 0,
					"colIndex": i
				},
				"configurator": function(cell) {
					cell.columnName = columnNm;
				}
			});
		})(columnNm)
	}
	vcGridInfo.detail.cells = vaDetail;
	var grid = new cpr.controls.Grid("grd001");
	/*그리드 속성 설정을 세팅한다*/
	grid.init(vcGridInfo);
	app.lookup("grpLayout2").addChild(grid, {
		autoSize: "none",
		height: "150px"
	});
	
	
}

/*
 * "컨트롤 삭제" 버튼(button2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton2Click(e){
	var button2 = e.control;
	
	removeLastChild();
	
}

function removeLastChild(){
	var vcGrp = app.lookup("grpLayout2");
	vcGrp.removeChild(vcGrp.getChildren()[vcGrp.getChildren().length-1]);
	
}

///*
// * "udc 컨트롤 동적 생성" 버튼(btn3)에서 click 이벤트 발생 시 호출.
// * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
// */
//function onBtn3Click(e){
//	var btn3 = e.control;
//	
//	drawUdc();
//	app.lookup("ace3").value = drawUdc;	
//	
//}
//
//function drawUdc(){
//	
//	for (var i = 0; i < 3; i++) {
//		var vcInputUdc = new udc.sample.udcInputBtn();
//		vcInputUdc.title = "title_" + i;
//		vcInputUdc.date = moment().format("YYYY-MM-DD");
//		vcInputUdc.style.css("border", "1px solid black");
//		vcInputUdc.addEventListener("btn-Click", function(e){
//			alert(JSON.stringify(e.userData));
//		});
//		app.lookup("grpLayout3").addChild(vcInputUdc, {
//			autoSize: "height",
//			height: "40px"
//		});
//	}
//}

///*
// * "udc 컨트롤 전체 삭제" 버튼(button4)에서 click 이벤트 발생 시 호출.
// * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
// */
//function onButton4Click(e){
//	var button4 = e.control;
//	removeAllChildren();
//		
//}
//
//function removeAllChildren(){
//	app.lookup("grpLayout3").removeAllChildren();;
//}

/*
 * "동적 폼 레이아웃 생성" 버튼(btn4)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn4Click(e){
	
	createFormLayout();
	
		
	
}

function createFormLayout(){
	
	/* 폼 레이아웃으로 레이아웃 변경 */
	var formLayout = new cpr.controls.layouts.FormLayout();
	formLayout.scrollable = true;
	formLayout.userResizingMode = "standard";
	formLayout.topMargin = "5px";
	formLayout.rightMargin = "5px";
	formLayout.bottomMargin = "5px";
	formLayout.leftMargin = "5px";
	formLayout.horizontalSpacing = "10px";
	formLayout.verticalSpacing = "10px";
	formLayout.horizontalSeparatorWidth = 1;
	formLayout.verticalSeparatorWidth = 1;
	formLayout.setColumns(["100px", "1fr", "100px", "1fr"]);
	formLayout.setUseColumnShade(0, true);
	formLayout.setUseColumnShade(2, true);
	formLayout.setColumnAutoSizing(2, true);
	formLayout.setRows(["30px", "30px", "30px", "30px", "1fr"]);
	var formGroup = app.lookup("grpForm");
	formGroup.setLayout(formLayout);
	formGroup.style.setClasses(["content-form-box"]);
	
	/* 컨트롤 동적 생성 및 grpForm 그룹에 동적으로 생성한 컨트롤 추가 */
	var output_3 = new cpr.controls.Output();
	output_3.value = "Output";
	formGroup.addChild(output_3, {
		"colIndex": 0,
		"rowIndex": 1
	});
	var output_4 = new cpr.controls.Output();
	output_4.value = "Output";
	formGroup.addChild(output_4, {
		"colIndex": 0,
		"rowIndex": 2
	});
	var output_5 = new cpr.controls.Output();
	output_5.value = "Output";
	formGroup.addChild(output_5, {
		"colIndex": 0,
		"rowIndex": 3
	});
	var output_6 = new cpr.controls.Output();
	output_6.value = "Output";
	formGroup.addChild(output_6, {
		"colIndex": 0,
		"rowIndex": 4
	});
	var output_7 = new cpr.controls.Output();
	output_7.value = "horizontalAlign/verticalAlign 지정";
	output_7.style.css({
		"text-align": "right"
	});
	formGroup.addChild(output_7, {
		"colIndex": 2,
		"rowIndex": 1
	});
	var output_8 = new cpr.controls.Output();
	output_8.value = "spacings 지정";
	output_8.style.css({
		"text-align": "right"
	});
	formGroup.addChild(output_8, {
		"colIndex": 2,
		"rowIndex": 3
	});
	var output_9 = new cpr.controls.Output();
	output_9.value = "버튼2 위치 변경시 배치";
	output_9.style.css({
		"text-align": "right"
	});
	formGroup.addChild(output_9, {
		"colIndex": 2,
		"rowIndex": 4
	});
	var output_10 = new cpr.controls.Output();
	output_10.value = "ignoreLayoutSpacing 지정";
	output_10.style.css({
		"text-align": "right"
	});
	formGroup.addChild(output_10, {
		"colIndex": 2,
		"rowIndex": 2
	});
	var output_11 = new cpr.controls.Output();
	output_11.value = "기본 배치";
	output_11.style.css({
		"text-align": "right"
	});
	formGroup.addChild(output_11, {
		"colIndex": 2,
		"rowIndex": 0
	});
	var output_12 = new cpr.controls.Output();
	output_12.value = "Output";
	formGroup.addChild(output_12, {
		"colIndex": 0,
		"rowIndex": 0
	});
	var button_1 = new cpr.controls.Button();
	button_1.value = "버튼1";
	button_1.style.setClasses(["btn-success"]);
	formGroup.addChild(button_1, {
		"colIndex": 3,
		"rowIndex": 0
	});
	var button_2 = new cpr.controls.Button("button");
	button_2.value = "버튼2";
	button_2.style.setClasses(["btn-info"]);
	formGroup.addChild(button_2, {
		"colIndex": 3,
		"rowIndex": 1,
		"horizontalAlign": "center",
		"verticalAlign": "center"
	});
	var button_3 = new cpr.controls.Button();
	button_3.value = "버튼3";
	button_3.style.setClasses(["btn-warning"]);
	formGroup.addChild(button_3, {
		"colIndex": 3,
		"rowIndex": 2,
		"ignoreLayoutSpacing": true
	});
	var button_4 = new cpr.controls.Button();
	button_4.value = "버튼4";
	button_4.style.setClasses(["btn-danger"]);
	formGroup.addChild(button_4, {
		"colIndex": 3,
		"rowIndex": 3,
		"topSpacing": 0,
		"rightSpacing": 10,
		"bottomSpacing": 0,
		"leftSpacing": 10
	});
	for (var i = 0; i < 5; i++) {
		var vcIpb = new cpr.controls.InputBox();
		vcIpb.value = "inputbox" + (i + 1);
		formGroup.addChild(vcIpb, {
			colIndex: 1,
			rowIndex: i
		});
	}
	
}


/*
 * ""버튼2" 컨트롤 위치 변경" 버튼(button1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton1Click(e){
	var button1 = e.control;
	moveControl();
		
}

function moveControl(){
	/* 폼 레이아웃 컨트롤 위치 변경 */
	app.lookup("grpForm").updateConstraint(app.lookup("button"), {
		colIndex: 3,
		rowIndex: 4
	});
}

/*
 * "두번째 행 숨김" 버튼(button5)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton5Click(e){
	var button5 = e.control;
	setRowVisible();
		
}

function setRowVisible(){
	
	var vcGrp = app.lookup("grpForm");
	var vcBtn = app.lookup("button4");
	
	/* 폼 레이아웃 지정하기 이전에 validataion 체크 */
	if (vcGrp.getLayout() instanceof cpr.controls.layouts.XYLayout) return;
	
	/* 폼 레이아웃으로 타입 강제 지정 */
	/** @type cpr.controls.layouts.FormLayout */
	var vlGrp = vcGrp.getLayout();
	
	/* 폼 레이아웃 행 visible 처리 */
	if (vlGrp.isRowVisible(1)) {
		vlGrp.setRowVisible(1, false);
		//vcBtn.value = "이전으로 변경";
	} else {
		vlGrp.setRowVisible(1, true);
		//vcBtn.value = "두번째 행 숨김";
	}
}

/*
 * "동적 XY 레이아웃 생성" 버튼(btn4)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn4Click3(e){
	var btn4 = e.control;
	/* XY 레이아웃으로 레이아웃 변경 */
	var xyLayout = new cpr.controls.layouts.XYLayout();
	var xyGroup = app.lookup("grpXy");
	xyGroup.setLayout(xyLayout);

	for (var i = 1 ; i <= 3 ; i++) {
		
		/* 컨트롤 동적 생성  */
		var vcBtn = new cpr.controls.Button("btn" + i);
		vcBtn.value = "버튼" + i;
		
		/* grpXy 그룹에 동적으로 생성한 버튼 추가 */
		app.lookup("grpXy").addChild( vcBtn, {
			top : 20 + ((i-1) * 40) + "px",
			left : "20px",
			width : "100px",
			height : "30px"
		});
	}
}

/*
 * ""버튼1" 컨트롤 위치 변경" 버튼(button5)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton5Click3(e){
	var button5 = e.control;
	/* 버튼 컨트롤의 이전 배치에 top, left 앵커가 고정되어 있고, bottom과 right 앵커를 주고 싶을 경우 top과 left 앵커에 빈 값을 주어야 합니다. */
	/* XY 레이아웃 컨트롤 위치 변경 */
	app.lookup("grpXy").updateConstraint(app.lookup("btn1"), {
		top : "",
		left : "",
		bottom : "20px",
		right : "20px",
		height : "30px",
		width : "100px"
	});
}

/*
 * "동적 반응형 XY 레이아웃 생성" 버튼(btn5)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn5Click(e){
	var btn5 = e.control;
	/* 반응형 XY 레이아웃으로 레이아웃 변경 */
	var responsiveXYLayout = new cpr.controls.layouts.ResponsiveXYLayout();
	var resXyGroup = app.lookup("grpResXy");
	resXyGroup.setLayout(responsiveXYLayout);
	
	for (var i = 1 ; i <= 3 ; i++) {
		
		/* 컨트롤 동적 생성  */
		var vcBtn = new cpr.controls.Button("btnXY" + i);
		vcBtn.value = "버튼" + i;
		
		/* grpResXy 그룹에 동적으로 생성한 버튼 추가 */
		resXyGroup.addChild(vcBtn, {
			positions : [
				{
					"media": "all and (min-width: 1280px)",
					top : 20 + ((i-1) * 40) + "px",
					left : "20px",
					width : "200px",
					height : "30px"
				}, {
					"media": "all and (min-width: 800px) and (max-width: 1279px)",
					top : 20 + ((i-1) * 40) + "px",
					left : "20px",
					width : "100px",
					height : "30px"
				}, {
					"media": "all and (max-width: 799px)",
					"top": "105px",
					"left": "130px",
					"width": "113px",
					"height": "112px"
				} 
			]
		});
	}
}

/*
 * ""버튼1" 컨트롤 위치 변경" 버튼(button6)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton6Click(e){
	var button6 = e.control;
		/* 반응형 XY 레이아웃 컨트롤 위치 변경 */
	app.lookup("grpResXy").updateConstraint(app.lookup("btnXY1"), {
		positions : [
			{
				 /* 스크린에 지정된 미디어 쿼리 default */
                "media": "all and (min-width: 1280px)",
				top : "",
				left : "",
				bottom : "20px",
				right : "20px",
				width : "200px",
				height : "30px"
			}, {
				  /* 스크린에 지정된 미디어 쿼리 tablet */
               "media": "all and (min-width: 800px) and (max-width: 1279px)",
				top : "",
				left : "",
				bottom : "20px",
				right : "20px",
				width : "100px",
				height : "30px"
			}, {
                /* 스크린에 지정된 미디어 쿼리 mobile */
               "media": "all and (max-width: 799px)",
                top : "",
				left : "",
                bottom : "20px",
				right : "20px",
				width : "50px",
				height : "30px"
            }
		]
	});
}

/*
 * "동적 폼 레이아웃 생성" 버튼(btn6)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn6Click(e){
	var btn6 = e.control;
	
}

/*
 * "동적 버티컬 레이아웃 생성" 버튼(btn7)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn7Click(e){
	var btn7 = e.control;
	/* 버티컬 레이아웃으로 레이아웃 변경 */
	var verticalLayout = new cpr.controls.layouts.VerticalLayout();
	verticalLayout.bottomMargin = 10;
	verticalLayout.leftMargin = 10;
	verticalLayout.topMargin = 10;
	verticalLayout.rightMargin = 10;
	
	var vGroup = app.lookup("grpVertical");
	vGroup.setLayout(verticalLayout);
	
	for (var i = 1 ; i <= 3 ; i++) {
		
		/* 컨트롤 동적 생성  */
		var vcBtn = new cpr.controls.Button();
		vcBtn.value = "버튼" + i;
		
		/* grpVertical 그룹에 동적으로 생성한 버튼 추가 */
		vGroup.addChild( vcBtn, {
			width : "100px",
			height : "30px",
			autoSize : "width"
		});
	}
}

/*
 * "그룹에 첫번째 자식으로 컨트롤 추가" 버튼(button8)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton8Click(e){
	var button8 = e.control;
	var vcIpb = new cpr.controls.InputBox();
	vcIpb.value = "그룹에 첫번째 자식으로 추가된 인풋박스";
	
	/* 버티컬 레이아웃 특정 인덱스에 컨트롤 추가 */
	app.lookup("grpVertical").insertChild(0, vcIpb, {
		width : "300px",
		height : "30px",
		autoSize : "none"
	});
}

/*
 * "그룹에 마지막 자식으로 컨트롤 추가" 버튼(button9)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton9Click(e){
	var button9 = e.control;
	var vcIpb = new cpr.controls.InputBox();
	vcIpb.value = "그룹에 마지막 자식으로 추가된 인풋박스";
	
	/* 버티컬 레이아웃 마지막 인덱스에 컨트롤 추가 */
	app.lookup("grpVertical").addChild(vcIpb, {
		width : "300px",
		height : "30px",
		autoSize : "none"
	});
}

/*
 * 콤보 박스에서 selection-change 이벤트 발생 시 호출.
 * ComboBox Item을 선택하여 선택된 값이 저장된 후에 발생하는 이벤트.
 */
function onCombobox1SelectionChange(e){
	var combobox1 = e.control;
	
	/** @type cpr.controls.layouts.VerticalLayout */	
	var vlGrpVertical = app.lookup("grpVertical").getLayout();
	
	/* 버티컬 레이아웃 컨트롤 배치 */
	vlGrpVertical.distribution = combobox1.value;
}

/*
 * "동적 플로우 레이아웃 생성" 버튼(btn8)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn8Click(e){
	var btn8 = e.control;
	/* 플로우 레이아웃으로 레이아웃 변경 */
	var flowLayout = new cpr.controls.layouts.FlowLayout();
	var fGroup = app.lookup("grpFlow");
	fGroup.setLayout(flowLayout);
	
	for (var i = 1 ; i <= 10 ; i++) {
		
		/* 컨트롤 동적 생성  */
		var vcBtn = new cpr.controls.Button("btnFlow" + i);
		vcBtn.value = "버튼" + i;
		
		/* grpFlow 그룹에 동적으로 생성한 버튼 추가 */
		fGroup.addChild( vcBtn, {
			width : "100px",
			height : "30px",
			autoSize : "none",
			allowNewLine : true
		});
	}
}

/*
 * "그룹에 첫번째 자식으로 컨트롤 추가" 버튼(button10)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton10Click(e){
	var button10 = e.control;
	var vcIpb = new cpr.controls.InputBox();
	vcIpb.value = "그룹에 첫번째 자식으로 추가된 인풋박스";
	
	/* 플로우 레이아웃 특정 인덱스에 컨트롤 추가 */
	app.lookup("grpFlow").insertChild(0, vcIpb, {
		width : "300px",
		height : "30px",
		autoSize : "none"
	});
}

/*
 * ""버튼5" 컨트롤 줄 바꿈 허용안함" 버튼(button11)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton11Click(e){
	var button11 = e.control;
	var vcGrp = app.lookup("grpFlow");
	var vcBtn = app.lookup("btnFlow5");
	var vbAllowNewLine = false;
	
	if (!vcGrp.getConstraint(vcBtn)) return;
	
	vbAllowNewLine = vcGrp.getConstraint(vcBtn).allowNewLine == true ? false : true;
	
	if (!vbAllowNewLine) app.lookup("button9").value = "\"버튼5\" 컨트롤 줄 바꿈 허용";
	else app.lookup("button9").value = "\"버튼5\" 컨트롤 줄 바꿈 허용안함";
	
	/* 플로우 레이아웃 특정 컨트롤 줄바꿈 허용 여부 */
	vcGrp.updateConstraint(vcBtn, {
		allowNewLine : vbAllowNewLine
	});
	
	vcBtn.style.css({
			"background-color" : "red",
			"border" : "none",
			"color" : "yellow"
		});
		
	vcGrp.redraw();
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
//	var vcShlAce = app.lookup("ace4");
//	app.lookup("btn1").addEventListener("click", function(e){
//		vcShlAce.value = onBtn1Click;
//	});
//	
//	app.lookup("button3").addEventListener("click", function(e){
//		vcShlAce.value = onButton3Click;
//	});
//	
//	app.lookup("btn2").addEventListener("click", function(e){
//		vcShlAce.value = onBtn2Click;
//	});
//	
//	app.lookup("button2").addEventListener("click", function(e){
//		vcShlAce.value = onButton2Click;
//	});
//	
//	app.lookup("btn3").addEventListener("click", function(e){
//		vcShlAce.value = onBtn3Click;
//	});
//	
//	app.lookup("button1").addEventListener("click", function(e){
//		vcShlAce.value = moveControl;
//	});
//	
//	app.lookup("button4").addEventListener("click", function(e){
//		vcShlAce.value = onButton4Click;
//	});
//	
//	app.lookup("btn4").addEventListener("click", function(e){
//		vcShlAce.value = onBtn4Click3;
//	});
//	
//	app.lookup("button5").addEventListener("click", function(e){
//		vcShlAce.value = onButton5Click3;
//	});
//	
//	app.lookup("button6").addEventListener("click", function(e){
//		vcShlAce.value = onButton6Click;
//	});
//	
//	app.lookup("combobox1").addEventListener("selection-change", function(e){
//		vcShlAce.value = onCombobox1SelectionChange;
//	});
//	
//	app.lookup("btn5").addEventListener("click", function(e){
//		vcShlAce.value = onBtn5Click;
//	});
//	
//	app.lookup("button7").addEventListener("click", function(e){
//		vcShlAce.value = setRowVisible;
//	});
//	
//	app.lookup("button9").addEventListener("click", function(e){
//		vcShlAce.value = onButton9Click;
//	});
}
