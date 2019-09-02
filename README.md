# ImageControlPlugin

### Description
Full-screen Picture Operating Plugin（include including rotation, scaling, drag and drop）

### Demo
https://ciyo3847.github.io/ImageControlPlugin/index.html

### Usage
Give the path of  `image-control.bundle.js` in your `index.html` file.
```html
<script src="node_modules/image-control-plugin
/dist/image-control.bundle.js"></script>
```
usage example
```html
<div class="container" style="background-color: #fff;">
	<button id="showImage">showImage</button>
	<div id="modal" class="modal-imagefull" style="visibility: hidden;">
		<div class="mask"></div>
		<div class="modal-box">
			<div class="modal-btn-close">
				<img id="modalClose" src="./src/image/close.png">
			</div>
			<div class="modal-content">
				<div class="modal-content-image" id="imageBox" style="position: relative;">
					<img src='./src/image/0x0ss.jpg' id="rotateImg" style="position: relative;">
				</div>
			</div>
			<div class="modal-btn-control">
				<div class="control-btn-groud">
					<img id="magnifyIcon" class="btn-control-icon" src="./src/image/et-amplification.png">
					<img id="shrinkIcon" class="btn-control-icon" src="./src/image/Narrow.png">
					<img id="rotateIcon" class="btn-control-icon" src="./src/image/rotating.png">
				</div>
			</div>
		</div>
	</div>
</div>
```

```javascript
let imageControl = new ImageControl('rotateImg', 'imageBox');  // 其中 'rotateImg' 为需要操作的img 图片的id， 'imageBox' 为图片的父元素，图片显示不超过此父元素。
document.getElementById('showImage').addEventListener('click', function() {
	document.getElementById('modal').style.visibility = 'visible';
	imageControl.onInit();   // 功能初始化
	imageControl.onDrag();   // 拖拽
})
document.getElementById('modalClose').addEventListener('click', function() {
	document.getElementById('modal').style.visibility = 'hidden';
})
document.getElementById('rotateIcon').addEventListener('click', function() {
	imageControl.onRotate();   // 旋转
});
document.getElementById('magnifyIcon').addEventListener('click', function(){
	imageControl.onMagnify();   // 放大
}); 
document.getElementById('shrinkIcon').addEventListener('click', function(){
	imageControl.onShrink();   // 缩小
});
```
tips: rotateImg 和 imageBox position不能为static，推荐设置为relative；

