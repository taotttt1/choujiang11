$(function(){
	$(".box7-ok").click(function(){
		$(".box4").css("display","block");
		$(".ok").click(function(){ // 确定
			$(".box4").css("display","none");
		})
		$(".quxiao").click(function(){ // 取消
			$(".box4").css("display","none");
			
		})
	})
	
})
