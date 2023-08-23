/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	
	cpr.core.DeferredUpdateManager.INSTANCE.asyncExec(function(){
		
	});
}




/*
 * "실행" 버튼(btnSetFilter)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnSetFilterClick(e){
	var btnSetFilter = e.control;
	
	comboBoxFilterExp();
	
	
}

function comboBoxFilterExp(){
	var vcCombox = app.lookup("cmb3");
	vcCombox.filterExp = "parent == '30'";
	vcCombox.selectItem(0);
}

/*
 * "실행" 버튼(btnSetFilter2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnSetFilter2Click(e){
	var btnSetFilter2 = e.control;
	comboBoxRemoveFilterExp();

}

function comboBoxRemoveFilterExp(){
	var vcCombox = app.lookup("cmb3");
	vcCombox.clearFilter();
	vcCombox.selectItem(0);
}

/*
 * "실행" 버튼(btnHasAncestor4)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnHasAncestor4Click(e){
	var btnHasAncestor4 = e.control;
	
	var vcTree = app.lookup("sampleTre");
	
	vcTree.setFilter("parent == '0'");
	
	
}

/*
 * "실행" 버튼(btnHasAncestor)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnHasAncestorClick(e){
	var btnHasAncestor = e.control;
	
	setAncestor();
	
}

//function setDepth() {
//	var vcTreMn = app.lookup("sampleTre");
//	var vnDepth = app.lookup("cmbSetFilter").value;
//	var voItem = vcTreMn.getSelection()[0];
//	
//	//선택한 아이템의 깊이로 필터	
//	vcTreMn.setFilter("depth == '" + vnDepth + "'");
//}

function setAncestor() {
	var vcTreMn = app.lookup("sampleTre");
	var voItem = vcTreMn.getSelection()[0];
	if (voItem) {
		//filterExp , setFilter 동일하게 작동합니다.
		//vcTreMn.filterExp = "hasAncestor('" + voItem.value + "') || value == '"  + voItem.value + "'" ;   
		vcTreMn.setFilter("hasAncestor('" + voItem.value + "') || value == '" + voItem.value + "'");
	}
}

/*
 * "실행" 버튼(btnHasAncestor3)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnHasAncestor3Click(e){
	var btnHasAncestor3 = e.control;
	clearFilter();

}

function clearFilter(){
	var vcTreMn = app.lookup("sampleTre");
	
	vcTreMn.clearFilter();
}

/*
 * "실행" 버튼(btnSetFilter3)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnSetFilter3Click(e){
	var btnSetFilter3 = e.control;
	filetExp2();

	
}

function filetExp2(){
	var cmb2 = app.lookup("cmb2");
	cmb2.filterExp = "label *= \"서울시\"";
}

/*
 * "실행" 버튼(btnSetFilter4)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnSetFilter4Click(e){
	var btnSetFilter4 = e.control;
	clearFilter2();

}

function clearFilter2(){
	var cmb2 = app.lookup("cmb2");
	cmb2.clearFilter();;
}

/*
 * "실행" 버튼(btnHasAncestor2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnHasAncestor2Click(e){
	var btnHasAncestor2 = e.control;
	setTreeFilter();

}

function setTreeFilter(){
	var vcTreMn = app.lookup("sampleTre");
	
	vcTreMn.setTreeFilter("value == '1-1-1'");
}

/*
 * "filterExp 실행" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click(e){
	var btn1 = e.control;
	comboBoxFilter();

}

function comboBoxFilter(){
	//해당 조건식으로 콤보박스 필터 적용
	var vcCmb = app.lookup("cmbOnesDigit");
	vcCmb.filterExp = "parent == tensDigit";
	vcCmb.selectItem(0);
}

/*
 * "실행" 버튼(btnSetFilter5)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnSetFilter5Click(e){
	var btnSetFilter5 = e.control;
	
	comboBoxFilter1();

}

/*
 * "실행" 버튼(btnSetFilter6)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnSetFilter6Click(e){
	var btnSetFilter6 = e.control;
	comboBoxRemoveFilter1();

}

function comboBoxFilter1(){
	var vcCombox = app.lookup("cmb4");
	vcCombox.setFilter("value > 5 && value < 25");
	vcCombox.selectItem(0);
}

function comboBoxRemoveFilter1(){
	var vcCombox = app.lookup("cmb4");
	vcCombox.clearFilter();
	vcCombox.selectItem(0);
}
