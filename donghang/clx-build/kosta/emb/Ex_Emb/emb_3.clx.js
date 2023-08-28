/*
 * App URI: kosta/emb/Ex_Emb/emb_3
 * Source Location: kosta/emb/Ex_Emb/emb_3.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("kosta/emb/Ex_Emb/emb_3", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
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
			};
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
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
			var output_1 = new cpr.controls.Output("opt");
			output_1.value = "";
			output_1.style.css({
				"font-size" : "200px"
			});
			container.addChild(output_1, {
				"top": "122px",
				"left": "146px",
				"width": "697px",
				"height": "285px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "셋째화면";
	cpr.core.Platform.INSTANCE.register(app);
})();
