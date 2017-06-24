webpackJsonp([2],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/content/scss/global.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "/* ==============================================================\nBootstrap tweaks\n===============================================================*/\nbody, h1, h2, h3, h4 {\n  font-weight: 300; }\n\n/* ==========================================================================\nBrowser Upgrade Prompt\n========================================================================== */\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0; }\n\n/* ==========================================================================\nGeneric styles\n========================================================================== */\n/* Error highlight on input fields */\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid green; }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid red; }\n\n/* other generic styles */\n.jh-card {\n  padding: 1.5%;\n  margin-top: 20px;\n  border: none; }\n\n.error {\n  color: white;\n  background-color: red; }\n\n.pad {\n  padding: 10px; }\n\n.w-40 {\n  width: 40% !important; }\n\n.w-60 {\n  width: 60% !important; }\n\n.break {\n  white-space: normal;\n  word-break: break-all; }\n\n.readonly {\n  background-color: #eee;\n  opacity: 1; }\n\n.footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n\n/* ==========================================================================\nmake sure browsers use the pointer cursor for anchors, even with no href\n========================================================================== */\na:hover {\n  cursor: pointer; }\n\n.hand {\n  cursor: pointer; }\n\n/* ==========================================================================\nCustom alerts for notification\n========================================================================== */\n.alerts .alert {\n  text-overflow: ellipsis; }\n  .alerts .alert pre {\n    background: none;\n    border: none;\n    font: inherit;\n    color: inherit;\n    padding: 0;\n    margin: 0; }\n  .alerts .alert .popover pre {\n    font-size: 10px; }\n\n.alerts .toast {\n  position: fixed;\n  width: 100%; }\n  .alerts .toast.left {\n    left: 5px; }\n  .alerts .toast.right {\n    right: 5px; }\n  .alerts .toast.top {\n    top: 55px; }\n  .alerts .toast.bottom {\n    bottom: 55px; }\n\n@media screen and (min-width: 480px) {\n  .alerts .toast {\n    width: 50%; } }\n\n/* ==========================================================================\nentity tables helpers\n========================================================================== */\n/* Remove Bootstrap padding from the element\n   http://stackoverflow.com/questions/19562903/remove-padding-from-columns-in-bootstrap-3 */\n.no-padding-left {\n  padding-left: 0 !important; }\n\n.no-padding-right {\n  padding-right: 0 !important; }\n\n.no-padding-top {\n  padding-top: 0 !important; }\n\n.no-padding-bottom {\n  padding-bottom: 0 !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n/* bootstrap 3 input-group 100% width\n   http://stackoverflow.com/questions/23436430/bootstrap-3-input-group-100-width */\n.width-min {\n  width: 1% !important; }\n\n/* Makes toolbar not wrap on smaller screens\n   http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#right */\n.flex-btn-group-container {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end; }\n\n/* ==========================================================================\nentity detail page css\n========================================================================== */\n.row.jh-entity-details > dd {\n  margin-bottom: 15px; }\n\n@media screen and (min-width: 768px) {\n  .row.jh-entity-details > dt {\n    margin-bottom: 15px; }\n  .row.jh-entity-details > dd {\n    border-bottom: 1px solid #eee;\n    padding-left: 180px;\n    margin-left: 0; } }\n\n/* ==========================================================================\nui bootstrap tweaks\n========================================================================== */\n.nav, .pagination, .carousel, .panel-title a {\n  cursor: pointer; }\n\n.datetime-picker-dropdown > li.date-picker-menu div > table .btn-default,\n.uib-datepicker-popup > li > div.uib-datepicker > table .btn-default {\n  border: 0; }\n\n.datetime-picker-dropdown > li.date-picker-menu div > table:focus,\n.uib-datepicker-popup > li > div.uib-datepicker > table:focus {\n  outline: none; }\n\n/* jhipster-needle-scss-add-main JHipster will add new css style */\n", ""]);

// exports


/***/ }),

/***/ "./src/main/webapp/content/scss/global.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/content/scss/global.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(15)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./global.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./global.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(510);

/***/ })

},["./src/main/webapp/content/scss/global.scss"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9zY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L3Njc3MvZ2xvYmFsLnNjc3M/OTA3ZiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsdU1BQXdNLHFCQUFxQixFQUFFLDJNQUEyTSxvQkFBb0IscUJBQXFCLGdCQUFnQixxQkFBcUIsRUFBRSxrUUFBa1EsaUNBQWlDLEVBQUUsMkJBQTJCLCtCQUErQixFQUFFLDBDQUEwQyxrQkFBa0IscUJBQXFCLGlCQUFpQixFQUFFLFlBQVksaUJBQWlCLDBCQUEwQixFQUFFLFVBQVUsa0JBQWtCLEVBQUUsV0FBVywwQkFBMEIsRUFBRSxXQUFXLDBCQUEwQixFQUFFLFlBQVksd0JBQXdCLDBCQUEwQixFQUFFLGVBQWUsMkJBQTJCLGVBQWUsRUFBRSxhQUFhLCtDQUErQyxFQUFFLHFQQUFxUCxvQkFBb0IsRUFBRSxXQUFXLG9CQUFvQixFQUFFLGtOQUFrTiw0QkFBNEIsRUFBRSx3QkFBd0IsdUJBQXVCLG1CQUFtQixvQkFBb0IscUJBQXFCLGlCQUFpQixnQkFBZ0IsRUFBRSxpQ0FBaUMsc0JBQXNCLEVBQUUsb0JBQW9CLG9CQUFvQixnQkFBZ0IsRUFBRSx5QkFBeUIsZ0JBQWdCLEVBQUUsMEJBQTBCLGlCQUFpQixFQUFFLHdCQUF3QixnQkFBZ0IsRUFBRSwyQkFBMkIsbUJBQW1CLEVBQUUsMENBQTBDLG9CQUFvQixpQkFBaUIsRUFBRSxFQUFFLHVWQUF1ViwrQkFBK0IsRUFBRSx1QkFBdUIsZ0NBQWdDLEVBQUUscUJBQXFCLDhCQUE4QixFQUFFLHdCQUF3QixpQ0FBaUMsRUFBRSxpQkFBaUIsMEJBQTBCLEVBQUUsNElBQTRJLHlCQUF5QixFQUFFLHdKQUF3SiwwQkFBMEIsa0JBQWtCLGdDQUFnQyx3QkFBd0Isc0NBQXNDLDhCQUE4QixFQUFFLHVOQUF1Tix3QkFBd0IsRUFBRSwwQ0FBMEMsaUNBQWlDLDBCQUEwQixFQUFFLGlDQUFpQyxvQ0FBb0MsMEJBQTBCLHFCQUFxQixFQUFFLEVBQUUscU9BQXFPLG9CQUFvQixFQUFFLHFKQUFxSixjQUFjLEVBQUUsdUlBQXVJLGtCQUFrQixFQUFFOztBQUVqNEk7Ozs7Ozs7O0FDUEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBMEY7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkEsK0MiLCJmaWxlIjoiYXBwL2dsb2JhbC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbkJvb3RzdHJhcCB0d2Vha3NcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xcbmJvZHksIGgxLCBoMiwgaDMsIGg0IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbkJyb3dzZXIgVXBncmFkZSBQcm9tcHRcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5icm93c2VydXBncmFkZSB7XFxuICBtYXJnaW46IDAuMmVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAwLjJlbSAwOyB9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5HZW5lcmljIHN0eWxlc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogRXJyb3IgaGlnaGxpZ2h0IG9uIGlucHV0IGZpZWxkcyAqL1xcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuOyB9XFxuXFxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkOyB9XFxuXFxuLyogb3RoZXIgZ2VuZXJpYyBzdHlsZXMgKi9cXG4uamgtY2FyZCB7XFxuICBwYWRkaW5nOiAxLjUlO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJvcmRlcjogbm9uZTsgfVxcblxcbi5lcnJvciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cXG5cXG4ucGFkIHtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG5cXG4udy00MCB7XFxuICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7IH1cXG5cXG4udy02MCB7XFxuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7IH1cXG5cXG4uYnJlYWsge1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgfVxcblxcbi5yZWFkb25seSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5mb290ZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpOyB9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5tYWtlIHN1cmUgYnJvd3NlcnMgdXNlIHRoZSBwb2ludGVyIGN1cnNvciBmb3IgYW5jaG9ycywgZXZlbiB3aXRoIG5vIGhyZWZcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmE6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmhhbmQge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5DdXN0b20gYWxlcnRzIGZvciBub3RpZmljYXRpb25cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5hbGVydHMgLmFsZXJ0IHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuICAuYWxlcnRzIC5hbGVydCBwcmUge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIC5hbGVydHMgLmFsZXJ0IC5wb3BvdmVyIHByZSB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDsgfVxcblxcbi5hbGVydHMgLnRvYXN0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAuYWxlcnRzIC50b2FzdC5sZWZ0IHtcXG4gICAgbGVmdDogNXB4OyB9XFxuICAuYWxlcnRzIC50b2FzdC5yaWdodCB7XFxuICAgIHJpZ2h0OiA1cHg7IH1cXG4gIC5hbGVydHMgLnRvYXN0LnRvcCB7XFxuICAgIHRvcDogNTVweDsgfVxcbiAgLmFsZXJ0cyAudG9hc3QuYm90dG9tIHtcXG4gICAgYm90dG9tOiA1NXB4OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcXG4gIC5hbGVydHMgLnRvYXN0IHtcXG4gICAgd2lkdGg6IDUwJTsgfSB9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5lbnRpdHkgdGFibGVzIGhlbHBlcnNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIFJlbW92ZSBCb290c3RyYXAgcGFkZGluZyBmcm9tIHRoZSBlbGVtZW50XFxuICAgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTU2MjkwMy9yZW1vdmUtcGFkZGluZy1mcm9tLWNvbHVtbnMtaW4tYm9vdHN0cmFwLTMgKi9cXG4ubm8tcGFkZGluZy1sZWZ0IHtcXG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50OyB9XFxuXFxuLm5vLXBhZGRpbmctcmlnaHQge1xcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50OyB9XFxuXFxuLm5vLXBhZGRpbmctdG9wIHtcXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7IH1cXG5cXG4ubm8tcGFkZGluZy1ib3R0b20ge1xcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDsgfVxcblxcbi5uby1wYWRkaW5nIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxcblxcbi8qIGJvb3RzdHJhcCAzIGlucHV0LWdyb3VwIDEwMCUgd2lkdGhcXG4gICBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzNDM2NDMwL2Jvb3RzdHJhcC0zLWlucHV0LWdyb3VwLTEwMC13aWR0aCAqL1xcbi53aWR0aC1taW4ge1xcbiAgd2lkdGg6IDElICFpbXBvcnRhbnQ7IH1cXG5cXG4vKiBNYWtlcyB0b29sYmFyIG5vdCB3cmFwIG9uIHNtYWxsZXIgc2NyZWVuc1xcbiAgIGh0dHA6Ly93d3cuc2tldGNoaW5nd2l0aGNzcy5jb20vc2FtcGxlY2hhcHRlci9jaGVhdHNoZWV0Lmh0bWwjcmlnaHQgKi9cXG4uZmxleC1idG4tZ3JvdXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuZW50aXR5IGRldGFpbCBwYWdlIGNzc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnJvdy5qaC1lbnRpdHktZGV0YWlscyA+IGRkIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnJvdy5qaC1lbnRpdHktZGV0YWlscyA+IGR0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcbiAgLnJvdy5qaC1lbnRpdHktZGV0YWlscyA+IGRkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxuICAgIHBhZGRpbmctbGVmdDogMTgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwOyB9IH1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbnVpIGJvb3RzdHJhcCB0d2Vha3NcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5uYXYsIC5wYWdpbmF0aW9uLCAuY2Fyb3VzZWwsIC5wYW5lbC10aXRsZSBhIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5kYXRldGltZS1waWNrZXItZHJvcGRvd24gPiBsaS5kYXRlLXBpY2tlci1tZW51IGRpdiA+IHRhYmxlIC5idG4tZGVmYXVsdCxcXG4udWliLWRhdGVwaWNrZXItcG9wdXAgPiBsaSA+IGRpdi51aWItZGF0ZXBpY2tlciA+IHRhYmxlIC5idG4tZGVmYXVsdCB7XFxuICBib3JkZXI6IDA7IH1cXG5cXG4uZGF0ZXRpbWUtcGlja2VyLWRyb3Bkb3duID4gbGkuZGF0ZS1waWNrZXItbWVudSBkaXYgPiB0YWJsZTpmb2N1cyxcXG4udWliLWRhdGVwaWNrZXItcG9wdXAgPiBsaSA+IGRpdi51aWItZGF0ZXBpY2tlciA+IHRhYmxlOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cXG4vKiBqaGlwc3Rlci1uZWVkbGUtc2Nzcy1hZGQtbWFpbiBKSGlwc3RlciB3aWxsIGFkZCBuZXcgY3NzIHN0eWxlICovXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Bvc3Rjc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvc2Nzcy9nbG9iYWwuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvc2Nzcy9nbG9iYWwuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZ2xvYmFsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2dsb2JhbC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L3Njc3MvZ2xvYmFsLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvc2Nzcy9nbG9iYWwuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg1MTApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=