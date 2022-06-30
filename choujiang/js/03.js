
$(function(){
	 // 显示收集信息提示框
	$(".box4").css("display","block");
	var name = document.querySelector(".name");
	var phone = document.querySelector(".phone"); // 手机号
	var re = /^1[34578]\d{9}$/; // 手机号
	$(".ok").click(function(){
	if(name.value==''){ //判断姓名
		$(".box4-p2").css("display","block");
		}else{
			$(".box4-p2").css("display","none");
		}
		if(re.test(phone.value)==false){ //手机号
				$(".box4-p1").css("display","block");
		}else{
			$(".box4-p1").css("display","none");
		}	

		if(re.test(phone.value) == true && name.value != '') { // 判断是否都正确
			$(".box4").css("display","none");
		}
	})
	$(".quxiao").click(function(){ // 点击取消
			$(".box4").css("display","none");
		})
	
	// 活动规则
	$(".guize").click(function(){
		$(".box6").css("display","block");// 活动规则显示
		$(".box5-p").click(function(){
			$(".box6").css("display","none"); // 活动规则隐藏
		})
	})
	
	// 收集信息
	

	//抽奖
	var i = 3;
	var oo = new Array("box7","box8","box9","box91","box92","box93","box94");
	$(".kaishi").click(function(){
		 i--;
		 if(i < 0) {
			i = 0;
		}
		 $(".cishu").html(i);
		 var z = Math.floor(Math.random()*7);
		 $('.'+oo[z]+'').css("display","block");
		 $(".box7-ok").click(function(){
		 	$(".box7").css("display","none");
		 	$(".box8").css("display","none");
		 	$(".box9").css("display","none");
		 	$(".box91").css("display","none");
		 	$(".box92").css("display","none");
		 	$(".box93").css("display","none");
		 	$(".box94").css("display","none");
		 })
		if(i==0){
			$(".box11-b").css("display","block");
			$(".box11-b-queding").click(function(){
			$(".box11-b").css("display","none");
			$(".kaishi").unbind();
			})
		}
	})
})
