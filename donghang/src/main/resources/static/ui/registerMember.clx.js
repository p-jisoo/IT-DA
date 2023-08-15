/*
 * App URI: registerMember
 * Source Location: registerMember.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("registerMember", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * registerform.js
			 * Created at 2023. 8. 9. 오후 3:01:12.
			 *
			 * @author USER
			 ************************************************/

			/*
			 * "회원가입" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				var submission = app.lookup("sms1");
				submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSms1SubmitSuccess2(e){
				var sms1 = e.control;
				window.location.href="/";
			}

			/*
			 * 서브미션에서 submit-error 이벤트 발생 시 호출.
			 * 통신 중 문제가 생기면 발생합니다.
			 */
			function onSms1SubmitError(e){
				var sms1 = e.control;
				var initValue={
					
					"msg" : "회원가입 안내창"
				}
				
				app.openDialog("appURI", {width : 400, height : 300}, function(dialog){
					dialog.ready(function(dialogApp){
						// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
						dialogApp.initValue = initValue;
					});
				}).then(function(returnValue){
					alert(JSON.stringify(returnValue));
				});
			}

			/*
			 * "중복확인" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e){
				var button = e.control;
				var id = app.lookup("ipb1").value;
				var dataMap = app.lookup("CheckId");
				dataMap.setValue("userId", id);
				var submission = app.lookup("sms2");
				submission.send();	
			}
			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSms2SubmitSuccess(e ){
				var sms2 = e.control;
				var metadata = sms2.getMetadata("checkId");
				if(metadata !="null"){
					var chkId = app.lookup("ipb1");
					chkId.value="";
					chkId.redraw();
					var chkIdMsg = app.lookup("checkId");
					chkIdMsg.visible=true;
				}
				
			}

			/*
			 * "우편번호 확인" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick3(e){
				var button = e.control;
			 	cpr.core.ResourceLoader.loadScript("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js")
					.then(function(input){
					    new daum.Postcode({
			        oncomplete: function(data) {
			            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
			            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
			        	var inputBox = app.lookup("Address");
			            var inputBox2 = app.lookup("PostCode");
			        	var addr= "";
			              	console.log(addr);
			         	  //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
			                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
			                    addr = data.roadAddress;
			                  inputBox.value=addr;
			                } else { // 사용자가 지번 주소를 선택했을 경우(J)
			                    addr = data.jibunAddress;
			                    inputBox.value=addr;
			                }
			               
			           	inputBox2.value = data.zonecode;
			              		                  		
			        }
			    }).open()	;
			 });
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("dm1");
			dataMap_1.parseData({
				"columns" : [
					{
						"name": "userId",
						"dataType": "string",
						"info": ""
					},
					{"name": "password"},
					{
						"name": "address",
						"dataType": "string"
					},
					{"name": "userTel"},
					{"name": "userName"},
					{
						"name": "nickName",
						"dataType": "string"
					}
				]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("CheckId");
			dataMap_2.parseData({
				"columns" : [{"name": "userId"}]
			});
			app.register(dataMap_2);
			var submission_1 = new cpr.protocols.Submission("sms1");
			submission_1.action = "registerMember";
			submission_1.addRequestData(dataMap_1);
			if(typeof onSms1SubmitSuccess2 == "function") {
				submission_1.addEventListener("submit-success", onSms1SubmitSuccess2);
			}
			if(typeof onSms1SubmitError == "function") {
				submission_1.addEventListener("submit-error", onSms1SubmitError);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("sms2");
			submission_2.action = "checkIdMember";
			submission_2.addRequestData(dataMap_2);
			submission_2.addResponseData(dataMap_2, false);
			if(typeof onSms2SubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onSms2SubmitSuccess);
			}
			app.register(submission_2);
			app.supportMedia("all and (min-width: 1980px)", "register");
			app.supportMedia("all and (min-width: 1920px) and (max-width: 1979px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"text-align" : "center",
				"color" : "#91C8E4",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var image_1 = new cpr.controls.Image();
			image_1.src = "theme/images/pivot/logodonghang .png";
			if(typeof onImageValueChange == "function") {
				image_1.addEventListener("value-change", onImageValueChange);
			}
			if(typeof onImageItemClick2 == "function") {
				image_1.addEventListener("item-click", onImageItemClick2);
			}
			container.addChild(image_1, {
				positions: [
					{
						"media": "all and (min-width: 1980px)",
						"top": "21px",
						"left": "34px",
						"width": "111px",
						"height": "146px"
					}, 
					{
						"media": "all and (min-width: 1920px) and (max-width: 1979px)",
						"top": "21px",
						"left": "43px",
						"width": "142px",
						"height": "146px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "21px",
						"left": "43px",
						"width": "142px",
						"height": "146px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "21px",
						"left": "21px",
						"width": "69px",
						"height": "146px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "21px",
						"left": "15px",
						"width": "49px",
						"height": "146px"
					}
				]
			});
			
			var output_1 = new cpr.controls.Output();
			output_1.value = "ITda";
			output_1.style.css({
				"color" : "#4682A9",
				"font-weight" : "bolder",
				"font-size" : "2rem"
			});
			container.addChild(output_1, {
				positions: [
					{
						"media": "all and (min-width: 1980px)",
						"top": "72px",
						"left": "167px",
						"width": "84px",
						"height": "44px"
					}, 
					{
						"media": "all and (min-width: 1920px) and (max-width: 1979px)",
						"top": "72px",
						"left": "214px",
						"width": "107px",
						"height": "44px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "72px",
						"left": "214px",
						"width": "107px",
						"height": "44px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "72px",
						"left": "104px",
						"width": "52px",
						"height": "44px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "72px",
						"left": "73px",
						"width": "37px",
						"height": "44px"
					}
				]
			});
			
			var output_2 = new cpr.controls.Output();
			output_2.value = "Accompany";
			output_2.style.css({
				"color" : "#4682A9",
				"font-weight" : "bold",
				"font-size" : "1.6rem"
			});
			container.addChild(output_2, {
				positions: [
					{
						"media": "all and (min-width: 1980px)",
						"top": "114px",
						"left": "167px",
						"width": "120px",
						"height": "41px"
					}, 
					{
						"media": "all and (min-width: 1920px) and (max-width: 1979px)",
						"top": "114px",
						"left": "214px",
						"width": "153px",
						"height": "41px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "114px",
						"left": "214px",
						"width": "153px",
						"height": "41px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "114px",
						"left": "104px",
						"width": "75px",
						"height": "41px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "114px",
						"left": "73px",
						"width": "52px",
						"height": "41px"
					}
				]
			});
			
			var group_1 = new cpr.controls.Container();
			var responsiveXYLayout_2 = new cpr.controls.layouts.ResponsiveXYLayout();
			group_1.setLayout(responsiveXYLayout_2);
			(function(container){
				var output_3 = new cpr.controls.Output();
				output_3.value = "회원가입";
				output_3.style.css({
					"font-weight" : "bold",
					"font-size" : "2.7rem",
					"font-style" : "normal"
				});
				container.addChild(output_3, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "20px",
							"left": "43px",
							"width": "256px",
							"height": "65px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "20px",
							"left": "55px",
							"width": "179px",
							"height": "65px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "20px",
							"left": "55px",
							"width": "179px",
							"height": "65px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "20px",
							"left": "27px",
							"width": "87px",
							"height": "65px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "20px",
							"left": "19px",
							"width": "61px",
							"height": "65px"
						}
					]
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1980px)",
						"top": "40px",
						"left": "651px",
						"width": "479px",
						"height": "107px"
					}, 
					{
						"media": "all and (min-width: 1920px) and (max-width: 1979px)",
						"top": "40px",
						"left": "494px",
						"width": "375px",
						"height": "107px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "40px",
						"left": "494px",
						"width": "375px",
						"height": "107px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "40px",
						"left": "241px",
						"width": "183px",
						"height": "107px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "40px",
						"left": "169px",
						"width": "128px",
						"height": "107px"
					}
				]
			});
			
			var button_1 = new cpr.controls.Button();
			button_1.value = "회원가입";
			button_1.style.css({
				"font-weight" : "bold",
				"font-size" : "1.7rem"
			});
			if(typeof onButtonClick == "function") {
				button_1.addEventListener("click", onButtonClick);
			}
			container.addChild(button_1, {
				positions: [
					{
						"media": "all and (min-width: 1980px)",
						"top": "1267px",
						"left": "651px",
						"width": "234px",
						"height": "79px"
					}, 
					{
						"media": "all and (min-width: 1920px) and (max-width: 1979px)",
						"top": "955px",
						"left": "494px",
						"width": "213px",
						"height": "79px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "955px",
						"left": "494px",
						"width": "213px",
						"height": "79px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "955px",
						"left": "241px",
						"width": "104px",
						"height": "79px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "955px",
						"left": "169px",
						"width": "73px",
						"height": "79px"
					}
				]
			});
			
			var group_2 = new cpr.controls.Container();
			var responsiveXYLayout_3 = new cpr.controls.layouts.ResponsiveXYLayout();
			group_2.setLayout(responsiveXYLayout_3);
			(function(container){
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.placeholder = "아이디를 입력해주세요";
				inputBox_1.style.css({
					"font-weight" : "normal",
					"font-size" : "1.2rem",
					"font-style" : "normal"
				});
				inputBox_1.bind("value").toDataMap(app.lookup("dm1"), "userId");
				container.addChild(inputBox_1, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "2px",
							"left": "0px",
							"width": "246px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "2px",
							"left": "0px",
							"width": "315px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "2px",
							"left": "0px",
							"width": "315px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "2px",
							"left": "0px",
							"width": "154px",
							"height": "55px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "2px",
							"left": "0px",
							"width": "108px",
							"height": "55px"
						}
					]
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "중복확인";
				button_2.style.css({
					"font-weight" : "bold",
					"font-size" : "1.15rem"
				});
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "21px",
							"left": "276px",
							"width": "102px",
							"height": "36px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "21px",
							"left": "325px",
							"width": "130px",
							"height": "36px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "21px",
							"left": "325px",
							"width": "130px",
							"height": "36px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "21px",
							"left": "159px",
							"width": "63px",
							"height": "36px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "21px",
							"left": "111px",
							"width": "44px",
							"height": "36px"
						}
					]
				});
				var output_4 = new cpr.controls.Output("checkId");
				output_4.visible = false;
				output_4.value = "이미 사용중인 아이디입니다.";
				output_4.style.css({
					"color" : "#ED3838"
				});
				container.addChild(output_4, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "56px",
							"left": "0px",
							"width": "246px",
							"height": "41px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "56px",
							"left": "0px",
							"width": "315px",
							"height": "41px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "56px",
							"left": "0px",
							"width": "315px",
							"height": "41px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "56px",
							"left": "0px",
							"width": "154px",
							"height": "41px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "56px",
							"left": "0px",
							"width": "108px",
							"height": "41px"
						}
					]
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb2");
				inputBox_2.secret = true;
				inputBox_2.placeholder = "비밀번호";
				inputBox_2.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_2.bind("value").toDataMap(app.lookup("dm1"), "password");
				container.addChild(inputBox_2, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "130px",
							"left": "-1px",
							"width": "379px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "106px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "106px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "106px",
							"left": "0px",
							"width": "220px",
							"height": "55px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "106px",
							"left": "0px",
							"width": "154px",
							"height": "55px"
						}
					]
				});
				var inputBox_3 = new cpr.controls.InputBox("ipb3");
				inputBox_3.secret = true;
				inputBox_3.placeholder = "비밀번호 재확인";
				inputBox_3.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_3.bind("value").toDataMap(app.lookup("dm1"), "password");
				container.addChild(inputBox_3, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "194px",
							"left": "-1px",
							"width": "379px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "170px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "170px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "170px",
							"left": "0px",
							"width": "220px",
							"height": "55px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "170px",
							"left": "0px",
							"width": "154px",
							"height": "55px"
						}
					]
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "비밀번호를 입력하세요.";
				output_5.style.css({
					"color" : "#ED3838"
				});
				container.addChild(output_5, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "248px",
							"left": "-1px",
							"width": "246px",
							"height": "41px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "224px",
							"left": "0px",
							"width": "315px",
							"height": "41px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "224px",
							"left": "0px",
							"width": "315px",
							"height": "41px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "224px",
							"left": "0px",
							"width": "154px",
							"height": "41px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "224px",
							"left": "0px",
							"width": "108px",
							"height": "41px"
						}
					]
				});
				var inputBox_4 = new cpr.controls.InputBox("PostCode");
				inputBox_4.placeholder = "우편번호";
				inputBox_4.style.css({
					"font-size" : "1.2rem"
				});
				container.addChild(inputBox_4, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "339px",
							"left": "-1px",
							"width": "230px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "293px",
							"left": "0px",
							"width": "295px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "293px",
							"left": "0px",
							"width": "295px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "293px",
							"left": "0px",
							"width": "144px",
							"height": "55px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "293px",
							"left": "0px",
							"width": "101px",
							"height": "55px"
						}
					]
				});
				var button_3 = new cpr.controls.Button();
				button_3.value = "우편번호 확인";
				button_3.style.css({
					"font-weight" : "bold",
					"font-size" : "1.15rem"
				});
				if(typeof onButtonClick3 == "function") {
					button_3.addEventListener("click", onButtonClick3);
				}
				container.addChild(button_3, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "358px",
							"left": "253px",
							"width": "126px",
							"height": "36px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "312px",
							"left": "325px",
							"width": "130px",
							"height": "36px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "312px",
							"left": "325px",
							"width": "130px",
							"height": "36px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "312px",
							"left": "159px",
							"width": "63px",
							"height": "36px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "312px",
							"left": "111px",
							"width": "44px",
							"height": "36px"
						}
					]
				});
				var inputBox_5 = new cpr.controls.InputBox("Address");
				inputBox_5.placeholder = "도로명 주소, 지번 주소";
				inputBox_5.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_5.bind("value").toDataMap(app.lookup("dm1"), "address");
				if(typeof onRoadAddressChange == "function") {
					inputBox_5.addEventListener("change", onRoadAddressChange);
				}
				if(typeof onRoadAddressKeydown == "function") {
					inputBox_5.addEventListener("keydown", onRoadAddressKeydown);
				}
				if(typeof onRoadAddressKeyup2 == "function") {
					inputBox_5.addEventListener("keyup", onRoadAddressKeyup2);
				}
				container.addChild(inputBox_5, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "403px",
							"left": "-1px",
							"width": "380px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "357px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "357px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "357px",
							"left": "0px",
							"width": "220px",
							"height": "55px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "357px",
							"left": "0px",
							"width": "154px",
							"height": "55px"
						}
					]
				});
				var inputBox_6 = new cpr.controls.InputBox("detailAddress");
				inputBox_6.placeholder = "상세 주소";
				inputBox_6.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_6.bind("value").toDataMap(app.lookup("dm1"), "address");
				container.addChild(inputBox_6, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "466px",
							"left": "-1px",
							"width": "380px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "420px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "420px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "420px",
							"left": "0px",
							"width": "220px",
							"height": "55px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "420px",
							"left": "0px",
							"width": "154px",
							"height": "55px"
						}
					]
				});
				var maskEditor_1 = new cpr.controls.MaskEditor("mse1");
				maskEditor_1.mask = "XXX-XXXX-XXXX";
				maskEditor_1.autoSkip = true;
				maskEditor_1.style.css({
					"font-size" : "1.2rem"
				});
				maskEditor_1.bind("value").toDataMap(app.lookup("dm1"), "userTel");
				container.addChild(maskEditor_1, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "592px",
							"left": "0px",
							"width": "228px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "501px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "501px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "501px",
							"left": "0px",
							"width": "220px",
							"height": "55px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "501px",
							"left": "0px",
							"width": "154px",
							"height": "55px"
						}
					]
				});
				var inputBox_7 = new cpr.controls.InputBox("ipb7");
				inputBox_7.placeholder = "이름";
				inputBox_7.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_7.bind("value").toDataMap(app.lookup("dm1"), "userName");
				container.addChild(inputBox_7, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "656px",
							"left": "0px",
							"width": "378px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "565px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "565px",
							"left": "0px",
							"width": "450px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "565px",
							"left": "0px",
							"width": "220px",
							"height": "55px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "565px",
							"left": "0px",
							"width": "154px",
							"height": "55px"
						}
					]
				});
				var inputBox_8 = new cpr.controls.InputBox("ipb8");
				inputBox_8.placeholder = "닉네임";
				inputBox_8.style.css({
					"font-size" : "1.2rem"
				});
				inputBox_8.bind("value").toDataMap(app.lookup("dm1"), "nickName");
				container.addChild(inputBox_8, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "720px",
							"left": "0px",
							"width": "246px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "629px",
							"left": "0px",
							"width": "315px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "629px",
							"left": "0px",
							"width": "315px",
							"height": "55px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "629px",
							"left": "0px",
							"width": "154px",
							"height": "55px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "629px",
							"left": "0px",
							"width": "108px",
							"height": "55px"
						}
					]
				});
				var button_4 = new cpr.controls.Button();
				button_4.value = "중복확인";
				button_4.style.css({
					"font-weight" : "bold",
					"font-size" : "1.15rem"
				});
				container.addChild(button_4, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "739px",
							"left": "276px",
							"width": "102px",
							"height": "36px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "648px",
							"left": "325px",
							"width": "130px",
							"height": "36px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "648px",
							"left": "325px",
							"width": "130px",
							"height": "36px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "648px",
							"left": "159px",
							"width": "63px",
							"height": "36px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "648px",
							"left": "111px",
							"width": "44px",
							"height": "36px"
						}
					]
				});
				var output_6 = new cpr.controls.Output();
				output_6.value = "닉네임을 입력하세요.";
				output_6.style.css({
					"color" : "#ED3838"
				});
				container.addChild(output_6, {
					positions: [
						{
							"media": "all and (min-width: 1980px)",
							"top": "774px",
							"left": "0px",
							"width": "246px",
							"height": "41px"
						}, 
						{
							"media": "all and (min-width: 1920px) and (max-width: 1979px)",
							"top": "683px",
							"left": "0px",
							"width": "315px",
							"height": "41px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "683px",
							"left": "0px",
							"width": "315px",
							"height": "41px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "683px",
							"left": "0px",
							"width": "154px",
							"height": "41px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "683px",
							"left": "0px",
							"width": "108px",
							"height": "41px"
						}
					]
				});
			})(group_2);
			container.addChild(group_2, {
				positions: [
					{
						"media": "all and (min-width: 1980px)",
						"top": "258px",
						"left": "651px",
						"width": "980px",
						"height": "999px"
					}, 
					{
						"media": "all and (min-width: 1920px) and (max-width: 1979px)",
						"top": "166px",
						"left": "494px",
						"width": "726px",
						"height": "746px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "166px",
						"left": "494px",
						"width": "726px",
						"height": "746px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "166px",
						"left": "241px",
						"width": "354px",
						"height": "746px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "166px",
						"left": "169px",
						"width": "248px",
						"height": "746px"
					}
				]
			});
		}
	});
	app.title = "registerMember";
	cpr.core.Platform.INSTANCE.register(app);
})();
