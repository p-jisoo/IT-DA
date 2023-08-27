/************************************************
 * findId2.js
 * Created at 2023. 8. 27. 오후 3:31:10.
 *
 * @author leeheeeun
 ************************************************/


/*
 * "아이디 찾기" 버튼(findIdBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onFindIdBtnClick(e){
	var findIdBtn = e.control;
	var submission = app.lookup("sms1");
	var name = app.lookup("userName");
	var email = app.lookup("email");
	if(name.length==0){
			alert("회원님 성함을 입력하세요")
			return false;
		}
		if(email.length==0){
			alert("가입시 등록한 이메일을 입력하세요");
			return false;
		}
		submission.send();
		}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSms1SubmitSuccess(e){
	var sms1 = e.control;
	var responseText = sms1.xhr.responseText;
	var any = JSON.parse(responseText);
	console.log(any.result);
	if(any.result=="success"){
		app.openDialog("findIdOK", {
			width : 500, 
			height : 350,
			headerVisible:false
		}, function(dialog){
			dialog.ready(function(dialogApp){
			dialog.addEventListener("click", function(e){
			
			});
			});
		}).then(function(returnValue){
			;
		});
			
	}else if(any.result=="fail"){
		app.openDialog("findIdfail", {
			width : 500, 
			height : 350,
			headerVisible:false
		}, function(dialog){
			dialog.ready(function(dialogApp){
			dialog.addEventListener("click", function(e){
			
			});
			});
		}).then(function(returnValue){
			;
		});
}

}
/*
 * 이미지에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onImageClick(e){
	var image = e.control;
	var img = app.lookup("home");
	window.location.href="/";
}

/*
 * "비밀번호 찾기" 아웃풋에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onOutputClick(e){
	var output = e.control;
	window.location.href="selectPassword.clx"
}
