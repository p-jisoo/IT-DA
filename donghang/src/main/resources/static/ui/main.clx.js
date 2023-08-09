/*
 * App URI: main
 * Source Location: main.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("main", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * header.js
			 * Created at 2023. 8. 9. 오후 3:15:49.
			 *
			 * @author leeheeeun
			 ************************************************/

			/**
			 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
			 */
			exports.getText = function(){
				// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
				return "";
			};;
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1920px)", "new-screen");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1919px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"color" : "#fffff",
				"font-style" : "oblique",
				"width" : "100%",
				"top" : "0px",
				"height" : "100%",
				"left" : "0px",
				"font-weight" : "bolder"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			group_1.overscrollBehavior = "none";
			group_1.style.css({
				"background-color" : "#8AB0FE",
				"color" : "#59E1FB"
			});
			var responsiveXYLayout_2 = new cpr.controls.layouts.ResponsiveXYLayout();
			group_1.setLayout(responsiveXYLayout_2);
			(function(container){
				var button_1 = new cpr.controls.Button();
				button_1.value = "마이 페이지";
				button_1.style.css({
					"background-color" : "#8ab0fe",
					"border-right-style" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-weight" : "bolder",
					"font-size" : "1rem",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				container.addChild(button_1, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "10px",
							"left": "1453px",
							"width": "127px",
							"height": "20px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "10px",
							"left": "1453px",
							"width": "127px",
							"height": "20px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "10px",
							"left": "709px",
							"width": "62px",
							"height": "20px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "10px",
							"left": "497px",
							"width": "43px",
							"height": "20px"
						}
					]
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "로그인";
				button_2.style.css({
					"background-color" : "#8ab0fe",
					"border-right-style" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-weight" : "bolder",
					"font-size" : "1rem",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				container.addChild(button_2, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "10px",
							"left": "1600px",
							"width": "127px",
							"height": "20px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "10px",
							"left": "1600px",
							"width": "127px",
							"height": "20px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "10px",
							"left": "781px",
							"width": "62px",
							"height": "20px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "10px",
							"left": "547px",
							"width": "43px",
							"height": "20px"
						}
					]
				});
				var button_3 = new cpr.controls.Button();
				button_3.value = "회원가입";
				button_3.style.css({
					"background-color" : "#8ab0fe",
					"border-right-style" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-weight" : "bolder",
					"font-size" : "1rem",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				container.addChild(button_3, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "10px",
							"left": "1736px",
							"width": "164px",
							"height": "20px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "10px",
							"left": "1736px",
							"width": "164px",
							"height": "20px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "10px",
							"left": "848px",
							"width": "80px",
							"height": "20px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "10px",
							"left": "593px",
							"width": "56px",
							"height": "20px"
						}
					]
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "0px",
						"right": "0px",
						"left": "0px",
						"height": "40px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "0px",
						"right": "0px",
						"left": "0px",
						"height": "40px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "0px",
						"right": "0px",
						"left": "0px",
						"height": "40px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "0px",
						"right": "0px",
						"left": "0px",
						"height": "40px"
					}
				]
			});
			
			var group_2 = new cpr.controls.Container();
			group_2.overscrollBehavior = "none";
			group_2.style.css({
				"background-color" : "#F4F4F2",
				"color" : "#59E1FB"
			});
			var responsiveXYLayout_3 = new cpr.controls.layouts.ResponsiveXYLayout();
			group_2.setLayout(responsiveXYLayout_3);
			(function(container){
				var image_1 = new cpr.controls.Image();
				image_1.src = "theme/images/11.png";
				image_1.style.css({
					"border-right-style" : "none",
					"border-left-style" : "none",
					"border-bottom-style" : "none",
					"border-top-style" : "none"
				});
				container.addChild(image_1, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "8px",
							"left": "38px",
							"width": "109px",
							"height": "65px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "8px",
							"left": "20px",
							"width": "58px",
							"height": "65px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "8px",
							"left": "10px",
							"width": "28px",
							"height": "65px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "8px",
							"left": "7px",
							"width": "20px",
							"height": "65px"
						}
					]
				});
				var button_4 = new cpr.controls.Button();
				button_4.value = "ITDA 후기";
				button_4.style.css({
					"background-color" : "#f4f4f2",
					"border-right-style" : "none",
					"color" : "#000000",
					"border-left-style" : "none",
					"font-size" : "1.5rem",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				container.addChild(button_4, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "25px",
							"left": "1191px",
							"width": "231px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "25px",
							"left": "635px",
							"width": "123px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "25px",
							"left": "310px",
							"width": "60px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "25px",
							"left": "217px",
							"width": "42px",
							"height": "30px"
						}
					]
				});
				var output_1 = new cpr.controls.Output();
				output_1.value = "IT-DA";
				output_1.style.css({
					"border-right-style" : "none",
					"border-left-style" : "none",
					"font-weight" : "bold",
					"font-size" : "2rem",
					"border-bottom-style" : "none",
					"border-top-style" : "none"
				});
				container.addChild(output_1, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "18px",
							"left": "165px",
							"width": "188px",
							"height": "43px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "18px",
							"left": "88px",
							"width": "100px",
							"height": "43px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "18px",
							"left": "43px",
							"width": "49px",
							"height": "43px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "18px",
							"left": "30px",
							"width": "34px",
							"height": "43px"
						}
					]
				});
				var button_5 = new cpr.controls.Button();
				button_5.value = "봉사 모집";
				button_5.style.css({
					"background-color" : "#f4f4f2",
					"border-right-style" : "none",
					"color" : "#000000",
					"border-left-style" : "none",
					"font-size" : "1.5rem",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				container.addChild(button_5, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "25px",
							"left": "900px",
							"width": "231px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "25px",
							"left": "480px",
							"width": "123px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "25px",
							"left": "234px",
							"width": "60px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "25px",
							"left": "164px",
							"width": "42px",
							"height": "30px"
						}
					]
				});
				var button_6 = new cpr.controls.Button();
				button_6.value = "봉사 자료";
				button_6.style.css({
					"background-color" : "#f4f4f2",
					"border-right-style" : "none",
					"color" : "#000000",
					"border-left-style" : "none",
					"font-size" : "1.5rem",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				container.addChild(button_6, {
					positions: [
						{
							"media": "all and (min-width: 1920px)",
							"top": "25px",
							"left": "611px",
							"width": "231px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 1024px) and (max-width: 1919px)",
							"top": "25px",
							"left": "326px",
							"width": "123px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "25px",
							"left": "159px",
							"width": "60px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "25px",
							"left": "111px",
							"width": "42px",
							"height": "30px"
						}
					]
				});
			})(group_2);
			container.addChild(group_2, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "40px",
						"right": "0px",
						"left": "0px",
						"height": "80px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "40px",
						"right": "0px",
						"left": "0px",
						"height": "80px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "40px",
						"right": "0px",
						"left": "0px",
						"height": "80px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "40px",
						"right": "0px",
						"left": "0px",
						"height": "80px"
					}
				]
			});
			
			var embeddedApp_1 = new cpr.controls.EmbeddedApp("ea1");
			container.addChild(embeddedApp_1, {
				positions: [
					{
						"media": "all and (min-width: 1920px)",
						"top": "150px",
						"right": "50px",
						"left": "50px",
						"height": "866px"
					}, 
					{
						"media": "all and (min-width: 1024px) and (max-width: 1919px)",
						"top": "150px",
						"right": "50px",
						"left": "50px",
						"height": "866px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "150px",
						"right": "24px",
						"left": "24px",
						"height": "866px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "150px",
						"right": "17px",
						"left": "17px",
						"height": "866px"
					}
				]
			});
		}
	});
	app.title = "main";
	cpr.core.Platform.INSTANCE.register(app);
})();
