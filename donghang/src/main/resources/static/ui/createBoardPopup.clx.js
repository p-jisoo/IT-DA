/*
 * App URI: createBoardPopup
 * Source Location: createBoardPopup.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("createBoardPopup", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * loginMember.js
			 * Created at 2023. 8. 9. 오후 2:50:05.
			 *
			 * @author USER
			 ************************************************/;
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
			group_1.style.css({
				"background-color" : "#E3E3E3"
			});
			var responsiveXYLayout_2 = new cpr.controls.layouts.ResponsiveXYLayout();
			group_1.setLayout(responsiveXYLayout_2);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "정말 교육 등록 하시겠습니까?";
				output_1.style.css({
					"font-size" : "30px",
					"text-align" : "center"
				});
				container.addChild(output_1, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "24px",
							"left": "20px",
							"width": "700px",
							"height": "160px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "20px",
							"left": "20px",
							"width": "556px",
							"height": "160px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "20px",
							"left": "10px",
							"width": "271px",
							"height": "160px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "20px",
							"left": "7px",
							"width": "190px",
							"height": "160px"
						}
					]
				});
				var button_1 = new cpr.controls.Button();
				button_1.value = "취소";
				button_1.style.css({
					"background-color" : "#84888A",
					"font-size" : "25px"
				});
				container.addChild(button_1, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "194px",
							"left": "429px",
							"width": "300px",
							"height": "50px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "194px",
							"left": "310px",
							"width": "265px",
							"height": "50px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "194px",
							"left": "151px",
							"width": "129px",
							"height": "50px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "194px",
							"left": "106px",
							"width": "91px",
							"height": "50px"
						}
					]
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "확인";
				button_2.style.css({
					"background-color" : "#4682A9",
					"font-size" : "25px"
				});
				container.addChild(button_2, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "194px",
							"left": "20px",
							"width": "300px",
							"height": "50px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "194px",
							"left": "18px",
							"width": "265px",
							"height": "50px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "194px",
							"left": "9px",
							"width": "129px",
							"height": "50px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "194px",
							"left": "6px",
							"width": "91px",
							"height": "50px"
						}
					]
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "210px",
						"left": "388px",
						"width": "750px",
						"height": "262px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "112px",
						"left": "222px",
						"width": "597px",
						"height": "262px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "112px",
						"left": "108px",
						"width": "292px",
						"height": "262px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "112px",
						"left": "76px",
						"width": "204px",
						"height": "262px"
					}
				]
			});
		}
	});
	app.title = "createBoardPopup";
	cpr.core.Platform.INSTANCE.register(app);
})();
