var flag = false, moveX, moveY, imageRange;
export function drag(imageIdElement, imageBoxIdElement) {
	let parentBoxRange = {
		l: 0,
		t: 0,
		r: imageBoxIdElement.offsetWidth,
		b: imageBoxIdElement.offsetHeight,
	}
	dragMove(imageIdElement, parentBoxRange)
}	
export function dragOnint(imgElement) {
  imgElement.style.top = '0';  
  imgElement.style.left = '0';
}
function dragMove(imageIdElement, parentBoxRange) {
	imageIdElement.onmousedown = function(e) {
		e.preventDefault();
		flag = true;
    let downX = e.clientX,
    		downY = e.clientY,
    		currentL = Number(imageIdElement.style.left.replace(/px/, '')) || 0,
    		currentT = Number(imageIdElement.style.top.replace(/px/, '')) || 0;
    document.onmousemove = function(ev) {
    	if(!flag) {
    		return;
    	}
    	imageRange = {
    		l: imageIdElement.offsetLeft,
    		t: imageIdElement.offsetTop,
    		r: imageIdElement.offsetLeft + imageIdElement.offsetWidth,
				b: imageIdElement.offsetTop + imageIdElement.offsetHeight
    	}
    	moveX = ev.clientX - downX;
    	moveY = ev.clientY - downY;
      switch(true) {  //don't need break
        case moveX > 0 && imageRange.l < parentBoxRange.l:   // move right
          imageIdElement.style.left = currentL + moveX + 'px';
        case moveX < 0 && imageRange.r > parentBoxRange.r:   // move left
          imageIdElement.style.left = currentL + moveX + 'px';
        case moveY > 0 && imageRange.t < parentBoxRange.t:   // move bottom
          imageIdElement.style.top = currentT + moveY + 'px';
        case moveY < 0 && imageRange.b > parentBoxRange.b:  // move top
          imageIdElement.style.top = currentT + moveY + 'px';
        default:
          // donot move 
      }
    	document.onmouseup = function (ev) {
        flag = false;
    	}
    }
	}
}