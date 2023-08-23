/************************************************
 * testEmb.js
 * Created at 2023. 8. 17. 오후 2:13:39.
 *
 * @author USER
 ************************************************/

/*
 * 트리에서 item-click 이벤트 발생 시 호출.
 * 아이템 클릭시 발생하는 이벤트.
 */
function onTre1ItemClick(e){
	var tre1 = e.control;
	// 배치한 임베디드 앱
	var vcEmb = app.lookup("ea1");
	
	// 선택한 아이템에 대한 값 
	var vsAppId = e.item.value;
	
	// 입력값에 선택된 앱이 존재하지 않는 경우
	if(vsAppId == null) {
		return alert("추가될 App이 존재하지 않습니다.");
	}
	
	/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
	cpr.core.App.load(vsAppId, function(/*cpr.core.App*/ loadedApp){
		/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
		if(vcEmb.getEmbeddedAppInstance()){
			vcEmb.getEmbeddedAppInstance().dispose();
		}
		/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
		if(loadedApp){						
			/*초기값을 전달합니다.*/			
			vcEmb.ready(function(/*cpr.controls.EmbeddedApp*/embApp){
				embApp.initValue =  e.item.label;
				debugger
			})
			/*임베디드 앱에 내장할 앱을 로드하여 설정합니다*/
			vcEmb.app = loadedApp;
		}
	}); 
	
	
}
