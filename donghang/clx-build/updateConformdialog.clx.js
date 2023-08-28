/*
 * App URI: updateConformdialog
 * Source Location: updateConformdialog.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("updateConformdialog", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/*
			 * "확 인" 버튼(no_btn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onNo_btnClick2(e){
				var no_btn = e.control;
				var button = app.lookup("cancle_btn");
				window.location.href="/"
			};
			// End - User Script
			
			// Header
			var dataMap_1 = new cpr.data.DataMap("dm1");
			dataMap_1.parseData({
				"columns" : [
					{"name": "userId"},
					{"name": "password"},
					{"name": "address"},
					{"name": "userTel"},
					{"name": "userName"},
					{"name": "nickName"},
					{"name": "email"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("sms1");
			submission_1.action = "registerMember";
			submission_1.addRequestData(dataMap_1);
			if(typeof onSms1SubmitSuccess2 == "function") {
				submission_1.addEventListener("submit-success", onSms1SubmitSuccess2);
			}
			app.register(submission_1);
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (min-width: 500px) and (max-width: 499px)", "new-screen");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("registerdialog");
			group_1.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#404040",
				"border-top-width" : "3px",
				"border-right-width" : "3px",
				"border-left-color" : "#404040",
				"border-right-color" : "#404040",
				"border-left-width" : "3px",
				"border-top-style" : "solid",
				"background-color" : "#FFFFFF",
				"border-left-style" : "solid",
				"border-bottom-width" : "3px",
				"border-top-color" : "#404040",
				"border-bottom-style" : "solid",
				"background-image" : "none"
			});
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var button_1 = new cpr.controls.Button("cancle_btn");
				button_1.value = "확 인";
				button_1.style.css({
					"border-right-style" : "solid",
					"color" : "#545454",
					"border-bottom-color" : "#404040",
					"border-top-width" : "2px",
					"font-weight" : "bold",
					"border-right-width" : "2px",
					"border-left-color" : "#404040",
					"font-size" : "1.5rem",
					"border-right-color" : "#404040",
					"border-left-width" : "2px",
					"border-top-style" : "solid",
					"background-color" : "#F6F4EB",
					"border-left-style" : "solid",
					"border-bottom-width" : "2px",
					"border-top-color" : "#404040",
					"border-bottom-style" : "solid",
					"background-image" : "none"
				});
				if(typeof onNo_btnClick2 == "function") {
					button_1.addEventListener("click", onNo_btnClick2);
				}
				container.addChild(button_1, {
					"right": "0px",
					"bottom": "0px",
					"left": "0px",
					"height": "80px"
				});
				var output_1 = new cpr.controls.Output();
				output_1.value = "수정되셨습니다!";
				output_1.style.css({
					"font-weight" : "bold",
					"font-size" : "1.3rem",
					"text-align" : "center"
				});
				container.addChild(output_1, {
					"top": "142px",
					"left": "54px",
					"width": "284px",
					"height": "60px"
				});
				var image_1 = new cpr.controls.Image();
				image_1.src = "theme/images/img/updateconfirm_donghang.png";
				container.addChild(image_1, {
					"top": "31px",
					"left": "150px",
					"width": "92px",
					"height": "101px"
				});
			})(group_1);
			if(typeof onRegisterdialogClick == "function") {
				group_1.addEventListener("click", onRegisterdialogClick);
			}
			container.addChild(group_1, {
				"top": "0px",
				"left": "0px",
				"width": "398px",
				"height": "298px"
			});
		}
	});
	app.title = "updateConformdialog";
	cpr.core.Platform.INSTANCE.register(app);
})();
