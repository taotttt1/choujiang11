window.onload = function(){
	var kaishi = document.querySelector(".kaishi");
	var box4 = document.querySelector(".box4");
	var quxiao = document.querySelector(".quxiao");
	var name = document.querySelector(".name");
	var phone = document.querySelector(".phone"); // 手机号
	var box4p2 = document.querySelector(".box4-p2");
	var guize = document.querySelector(".guize");
	var box5p = document.querySelector(".box5-p");
	var box6 = document.querySelector(".box6");
	var ok = document.querySelector(".ok");
	var box4p1 = document.querySelector(".box4-p1");
	var re = /^1[34578]\d{9}$/; // 手机号
	var list = document.querySelector(".list"); // list
	var oli = list.querySelectorAll("li");
	var arr = ["获得黄忠村酒2瓶","获得莱沃口腔储值卡","获得中国联通流量卡","获得S5健身俱乐部贵宾卡","获得圣雅瑜伽SPA会所储值卡","获得陶进二胡工作室","获得蛋壳科技VR体验卡"]
	var cishu = document.querySelector(".cishu");
	var box11b = document.querySelector(".box11-b"); // 次数提示
	var box11bqueding = document.querySelector(".box11-b-queding"); // 次数提示
	var i = 3;
	var box7 = document.querySelector(".box7");
	var box7ok = document.querySelector(".box7-ok");
	// 活动规则
	guize.onclick = function(){
		box6.style.display="block";	// 显示规则
		box5p.onclick = function(){ // 点击确定时关闭
			box6.style.display="none";	
		}
	}
	
	// 开始抽奖
	kaishi.onclick = function(){ 
	    // 收集信息
		box4.style.display="block"; // 显示收集信息提示框
		ok.onclick = function(){ // 点击确定
			if(name.value==""){
				box4p2.style.display="block";
			}
			
			if(re.test(phone.value)==false){ // 手机号错误
		    box4p1.style.display="block";
		    }else{  // 手机号正确
		    	box4.style.display="none";
		    	 i--;
		    	 // 抽奖次数
	    if(i == 0){
	    box11b.style.display="block";
	    }
	    box11bqueding.onclick = function(){
	    	box11b.style.display="none";
	    	kaishi.onclick ="null";
	    }
	    cishu.innerHTML = i;
	    box7.style.display="block";
	    box7ok.onclick = function(){
	    	 box7.style.display="none";
	    }
		    }
		}
		    quxiao.onclick = function(){ // 点击取消
			box4.style.display="none";
		}
	    
	   
	    
	}

	
}
