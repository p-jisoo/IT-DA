/************************************************
 * emb_1.js
 * Created at 2023. 8. 17. 오후 2:17:51.
 *
 * @author USER
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var host = app.getHost();
	var opt1 = app.lookup("opt");
	if(host){
		opt1.value = host.initValue;
	}
}
