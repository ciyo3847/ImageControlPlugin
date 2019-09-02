
import { drag, dragOnint } from './drag.js';
import { rotateReady, rotate, rotateInit } from './rotate.js';
import { magnify, shrink, zoomReady, zoomOnint } from './zoom.js';
import './index.css'
(function() {
	"use strict";
	function ImageControl(imgId, imgBoxId) {
		this.imgId = imgId || 'IC-rotateImg',
		this.imgBoxId = imgBoxId || 'IC-imageBox'
	}
	ImageControl.prototype = {
		constructor: ImageControl,
		drawBox: function(id, imgSrc) {
			const template = `<div id="IC-modal" class="modal-imagefull" style="visibility: hidden;">
													<div class="mask"></div>
													<div class="modal-box">
														<div class="modal-btn-close">
															<img id="IC-modalClose" src="./image/close.png">
														</div>
														<div class="modal-content">
															<div class="modal-content-image" id="IC-imageBox">
																<img src='${imgSrc}' id="IC-rotateImg">
															</div>
														</div>
														<div class="modal-btn-control">
															<div class="control-btn-groud">
																<img id="IC-magnifyIcon" class="btn-control-icon" src="./image/et-amplification.png">
																<img id="IC-shrinkIcon" class="btn-control-icon" src="./image/Narrow.png">
																<img id="IC-rotateIcon" class="btn-control-icon" src="./image/rotating.png">
															</div>
														</div>
													</div>
												</div>`;
      let doc = new DOMParser().parseFromString(template, 'text/html');
      let div = doc.querySelector('#IC-modal');
      console.log(doc.querySelector('#IC-modal'))
      const container = document.getElementById(id);
    	container.appendChild(div);
		},
		action: function(id) {
			let _this = this;
			document.getElementById(id).addEventListener('click', function() {
				document.getElementById('IC-modal').style.visibility = 'visible';
				_this.onInit();
				_this.onDrag();
			})
			document.getElementById('IC-modalClose').addEventListener('click', function() {
				document.getElementById('IC-modal').style.visibility = 'hidden';
			})
			document.getElementById('IC-rotateIcon').addEventListener('click', _this.onRotate);
			document.getElementById('IC-magnifyIcon').addEventListener('click', _this.onMagnify);
			document.getElementById('IC-shrinkIcon').addEventListener('click', _this.onShrink);
		},
		onInit: function() {
			this.imgIdElement = document.getElementById(this.imgId);
			this.imgBoxIdElement = document.getElementById(this.imgBoxId);
			// 所有css样式恢复默认值
			rotateInit(this.imgIdElement);
			zoomOnint(this.imgIdElement)
			dragOnint(this.imgIdElement)

			rotateReady(this.imgIdElement, this.imgBoxIdElement);
			zoomReady(this.imgIdElement)
		},
		onDrag: function() {
			if(!this.imgBoxIdElement.style.position || this.imgBoxIdElement.style.position == 'inherit' || this.imgBoxIdElement.style.position == 'static') {
				this.imgBoxIdElement.style.position = 'relative'
			}
			if(!this.imgIdElement.style.position || this.imgIdElement.style.position == 'inherit' || this.imgIdElement.style.position == 'static') {
				this.imgIdElement.style.position = 'relative'
			}
			drag(this.imgIdElement, this.imgBoxIdElement);
		},
		onRotate: rotate,
		onShrink: shrink,
		onMagnify: magnify
	}	
	window.ImageControl = ImageControl;
})()