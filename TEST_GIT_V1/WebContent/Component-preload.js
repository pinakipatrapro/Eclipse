jQuery.sap.registerPreloadedModules({
	"name": "tesoroCart.Component-preload",
	"version": "2.0",
	"modules": {
		"tesoroCart/test_git_v1/Home.controller.js": "sap.ui.controller(\"test_git_v1.Home\",{});",
		"tesoroCart/test_git_v1/Home.view.js": "sap.ui.jsview(\"test_git_v1.Home\",{getControllerName:function(){return\"test_git_v1.Home\"},createContent:function(t){return new sap.m.Page({title:\"Title\",content:[]})}});"
	}
});