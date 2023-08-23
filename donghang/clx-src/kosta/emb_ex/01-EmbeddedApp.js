/************************************************
 * Accordion.js
 * Created at 2022. 11. 11. 오전 9:30:07.
 *
 * @author jiyeon
 ************************************************/

/*
 * 트리에서 item-click 이벤트 발생 시 호출.
 * 아이템 클릭시 발생하는 이벤트.
 */
function onTre1ItemClick(e){
	var tre1 = e.control;
	
	var vsAppId = e.item.row.getValue("appId");
	
	/*앱 아이디가 없는 경우 리턴합니다.*/
	if (vsAppId == "") {
		return;
	}
	
	var vcEmb = app.lookup("ea1");
	
	/*초기값 설정*/
	var voInitValue = {
		"value": e.item.label,
		"appId": vsAppId
	};
	
	if (vcEmb) {
		/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
		cpr.core.App.load(vsAppId, function( /*cpr.core.App*/ loadedApp) {
			/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
			if (vcEmb.getEmbeddedAppInstance()) {
				vcEmb.getEmbeddedAppInstance().dispose();
			}
			
			/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
			if (loadedApp) {
				
				vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {
					/*초기값을 전달합니다.*/
					embApp.initValue = voInitValue;
					
					/*임베디드 앱 내부 앱 인스턴스의 앱 속성에 값을 가져옵니다.*/
					app.lookup("opt1").value = vcEmb.getEmbeddedAppInstance().getAppProperty("appId");
					
					/*현재 임베디드앱에 메소드가 있는지 판단합니다.*/
					if (vcEmb.hasAppMethod("alertMessage")) {
						/*현재 임베디드 앱에 메소드가 있으면 메소드를 호출합니다.*/
						vcEmb.callAppMethod("alertMessage", "현재 앱의 alertMessage() 함수가 있습니다.");
						app.lookup("opt1").value = "현재 앱의 alertMessage() 함수가 있습니다.";
					} else {
						app.lookup("opt1").value = "현재 앱에 출판된 함수가 없습니다.";
					}
				});
				
				/*임베디드 앱에 내장할 앱을 로드하여 설정합니다.*/
				vcEmb.app = loadedApp;
			}
		});
	}
	
	
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	app.lookup("tre1").addEventListener("item-click", function(e){

	});
	
	app.lookup("button1").addEventListener("click", function(e){

	});
}

/*
 * "값 가져오기" 버튼(button1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton1Click(e){
	var button1 = e.control;
	
	var vcEmb = app.lookup("ea1");
	
	if (!vcEmb.getEmbeddedAppInstance()) return;
	/*임베디드 앱 내부 앱 인스턴스의 앱 속성에 값을 가져옵니다.*/
	app.lookup("opt1").value = vcEmb.getEmbeddedAppInstance().getAppProperty("appId");
}

/*
 * 임베디드 앱에서 load 이벤트 발생 시 호출.
 * 임베디드 앱이 준비되고 그려진 후에 디스패치 되는 이벤트.
 */
function onEmbapp2Load(e){
	var embapp2 = e.control;
	app.lookup("optMdIH").value = "두번째 탭에 임베디드 앱이 실행중입니다.";
	
}
