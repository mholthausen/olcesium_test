import defined from"../../Core/defined.js";import destroyObject from"../../Core/destroyObject.js";import DeveloperError from"../../Core/DeveloperError.js";import knockout from"../../ThirdParty/knockout.js";import getElement from"../getElement.js";import PerformanceWatchdogViewModel from"./PerformanceWatchdogViewModel.js";function PerformanceWatchdog(e){if(!defined(e)||!defined(e.container))throw new DeveloperError("options.container is required.");if(!defined(e.scene))throw new DeveloperError("options.scene is required.");const t=getElement(e.container),o=new PerformanceWatchdogViewModel(e),r=document.createElement("div");r.className="cesium-performance-watchdog-message-area",r.setAttribute("data-bind","visible: showingLowFrameRateMessage");const n=document.createElement("button");n.setAttribute("type","button"),n.className="cesium-performance-watchdog-message-dismiss",n.innerHTML="&times;",n.setAttribute("data-bind","click: dismissMessage"),r.appendChild(n);const i=document.createElement("div");i.className="cesium-performance-watchdog-message",i.setAttribute("data-bind","html: lowFrameRateMessage"),r.appendChild(i),t.appendChild(r),knockout.applyBindings(o,r),this._container=t,this._viewModel=o,this._element=r}Object.defineProperties(PerformanceWatchdog.prototype,{container:{get:function(){return this._container}},viewModel:{get:function(){return this._viewModel}}}),PerformanceWatchdog.prototype.isDestroyed=function(){return!1},PerformanceWatchdog.prototype.destroy=function(){return this._viewModel.destroy(),knockout.cleanNode(this._element),this._container.removeChild(this._element),destroyObject(this)};export default PerformanceWatchdog;