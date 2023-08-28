/*
 * App URI: kosta/emb_ex/01-EmbeddedApp
 * Source Location: kosta/emb_ex/01-EmbeddedApp.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("kosta/emb_ex/01-EmbeddedApp", { 
		onPrepare: function(loader) {
			loader.addApp("kosta/emb_ex/embTab2");
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Accordion.js
			 * Created at 2022. 11. 11. 오전 9:30:07.
			 *
			 * @author jiyeon
			 ************************************************/

			/*
			 * 트리에서 item-click 이벤트 발생 시 호출.
			 * 아이템 클릭시 발생하는 이벤트.
			 */
			function onTre1ItemClick(e){
				var tre1 = e.control;
				
				var vsAppId = e.item.row.getValue("appId");
				
				/*앱 아이디가 없는 경우 리턴합니다.*/
				if (vsAppId == "") {
					return;
				}
				
				var vcEmb = app.lookup("ea1");
				
				/*초기값 설정*/
				var voInitValue = {
					"value": e.item.label,
					"appId": vsAppId
				};
				
				if (vcEmb) {
					/*앱을 로드하고 로드된 앱을 임베디드 앱에 설정합니다.*/
					cpr.core.App.load(vsAppId, function( /*cpr.core.App*/ loadedApp) {
						/*임베디드앱에 안에 앱이 있는 경우에는 앱을 삭제해줍니다.(다시 앱을 열고싶을때 스크립트 작성)*/
						if (vcEmb.getEmbeddedAppInstance()) {
							vcEmb.getEmbeddedAppInstance().dispose();
						}
						
						/*로드된 앱이 있는 경우에는 임베디드앱 안에 불러온 앱을 넣습니다.*/
						if (loadedApp) {
							
							vcEmb.ready(function( /*cpr.controls.EmbeddedApp*/ embApp) {
								/*초기값을 전달합니다.*/
								embApp.initValue = voInitValue;
								
								/*임베디드 앱 내부 앱 인스턴스의 앱 속성에 값을 가져옵니다.*/
								app.lookup("opt1").value = vcEmb.getEmbeddedAppInstance().getAppProperty("appId");
								
								/*현재 임베디드앱에 메소드가 있는지 판단합니다.*/
								if (vcEmb.hasAppMethod("alertMessage")) {
									/*현재 임베디드 앱에 메소드가 있으면 메소드를 호출합니다.*/
									vcEmb.callAppMethod("alertMessage", "현재 앱의 alertMessage() 함수가 있습니다.");
									app.lookup("opt1").value = "현재 앱의 alertMessage() 함수가 있습니다.";
								} else {
									app.lookup("opt1").value = "현재 앱에 출판된 함수가 없습니다.";
								}
							});
							
							/*임베디드 앱에 내장할 앱을 로드하여 설정합니다.*/
							vcEmb.app = loadedApp;
						}
					});
				}
				
				
			}

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				app.lookup("tre1").addEventListener("item-click", function(e){

				});
				
				app.lookup("button1").addEventListener("click", function(e){

				});
			}

			/*
			 * "값 가져오기" 버튼(button1)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButton1Click(e){
				var button1 = e.control;
				
				var vcEmb = app.lookup("ea1");
				
				if (!vcEmb.getEmbeddedAppInstance()) return;
				/*임베디드 앱 내부 앱 인스턴스의 앱 속성에 값을 가져옵니다.*/
				app.lookup("opt1").value = vcEmb.getEmbeddedAppInstance().getAppProperty("appId");
			}

			/*
			 * 임베디드 앱에서 load 이벤트 발생 시 호출.
			 * 임베디드 앱이 준비되고 그려진 후에 디스패치 되는 이벤트.
			 */
			function onEmbapp2Load(e){
				var embapp2 = e.control;
				app.lookup("optMdIH").value = "두번째 탭에 임베디드 앱이 실행중입니다.";
				
			};
			// End - User Script
			
			// Header
			app.declareAppProperty("mainApp", "부모 화면 앱 속성");
			var dataSet_1 = new cpr.data.DataSet("dsMain");
			dataSet_1.parseData({
				"columns": [
					{"name": "label"},
					{"name": "value"},
					{"name": "parent"},
					{"name": "appId"}
				],
				"rows": [
					{"label": "페이지 1", "value": "value1", "parent": "0", "appId": "kosta/emb_ex/EmbeddedApp_01"},
					{"label": "페이지 2", "value": "value2", "parent": "0", "appId": "kosta/emb_ex/EmbeddedApp_02"}
				]
			});
			app.register(dataSet_1);
			app.supportMedia("all and (min-width: 1280px)", "default");
			app.supportMedia("all and (min-width: 800px) and (max-width: 1279px)", "tablet");
			app.supportMedia("all and (max-width: 799px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.setClasses(["subpage"]);
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.spacing = 25;
			verticalLayout_1.leftMargin = 20;
			verticalLayout_1.rightMargin = 20;
			verticalLayout_1.topMargin = 20;
			verticalLayout_1.bottomMargin = 20;
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var output_1 = new cpr.controls.Output();
			output_1.value = "앱에 다른 앱을 추가할 수 있는 컨트롤입니다.\r\n임베디드 앱은 프로젝트 내 빈번히 사용하여 재활용 가능한 앱 또는 MDI폴더, 탭폴더 내 앱으로 많이 사용됩니다.";
			container.addChild(output_1, {
				"autoSize": "height",
				"width": "1240px",
				"height": "48px"
			});
			
			var group_1 = new cpr.controls.Container("grp1");
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.spacing = 10;
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var group_2 = new cpr.controls.Container("grp2");
				group_2.style.setClasses(["content-box"]);
				var verticalLayout_3 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_3.spacing = 10;
				verticalLayout_3.leftMargin = 20;
				verticalLayout_3.rightMargin = 20;
				verticalLayout_3.topMargin = 20;
				verticalLayout_3.bottomMargin = 20;
				group_2.setLayout(verticalLayout_3);
				(function(container){
					var output_2 = new cpr.controls.Output("opt4");
					output_2.value = "특정 앱 로드한 뒤 임베디드 앱의 인스턴스 교체하는 방법";
					output_2.style.setClasses(["content-tit"]);
					container.addChild(output_2, {
						"autoSize": "height",
						"width": "100px",
						"height": "26px"
					});
					var group_3 = new cpr.controls.Container("grpFunction");
					group_3.style.setClasses(["card"]);
					var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_4.leftMargin = 10;
					verticalLayout_4.rightMargin = 10;
					verticalLayout_4.topMargin = 10;
					verticalLayout_4.bottomMargin = 10;
					group_3.setLayout(verticalLayout_4);
					(function(container){
						var group_4 = new cpr.controls.Container("group2");
						var formLayout_1 = new cpr.controls.layouts.FormLayout();
						formLayout_1.topMargin = "0px";
						formLayout_1.rightMargin = "0px";
						formLayout_1.bottomMargin = "0px";
						formLayout_1.leftMargin = "0px";
						formLayout_1.horizontalSpacing = "5px";
						formLayout_1.verticalSpacing = "5px";
						formLayout_1.setColumns(["208px", "1fr"]);
						formLayout_1.setRows(["0px", "260px"]);
						formLayout_1.setRowAutoSizing(0, true);
						group_4.setLayout(formLayout_1);
						(function(container){
							var tree_1 = new cpr.controls.Tree("tre1");
							(function(tree_1){
								tree_1.setItemSet(app.lookup("dsMain"), {
									"label": "label",
									"value": "value",
									"parentValue": "parent"
								});
							})(tree_1);
							if(typeof onTre1ItemClick == "function") {
								tree_1.addEventListener("item-click", onTre1ItemClick);
							}
							container.addChild(tree_1, {
								"colIndex": 0,
								"rowIndex": 1
							});
							var embeddedApp_1 = new cpr.controls.EmbeddedApp("ea1");
							embeddedApp_1.style.css({
								"border-right-style" : "solid",
								"border-top-width" : "1px",
								"border-bottom-color" : "#cccccc",
								"border-right-width" : "1px",
								"border-left-style" : "solid",
								"border-left-color" : "#cccccc",
								"border-bottom-width" : "1px",
								"border-top-color" : "#cccccc",
								"border-right-color" : "#cccccc",
								"border-bottom-style" : "solid",
								"border-left-width" : "1px",
								"border-top-style" : "solid"
							});
							container.addChild(embeddedApp_1, {
								"colIndex": 1,
								"rowIndex": 1
							});
							var group_5 = new cpr.controls.Container("group1");
							group_5.style.setClasses(["content-form-box"]);
							var formLayout_2 = new cpr.controls.layouts.FormLayout();
							formLayout_2.scrollable = false;
							formLayout_2.topMargin = "5px";
							formLayout_2.rightMargin = "5px";
							formLayout_2.bottomMargin = "5px";
							formLayout_2.leftMargin = "5px";
							formLayout_2.horizontalSpacing = "10px";
							formLayout_2.verticalSpacing = "10px";
							formLayout_2.horizontalSeparatorWidth = 1;
							formLayout_2.verticalSeparatorWidth = 1;
							formLayout_2.setColumns(["200px", "100px", "1fr"]);
							formLayout_2.setUseColumnShade(0, true);
							formLayout_2.setColumnAutoSizing(0, true);
							formLayout_2.setRows(["30px", "30px", "30px"]);
							group_5.setLayout(formLayout_2);
							(function(container){
								var output_3 = new cpr.controls.Output("opt5");
								output_3.value = "현재 열리진 앱의 앱 함수";
								container.addChild(output_3, {
									"colIndex": 0,
									"rowIndex": 1
								});
								var output_4 = new cpr.controls.Output("opt16");
								output_4.value = "앱 속성";
								container.addChild(output_4, {
									"colIndex": 0,
									"rowIndex": 0
								});
								var inputBox_1 = new cpr.controls.InputBox("ipb2");
								inputBox_1.placeholder = "앱 속성 값을 입력하세요.";
								inputBox_1.style.setClasses(["content-form-opt"]);
								inputBox_1.style.css({
									"color" : "#ff63a5",
									"font-size" : "18px"
								});
								inputBox_1.bind("value").toAppProperty("mainApp");
								container.addChild(inputBox_1, {
									"colIndex": 1,
									"rowIndex": 0,
									"colSpan": 2,
									"rowSpan": 1
								});
								var output_5 = new cpr.controls.Output("opt1");
								output_5.value = "";
								output_5.style.setClasses(["content-form-opt"]);
								output_5.style.css({
									"color" : "#816bff",
									"padding-left" : "10px",
									"font-size" : "18px",
									"text-align" : "left"
								});
								container.addChild(output_5, {
									"colIndex": 1,
									"rowIndex": 1,
									"colSpan": 2,
									"rowSpan": 1
								});
								var output_6 = new cpr.controls.Output("opt18");
								output_6.value = "현재 열려진 앱의 앱 속성";
								container.addChild(output_6, {
									"colIndex": 0,
									"rowIndex": 2
								});
								var output_7 = new cpr.controls.Output("opt19");
								output_7.value = "";
								output_7.style.setClasses(["content-form-opt"]);
								output_7.style.css({
									"color" : "#1676fb",
									"padding-left" : "10px",
									"font-size" : "20px"
								});
								container.addChild(output_7, {
									"colIndex": 2,
									"rowIndex": 2
								});
								var button_1 = new cpr.controls.Button("button1");
								button_1.value = "값 가져오기";
								button_1.style.setClasses(["btn-gray"]);
								if(typeof onButton1Click == "function") {
									button_1.addEventListener("click", onButton1Click);
								}
								container.addChild(button_1, {
									"colIndex": 1,
									"rowIndex": 2
								});
							})(group_5);
							container.addChild(group_5, {
								"colIndex": 0,
								"rowIndex": 0,
								"colSpan": 2,
								"rowSpan": 1
							});
						})(group_4);
						container.addChild(group_4, {
							"autoSize": "none",
							"width": "1270px",
							"height": "400px"
						});
					})(group_3);
					container.addChild(group_3, {
						"autoSize": "height",
						"width": "1270px",
						"height": "652px",
						"minHeight": 350
					});
				})(group_2);
				container.addChild(group_2, {
					"autoSize": "height",
					"width": "400px",
					"height": "816px"
				});
				var group_6 = new cpr.controls.Container("grp4");
				group_6.style.setClasses(["content-box"]);
				var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_5.spacing = 10;
				verticalLayout_5.leftMargin = 20;
				verticalLayout_5.rightMargin = 20;
				verticalLayout_5.topMargin = 20;
				verticalLayout_5.bottomMargin = 20;
				group_6.setLayout(verticalLayout_5);
				(function(container){
					var output_8 = new cpr.controls.Output("opt6");
					output_8.value = "임베디드 앱 및 임베디드 된 앱 인스턴스의 이벤트 사이클";
					output_8.style.setClasses(["content-tit"]);
					container.addChild(output_8, {
						"autoSize": "height",
						"width": "100px",
						"height": "26px"
					});
					var group_7 = new cpr.controls.Container("scenarioGrp");
					group_7.style.setClasses(["card"]);
					var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_6.spacing = 20;
					verticalLayout_6.leftMargin = 10;
					verticalLayout_6.rightMargin = 10;
					verticalLayout_6.topMargin = 10;
					verticalLayout_6.bottomMargin = 10;
					group_7.setLayout(verticalLayout_6);
					(function(container){
						var group_8 = new cpr.controls.Container("group3");
						group_8.style.setClasses(["content-form-box"]);
						var formLayout_3 = new cpr.controls.layouts.FormLayout();
						formLayout_3.scrollable = false;
						formLayout_3.topMargin = "5px";
						formLayout_3.rightMargin = "5px";
						formLayout_3.bottomMargin = "5px";
						formLayout_3.leftMargin = "5px";
						formLayout_3.horizontalSpacing = "10px";
						formLayout_3.verticalSpacing = "10px";
						formLayout_3.horizontalSeparatorWidth = 1;
						formLayout_3.verticalSeparatorWidth = 1;
						formLayout_3.setColumns(["222px", "1fr", "1fr"]);
						formLayout_3.setUseColumnShade(0, true);
						formLayout_3.setColumnAutoSizing(0, true);
						formLayout_3.setRows(["35px", "35px", "35px", "35px", "35px", "35px"]);
						formLayout_3.setUseRowShade(0, true);
						group_8.setLayout(formLayout_3);
						(function(container){
							var output_9 = new cpr.controls.Output("opt20");
							output_9.value = "임베디드 앱이 렌더링되기 전";
							container.addChild(output_9, {
								"colIndex": 0,
								"rowIndex": 1,
								"colSpan": 1,
								"rowSpan": 3
							});
							var output_10 = new cpr.controls.Output("opt21");
							output_10.value = "액션";
							container.addChild(output_10, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var output_11 = new cpr.controls.Output("opt22");
							output_11.value = "app-ready 이벤트 발송";
							output_11.style.setClasses(["content-form-opt"]);
							output_11.style.css({
								"padding-left" : "10px"
							});
							container.addChild(output_11, {
								"colIndex": 1,
								"rowIndex": 3
							});
							var output_12 = new cpr.controls.Output("opt23");
							output_12.value = "임베디드 앱 렌더링 후";
							container.addChild(output_12, {
								"colIndex": 0,
								"rowIndex": 4,
								"colSpan": 1,
								"rowSpan": 2
							});
							var output_13 = new cpr.controls.Output("opt24");
							output_13.value = "load 이벤트 발송";
							output_13.style.setClasses(["content-form-opt"]);
							output_13.style.css({
								"padding-left" : "10px"
							});
							container.addChild(output_13, {
								"colIndex": 2,
								"rowIndex": 4
							});
							var output_14 = new cpr.controls.Output("opt25");
							output_14.value = "임베디드 앱 컨트롤에 불러온 화면의 앱 인스턴스";
							container.addChild(output_14, {
								"colIndex": 2,
								"rowIndex": 0
							});
							var output_15 = new cpr.controls.Output("opt26");
							output_15.value = "임베디드 앱 컨트롤";
							container.addChild(output_15, {
								"colIndex": 1,
								"rowIndex": 0
							});
							var output_16 = new cpr.controls.Output("opt27");
							output_16.value = "init 이벤트 발송";
							output_16.style.setClasses(["content-form-opt"]);
							output_16.style.css({
								"padding-left" : "10px"
							});
							container.addChild(output_16, {
								"colIndex": 2,
								"rowIndex": 1
							});
							var output_17 = new cpr.controls.Output("opt28");
							output_17.value = "init 이벤트 발송";
							output_17.style.setClasses(["content-form-opt"]);
							output_17.style.css({
								"padding-left" : "10px"
							});
							container.addChild(output_17, {
								"colIndex": 1,
								"rowIndex": 2
							});
							var output_18 = new cpr.controls.Output("opt29");
							output_18.value = "load 이벤트 발송";
							output_18.style.setClasses(["content-form-opt"]);
							output_18.style.css({
								"padding-left" : "10px"
							});
							container.addChild(output_18, {
								"colIndex": 1,
								"rowIndex": 5
							});
						})(group_8);
						container.addChild(group_8, {
							"autoSize": "height",
							"width": "984px",
							"height": "272px"
						});
						var group_9 = new cpr.controls.Container("groAddExp");
						group_9.style.setClasses(["content-info"]);
						var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
						verticalLayout_7.spacing = 10;
						verticalLayout_7.leftMargin = 30;
						verticalLayout_7.rightMargin = 30;
						verticalLayout_7.topMargin = 20;
						verticalLayout_7.bottomMargin = 20;
						group_9.setLayout(verticalLayout_7);
						(function(container){
							var output_19 = new cpr.controls.Output("opt30");
							output_19.value = "이벤트 발생 순서";
							output_19.style.setClasses(["content-tit", "Notice"]);
							container.addChild(output_19, {
								"width": "100px",
								"height": "30px"
							});
							var output_20 = new cpr.controls.Output("opt31");
							output_20.value = "1) 임베디드 앱 컨트롤에 불러온 화면에 앱 인스턴스의 init 이벤트\r\n2) [임베디드 앱 컨트롤] init 이벤트\r\n3) [임베디드 앱 컨트롤] app-ready 이벤트\r\n4) 임베디드 앱 컨트롤에 불러온 화면에 앱 인스턴스의 load 이벤트\r\n5) [임베디드 앱 컨트롤] load 이벤트";
							output_20.style.setClasses(["content-info-text", "opt-tmpl"]);
							container.addChild(output_20, {
								"autoSize": "height",
								"width": "100px",
								"height": "85px"
							});
						})(group_9);
						container.addChild(group_9, {
							"autoSize": "height",
							"width": "1100px",
							"height": "154px"
						});
					})(group_7);
					container.addChild(group_7, {
						"autoSize": "height",
						"width": "1270px",
						"height": "483px"
					});
				})(group_6);
				container.addChild(group_6, {
					"autoSize": "height",
					"width": "1240px",
					"height": "555px"
				});
				var group_10 = new cpr.controls.Container("grp23");
				group_10.style.setClasses(["content-box"]);
				var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_8.spacing = 10;
				verticalLayout_8.leftMargin = 20;
				verticalLayout_8.rightMargin = 20;
				verticalLayout_8.topMargin = 20;
				verticalLayout_8.bottomMargin = 20;
				group_10.setLayout(verticalLayout_8);
				(function(container){
					var output_21 = new cpr.controls.Output("opt3");
					output_21.value = "임베디드 앱 강제 실행";
					output_21.style.setClasses(["content-tit"]);
					container.addChild(output_21, {
						"autoSize": "height",
						"width": "100px",
						"height": "26px"
					});
					var group_11 = new cpr.controls.Container("scenarioGrp2");
					group_11.style.setClasses(["content-outline"]);
					var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_9.spacing = 20;
					verticalLayout_9.topMargin = 10;
					verticalLayout_9.bottomMargin = 10;
					group_11.setLayout(verticalLayout_9);
					(function(container){
						var group_12 = new cpr.controls.Container("grp5");
						group_12.style.setClasses(["content-notice"]);
						var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
						verticalLayout_10.leftMargin = 30;
						verticalLayout_10.rightMargin = 30;
						verticalLayout_10.topMargin = 20;
						verticalLayout_10.bottomMargin = 20;
						group_12.setLayout(verticalLayout_10);
						(function(container){
							var output_22 = new cpr.controls.Output("opt7");
							output_22.value = "유의사항";
							output_22.style.setClasses(["content-notice-title"]);
							container.addChild(output_22, {
								"autoSize": "height",
								"width": "1210px",
								"height": "25px"
							});
							var output_23 = new cpr.controls.Output("opt32");
							output_23.value = "탭 폴더 및 MDI폴더의 경우 활성화 되지 않은 탭은 앱이 실행되지 않은 상태입니다. 만약 앱내 특정 데이터 및 컨트롤을 취득해야 할 경우 임베디드 앱의 forceRun() API 또는 forceRun 속성을 통해 아직 load 되지 않은 앱을 강제로 실행시킬 수 있습니다.";
							output_23.style.setClasses(["content-notice-text"]);
							container.addChild(output_23, {
								"autoSize": "height",
								"width": "100px",
								"height": "41px"
							});
						})(group_12);
						container.addChild(group_12, {
							"autoSize": "height",
							"width": "1270px",
							"height": "101px"
						});
						var mDIFolder_1 = new cpr.controls.MDIFolder("mdi1");
						var group_13 = new cpr.controls.Container("grp3");
						var xYLayout_1 = new cpr.controls.layouts.XYLayout();
						group_13.setLayout(xYLayout_1);
						(function(container){
							var output_24 = new cpr.controls.Output("optMdIH");
							output_24.value = "";
							output_24.style.setClasses(["text-danger"]);
							output_24.style.css({
								"text-align" : "right"
							});
							container.addChild(output_24, {
								"top": "0px",
								"right": "0px",
								"bottom": "0px",
								"left": "0px"
							});
						})(group_13);
						mDIFolder_1.addHeaderControl(group_13, {"position": "right", "width": 510});
						
						var tabItem_1 = (function(tabFolder){
							var tabItem_1 = new cpr.controls.TabItem();
							tabItem_1.text = "첫번째 탭";
							var embeddedApp_2 = new cpr.controls.EmbeddedApp("embapp1");
							cpr.core.App.load("kosta/emb_ex/embTab1", function(app) {
								if(app){
									embeddedApp_2.app = app;
								}
							});
							tabItem_1.content = embeddedApp_2;
							return tabItem_1;
						})(mDIFolder_1);
						mDIFolder_1.addTabItem(tabItem_1);
						
						var tabItem_2 = (function(tabFolder){
							var tabItem_2 = new cpr.controls.TabItem();
							tabItem_2.text = "두번째 탭";
							var embeddedApp_3 = new cpr.controls.EmbeddedApp("embapp2");
							if(typeof onEmbapp2Load == "function") {
								embeddedApp_3.addEventListener("load", onEmbapp2Load);
							}
							cpr.core.App.load("kosta/emb_ex/embTab2", function(app) {
								if(app){
									embeddedApp_3.app = app;
									embeddedApp_3.forceRun();
								}
							});
							tabItem_2.content = embeddedApp_3;
							return tabItem_2;
						})(mDIFolder_1);
						mDIFolder_1.addTabItem(tabItem_2);
						mDIFolder_1.setSelectedTabItem(tabItem_1);
						container.addChild(mDIFolder_1, {
							"width": "320px",
							"height": "406px"
						});
					})(group_11);
					container.addChild(group_11, {
						"autoSize": "height",
						"width": "1270px",
						"height": "557px"
					});
				})(group_10);
				container.addChild(group_10, {
					"autoSize": "height",
					"width": "1240px",
					"height": "652px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "1240px",
				"height": "2081px"
			});
			
			var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
			hTMLSnippet_1.value = "<style>\r\n.cl-container.content-box {\r\n\t\tbackground-color: #f5f8fa;\r\n\t\t\r\n\t\t.cl-output.content-tit {\r\n\t\t\tfont-size: 18px;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tcolor: #4d91ff;\r\n\t\t\t\r\n\t\t\t&.Notice{\r\n\t\t\t\tcolor : #EFA747;\r\n\t\t\t}\r\n\t\t}\t\r\n\t\t.cl-output.content-notice-title {\r\n\t\t   font-size: 18px;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tcolor: #7A001B;\r\n\t\t    \r\n\t\t   }\t\r\n\t\t.cl-container.box {\r\n\t\t\tbackground-color: #ffffff;\r\n\t\t\tborder: 1px solid #d6d6d6;\r\n\t\t\t\r\n\t\t\t.cl-output.box-tit {\r\n\t\t\t\tbackground-color: #e6edf9;\r\n\t\t\t\tfont-size: 14px;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t.content-info{\r\n\t\t\tbackground-color : #FEFBDB;\r\n\t\t}\r\n\t\t.content-notice{\r\n\t\t\tbackground-color :  #FFCCD7;\r\n\t\t}\r\n\t}\r\n\t// 카드\r\n.cl-container.card {\r\n\t\tbackground-color: #ffffff;\r\n\t\tborder: 1px solid #d6d6d6;\r\n\t\tborder-radius: 0px;\r\n\t\t\r\n\t\t\r\n\t\t\r\n\t\t.cl-output.opt-tmpl{\r\n\t\t\tline-height: 2.0;\r\n\t\t    color: #3B454F;\r\n\t\t    font-size : 16px;\r\n\t\t    -webkit-user-select: text;\r\n\t\t}\r\n\t\t\r\n\t}\r\n.cl-container.card {\r\n\tbackground-color: #ffffff;\r\n\tborder: 1px solid #d6d6d6;\r\n\tborder-radius: 4px;\r\n}\t\t\r\n\t<\/style>";
			container.addChild(hTMLSnippet_1, {
				"autoSize": "none",
				"width": "1240px",
				"height": "20px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "임베디드 앱";
	cpr.core.Platform.INSTANCE.register(app);
})();
