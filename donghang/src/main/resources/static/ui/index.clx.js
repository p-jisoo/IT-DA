/*
 * App URI: index
 * Source Location: index.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("index", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * index.js
			 * Created at 2023. 8. 9. 오전 10:46:05.
			 *
			 * @author USER
			 ************************************************/;
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
			var button_1 = new cpr.controls.Button();
			button_1.value = "Button";
			container.addChild(button_1, {
				"top": "168px",
				"left": "155px",
				"width": "100px",
				"height": "20px"
			});
		}
	});
	app.title = "index";
	cpr.core.Platform.INSTANCE.register(app);
})();
