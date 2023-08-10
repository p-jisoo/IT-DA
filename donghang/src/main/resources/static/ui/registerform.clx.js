/*
 * App URI: registerform
 * Source Location: registerform.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("registerform", { 
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
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				var inputBox = app.lookup("ipb1");
			};
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "1px";
			formLayout_1.rightMargin = "1px";
			formLayout_1.bottomMargin = "1px";
			formLayout_1.leftMargin = "1px";
			formLayout_1.horizontalSpacing = "1px";
			formLayout_1.verticalSpacing = "1px";
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["50px", "50px", "50px", "50px", "50px", "50px", "50px", "20px"]);
			formLayout_1.setRowAutoSizing(0, true);
			group_1.setLayout(formLayout_1);
			(function(container){
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.showClearButton = true;
				inputBox_1.placeholder = "아이디";
				inputBox_1.style.css({
					"background-repeat" : "no-repeat",
					"background-size" : "contain",
					"white-space" : "normal",
					"background-image" : "url('theme/images/icon/flag/001-south-korea.svg')",
					"background-position" : "center",
					"background-origin" : "border-box"
				});
				container.addChild(inputBox_1, {
					"colIndex": 0,
					"rowIndex": 0,
					"colSpan": 1,
					"rowSpan": 1,
					"horizontalAlign": "fill"
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb3");
				inputBox_2.placeholder = "주소";
				container.addChild(inputBox_2, {
					"colIndex": 0,
					"rowIndex": 3
				});
				var inputBox_3 = new cpr.controls.InputBox("ipb4");
				inputBox_3.placeholder = "비밀번호";
				container.addChild(inputBox_3, {
					"colIndex": 0,
					"rowIndex": 1
				});
				var inputBox_4 = new cpr.controls.InputBox("ipb5");
				inputBox_4.placeholder = "전화번호";
				container.addChild(inputBox_4, {
					"colIndex": 0,
					"rowIndex": 4
				});
				var inputBox_5 = new cpr.controls.InputBox("ipb6");
				inputBox_5.placeholder = "이름";
				container.addChild(inputBox_5, {
					"colIndex": 0,
					"rowIndex": 5
				});
				var inputBox_6 = new cpr.controls.InputBox("ipb7");
				inputBox_6.placeholder = "닉네임";
				container.addChild(inputBox_6, {
					"colIndex": 0,
					"rowIndex": 6
				});
				var output_1 = new cpr.controls.Output();
				output_1.value = "Output";
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 2
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "278px",
						"left": "660px",
						"width": "495px",
						"height": "392px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "200px",
						"left": "350px",
						"width": "344px",
						"height": "368px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "120px",
						"left": "98px",
						"width": "304px",
						"height": "347px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "80px",
						"left": "33px",
						"width": "297px",
						"height": "359px"
					}
				]
			});
			
			var output_2 = new cpr.controls.Output();
			output_2.value = "회원정보수정";
			output_2.style.css({
				"text-align" : "center"
			});
			container.addChild(output_2, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "102px",
						"right": "773px",
						"bottom": "836px",
						"left": "653px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "20px",
						"left": "345px",
						"width": "353px",
						"height": "80px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "20px",
						"left": "164px",
						"width": "172px",
						"height": "80px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "20px",
						"right": "129px",
						"left": "132px",
						"height": "45px"
					}
				]
			});
			
			var button_1 = new cpr.controls.Button();
			button_1.value = "수정";
			container.addChild(button_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "710px",
						"left": "839px",
						"width": "137px",
						"height": "38px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "598px",
						"left": "475px",
						"width": "73px",
						"height": "38px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "506px",
						"left": "207px",
						"width": "49px",
						"height": "20px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "448px",
						"left": "121px",
						"width": "100px",
						"height": "20px"
					}
				]
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "registerform";
	cpr.core.Platform.INSTANCE.register(app);
})();
