
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(/* cpr.events.CEvent */ e){
	// 임베디드 앱
	var host = app.getHost();
	var opt1 = app.lookup("opt1");
	var opt4 = app.lookup("opt4");
	
	if(host){
		/*임베디드 앱의 초기값을 가져옵니다.*/
		opt1.value = host.initValue.value;
		opt4.value = host.initValue.appId;
	}
	
	/*부모 앱 인스턴스에 접근합니다.*/
	var hostAppInstance = host.getAppInstance();

	app.lookup("button1").addEventListener("click", function(e){
		/*부모 앱 인스턴스에 'ace' UDC에 접근하여 값을 전달합니다.*/
		hostAppInstance.lookup("ace").value = onButton1Click;
	});
}

/**
 * 알람메시지
 * @param {String} message 메시지
 */
function alertMessage(message){
	app.lookup("opt3").value = message;
}

exports.alertMessage = alertMessage;


/*
 * "값 가져오기" 버튼(button1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButton1Click(/* cpr.events.CMouseEvent */ e){
	/** 
	 * @type cpr.controls.Button
	 */
	var button1 = e.control;
	
	// 임베디드 앱
	var host = app.getHost();
	
	/*부모 앱 인스턴스에 접근합니다.(app.getHostAppInstance() = app.getHost().getAppInstance())*/
	var hostAppInstance = host.getAppInstance();
	
	/*부모 앱 인스턴스의 앱 속성의 값을 가져옵니다.*/
	app.lookup("opt2").value = hostAppInstance.getAppProperty("mainApp");
}
