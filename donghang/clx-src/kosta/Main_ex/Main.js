/************************************************
 * Main.js
 * Created at 2022. 11. 22. 오후 4:38:47.
 *
 * @author HANS
 ************************************************/

var initValue;
/*
 * 사이드 내비게이션에서 item-click 이벤트 발생 시 호출.
 * 아이템 클릭시 발생하는 이벤트.
 */
function onSideNav1ItemClick2(e){
	var sideNav1 = e.control;
	
	// mdi 컨트롤 
	var vcMdi = app.lookup("mdiCn");
	
	// 선택한 아이템에 대한 값 
	var vsAppId = e.item.value;
	
	// 초기값
	initValue = e.item.label;
	
	// 입력값에 선택된 앱이 존재하지 않는 경우
	if(vsAppId == null) {
		return alert("추가될 App이 존재하지 않습니다.");
	}
	
	var vcTabItem = vcMdi.findItemWithAppID(vsAppId);
	if (vcTabItem != null) {
		alert("추가되어있는 App 입니다.");
		return;
	}
	
	// addItemWithApp을 통해 앱을 추가
	var tabItem = vcMdi.addItemWithApp(vsAppId);
}

/*
 * MDI 폴더에서 content-load 이벤트 발생 시 호출.
 * TabItem의 Content가 그려지고 브라우저에 표현되기 직전에 호출됨.
 */
function onMdiCnContentLoad(e){
	var mdiCn = e.control;
	
	// mdi 컨트롤 
	var vcMdi = app.lookup("mdiCn");
	
	//선택한 탭아이템
	var tabItem = vcMdi.getSelectedTabItem();

     /** @type cpr.controls.EmbeddedApp */

    var embApp = tabItem.content;    // 선택한 탭 아이템의 컨텐츠 영역(임베디드앱)
    
    //임베디드 앱의 앱인스턴스
    var voAppIns = embApp.getEmbeddedAppInstance();

    //임베디드한 화면안에 존재하는 컨트롤의 값 변경
    voAppIns.lookup("opt").value = initValue;
}
