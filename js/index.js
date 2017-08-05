var inner = document.getElementById("inner");

createScrollBar.call( inner);
function createScrollBar(){
	var parentNode = this.parentNode;
	var nextNode = this.nextElementSibling;
	var wrap = document.createElement("div");     //包裹盒子
	var scrollBar = document.createElement("div");   //滚动条
	var scrollRoad = document.createElement("div");   //滚动轨道
	wrap.appendChild(scrollBar);
	wrap.appendChild(scrollRoad);
	wrap.appendChild(this);
	parentNode.insertBefore(wrap,nextNode);
	
	var scrollW = 10;
	var thisScrollH = this.scrollHeight;   //内容区的完整高度
	var thisW = this.clientWidth;    //内容区宽度    content+padding
	var thisH = this.clientHeight;  	//获取内容区的高度
	
	//设置外包裹盒子
	wrap.style.position = "relative";
	wrap.style.width = thisW + scrollW +"px";
	wrap.style.height = thisH + "px";
	wrap.style.overflow = "hidden";
	
	//设置该元素为绝对定位
	this.style.position = "absolute";
	this.style.top=0;
	this.style.left = 0;
	
	//设置滚动轨道
	scrollRoad.style.position = "absolute";
	scrollRoad.style.top = 0;
	scrollRoad.style.right = 0;
	scrollRoad.style.width = scrollW+"px";
	scrollRoad.style.height = thisH+"px";
	scrollRoad.style.background = "yellow";
	scrollRoad.style.zIndex = 1;  //滚动轨道在下
	
	//设置滚动条
	scrollBar.style.position  ="absolute";
	scrollBar.style.top =0;
	scrollBar.style.right = 0;
	scrollBar.style.height = thisH*thisH/thisScrollH+"px"; //内容越多，滚动条越短
	scrollBar.style.width = scrollW+"px"
	scrollBar.style.background = "blue";
	scrollBar.style.zIndex = 2;  //滚动条在上
	scrollBar.style.transition = "all .3s ease-out";

	var canScrollH = thisH - parseFloat( scrollBar.style.height ); //滚动条可以滚动的高度
	var contentAllH = thisScrollH - thisH;  //内容可滚动的高度
	
	//滚动事件
	this.onscroll = function(){
		var x = this.scrollTop * canScrollH / contentAllH;
		scrollBar.style.top = x + "px";
	}
	
	

}

