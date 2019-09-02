import { zoomSetSize } from './zoom.js';

let imageIdWidth, imageIdHeight, imageBoxIdWidth, imageBoxIdHeight, rotateImageElement;
let clickRotateNum = 0;
export function rotateReady(imageIdElement, imageBoxIdElement) {
	imageIdWidth = imageIdElement.clientWidth;
	imageIdHeight = imageIdElement.clientHeight;
	imageBoxIdWidth = imageBoxIdElement.clientWidth,
	imageBoxIdHeight = imageBoxIdElement.clientHeight;
	rotateImageElement = imageIdElement;
}

export function rotateInit(imageIdElement) {
	clickRotateNum = 0;
	if(imageIdElement) {
		imageIdWidth = imageIdElement.clientWidth;
		imageIdHeight = imageIdElement.clientHeight;
	}
	imageIdElement.style.transform = `rotate(${clickRotateNum * 90}deg)`;
	imageIdElement.style.width = 'auto';
	imageIdElement.style.height = 'auto';
	imageIdElement.style.maxWidth = '100%';
	imageIdElement.style.maxHeight = '100%';
}

export function rotate() {
	clickRotateNum = clickRotateNum + 1;
	rotateImageElement.style.left = 0;  // 移动置于默认值
	rotateImageElement.style.top = 0;
	rotateImageElement.style.transform = `rotate(${clickRotateNum * 90}deg)`;
	if(clickRotateNum % 2 > 0 ) { //奇数 宽为height， 高为width
		rotateImageElement.style.width = imageBoxIdHeight + 'px';
		rotateImageElement.style.height = 'auto';
		rotateImageElement.style.maxWidth = 'none';
		rotateImageElement.style.maxHeight = 'none';
		if(imageIdWidth > imageBoxIdHeight) {
			rotateImageElement.style.width = imageBoxIdHeight + 'px';
			rotateImageElement.style.height = 'auto';
		} else if(imageIdHeight > imageBoxIdWidth) {
			rotateImageElement.style.height = imageBoxIdWidth + 'px';
			rotateImageElement.style.width = 'auto';
		}
	} else {
		rotateImageElement.style.width = 'auto';
		rotateImageElement.style.height = 'auto';
		rotateImageElement.style.maxWidth = '100%';
		rotateImageElement.style.maxHeight = '100%';
	}
	zoomSetSize(rotateImageElement);
}