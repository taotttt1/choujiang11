window.onload = function(){
	var kaishi = document.querySelector(".kaishi");
	var arr = ["获得黄忠村酒2瓶","获得莱沃口腔储值卡","获得中国联通流量卡","获得S5健身俱乐部贵宾卡","获得圣雅瑜伽SPA会所储值卡","获得陶进二胡工作室","获得蛋壳科技VR体验卡"]
	var box4 = document.querySelector(".box4");
	var quxiao = document.querySelector(".quxiao");
	var name = document.querySelector(".name");
	var phone = document.querySelector(".phone");
	var box4p2 = document.querySelector(".box4-p2");
	var guize = document.querySelector(".guize");
	var box5p = document.querySelector(".box5-p");
	var box6 = document.querySelector(".box6");
	var re1 = /^[a-z][a-z0-9_-]{5,19}$/; // 姓名
	
	// 规则
	guize.onclick = function(){
		box6.style.display="block";	
		
		box5p.onclick = function(){
			box6.style.display="none";	
		}
		
	}
	
	
	
	// 抽奖转盘
	kaishi.onclick = function(){ // 收集信息
		box4.style.display="block";		

		
		// 点击取消
		quxiao.onclick = function(){
			box4.style.display="none";
		}
		    
	}
	
}
