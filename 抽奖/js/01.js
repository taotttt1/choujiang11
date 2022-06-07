window.onload = function(){
	var btn = document.querySelector(".btn");
	var obox = document.querySelector(".obox");
	var second = document.querySelector(".second");
	var huodon = document.querySelector(".huodon");
	var tishi = document.querySelector(".tishi");
	var queding = document.querySelector(".queding");
	var kaishi = document.querySelector(".kaishi");
	var arr = ["黄忠村酒2瓶","获得莱沃口腔储值卡","中国联通流量卡","获得S5健身俱乐部贵宾卡","获得圣雅瑜伽SPA会所储值卡","获得陶进二胡工作室","获得蛋壳科技VR体验卡"]
	btn.onclick = function(){ // 跳到转盘页面
	obox.style.display="none";
	second.style.display="block";
	}
	
	// 活动规则
	huodon.onclick = function(){  
	tishi.style.display="block";
	queding.onclick = function(){
		tishi.style.display="none";
	}
	}
	// 抽奖转盘
	kaishi.onclick = function(){ // 收集信息
		
	}
}
