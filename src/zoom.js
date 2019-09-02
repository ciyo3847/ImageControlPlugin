// import Info from './imageInfo.js'
let clickMagnifyNum = 0, imageClientWidth, imageClientHeight, zoomImageElement;
// let info = new Info();
export function zoomReady(rotateElement) {
	zoomImageElement = rotateElement;
	imageClientWidth = zoomImageElement.clientWidth;
	imageClientHeight = zoomImageElement.clientHeight;
	// zoomOnint(rotateElement)
}
export function zoomOnint(rotateElement) {
	console.log(rotateElement)
	rotateElement.style.width = 'auto';
	rotateElement.style.height = 'auto';
	rotateElement.style.maxWidth = '100%';
	rotateElement.style.maxHeight = '100%';
	clickMagnifyNum = 0;
}
export function magnify() {
	zoomImageElement.style.maxWidth = 'none';
	zoomImageElement.style.maxHeight = 'none';
	clickMagnifyNum += 1;
	zoomImageElement.style.width = imageClientWidth * (1 + clickMagnifyNum * 0.2) + 'px';
	zoomImageElement.style.height = imageClientHeight * (1 + clickMagnifyNum * 0.2) + 'px';
}

export function shrink() {
	clickMagnifyNum -= 1;
	zoomImageElement.style.width = imageClientWidth * (1 + clickMagnifyNum * 0.2) + 'px';
	zoomImageElement.style.height = imageClientHeight * (1 + clickMagnifyNum * 0.2) + 'px';
}

export function zoomSetSize(rotateElement) {
	clickMagnifyNum = 0;
	if(rotateElement) {
		imageClientWidth = rotateElement.clientWidth;
		imageClientHeight = rotateElement.clientHeight;
	}
}