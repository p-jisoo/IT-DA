/************************************************
 * loginMember.js
 * Created at 2023. 8. 9. 오후 2:50:05.
 *
 * @author USER
 ************************************************/
/*
 * "로그인" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	var submission = app.lookup("sms1");	
	var id = app.lookup("ipb1");
	var pwd = app.lookup("ipb2");
		if(id.length==0){
			alert("아이디를 입력하세요")
			return false;
		}
		if(pwd.length==0){
			alert("비밀번호를 입력하세요");
			return false;
		}
		submission.send();
		}
		app.openDialog("", {
		width: 500,
		height: 350,
		headerVisible: false
	}, function(dialog) {
		dialog.ready(function(dialogApp) {
		dialog.initValue={param1 : id.value, param2: pwd.value, param3: adr.value, param4: Tel.value, param5: name.value,param6: nickName.value,param7:email.value};
			
			dialogApp.addEventListener("click", function(e) {
						
			});	
		});
	}).then(function(returnValue) {
		console.log(returnValue);
		if(returnValue == "true"){
			window.location.href="/";
		}
	});

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSms1SubmitSuccess(e){
	var sms1 = e.control;
	
	window.location.href="/"
	
}

/*
 * "회원가입" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	window.location.href="registerMember.clx";
}
	

/*
 * 이미지에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onImgHomeClick(e){
	var imgHome = e.control;
	var img = app.lookup("imgHome");
	window.location.href="/";
}

/*
 * "아이디 찾기" 아웃풋에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onOutputClick(e){
	var output = e.control;
	window.location.href=""
}


/*
 * "/ 비밀번호 찾기" 아웃풋에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onOutputClick2(e){
	var output = e.control;
	window.location.href="selectPassword.clx"
}
