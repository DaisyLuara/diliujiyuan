// 页面初始化
$(function(){
	 
	// 轮播图1初始化，swiper1初始化
	var mySwiper1 = new Swiper('#swiper1', {
		autoplay : 3000,
		autoplayDisableOnInteraction : false,
		simulateTouch : false,
		loop:true,
		grabCursor : true,
		// width:window.innerWidth
	})
	// 轮播图2初始化，swiper2初始化
	var mySwiper2 = new Swiper('#swiper2', {
		autoplay : 3000,
		autoplayDisableOnInteraction : false,
		simulateTouch : false,
		loop:true,
		height:400,
		pagination: '#swiper-pagination2',
        paginationClickable: true,
	})
	// 轮播图3初始化，swiper3初始化
	var mySwiper3 = new Swiper('#swiper3', {
		// autoplay : 3000,
		speed:100,
		autoplayDisableOnInteraction : false,
		simulateTouch : false,
		loop:true,
		prevButton:'#prev3',
		nextButton:'#next3',
		pagination : '#swiper-pagination3',
		paginationClickable: true,
		onSlideChangeStart: function(swiper){
			var index=swiper.activeIndex;
			$(".img1").removeClass("img-left");
			$(".img2").removeClass("img-right");
			$(".img3").removeClass("animated bounceInUp");
	      	$(".img1:eq("+index+")").addClass("img-left");
	      	$(".img2:eq("+index+")").addClass("img-right");
	      	$(".img3:eq("+index+")").addClass("animated bounceInUp");
	    }
	})
	// 轮播图4初始化，swiper4初始化
	var mySwiper4 = new Swiper('#swiper4',{
		pagination : '#swiper-pagination4',
		paginationClickable :true,

	})
	// 轮播图5初始化，swiper5初始化
	var mySwiper5 = new Swiper('#swiper5',{
		prevButton:'#prev5',
		nextButton:'#next5',
	})

	// 懒加载初始化
	// $(".lazy").lazyload({
	// 	effect: "fadeIn",
	// 	threshold :300,
	// 	skip_invisible : false
	// });
	
	
	window.requestAnimationFrame = (function(){
		  return  window.requestAnimationFrame       ||
				  window.webkitRequestAnimationFrame ||
				  window.mozRequestAnimationFrame    ||
				  window.msRequestAnimationFrame     ||
				  function( callback ){
					window.setTimeout(callback, 1000 / 60);
				  };
	})();

	var myvideo=document.getElementById("#myvideo");// 弹窗视频
	var yingyin=document.getElementById("#yingyin");//影音专区视频 
	var init=function(){
		myscroll();
		topnav();
		news();
		peoples();
		vm();
		video1();
		video2();
		world();
		company();
		
 	}
	init();
})

var top1=$("#one").offset().top;
var top2=$("#two").offset().top-90;
var top3=$("#three").offset().top;
var top4=$("#four").offset().top;
var top5=$("#five").offset().top;
var top6=$("#six").offset().top;
var top7=$("#seven").offset().top;
var arr=[top1,top2,top3,top4,top5,top6,top7];
// 顶部导航+下载按钮
var topnav=function(){
	$(".top-nav li").on("click",function(){
		$(".top-nav li").removeClass("top_active");
		$(this).addClass("top_active");
	})
	$(".guard_hover").hover(function(){
		$(".guard_div").show();
	},function(){
		$(".guard_div").hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		})
	});
	
  
}


// 情报放送
var news=function(){
	$(".news_tabs li").on("click",function(){
		var index=$(this).attr("data-index");
		$(".news_tabs li").removeClass("news_active");
		$(this).addClass("news_active");
		$(".news-main>div").hide();
		$(".news-main>div:eq("+index+")").show();
	});
}
// people 切换
var peoples=function(){
	var len=$(".images_ul>li").length;
	$(".people_switch ul li a").on("click",function(){
		var index=$(this).attr("data-index");
		if(index>len-1){
			return;
		}
		$(".people_switch ul li a").removeClass("a_active");
		$(this).addClass("a_active");
		$(".images_ul>li").removeClass("img_on");
		$(".text_img").removeClass("animated bounceInDown")
		$(".images_ul>li:eq("+index+")").addClass("img_on");
		$(".img_on>.text_img").addClass("animated bounceInDown");
		
	})

	// switch
	var group_num=0;
	var group_len=$(".people_switch>ul li").length;
	$(".people_more").on("click",function(){
		group_num++;
		$(".people_switch ul li").attr("class","nomal");
		if(group_num>group_len-1){
			group_num=0;
		}
		$(".people_switch>ul li:eq("+group_num+")").attr("class","switch_on");
	});
};


// 影音专区
var vm=function(){
	$(".vm_nav").on("click","span",function(){
		var index=$(this).index()+1*1;
		$(".vedio_img_tabs .swiper-pagination .swiper-pagination-bullet").each(function(){
			var i=$(this).index()*1+1
			$(this).css("background-image","url('./img/vm_nav_"+i+".png')");
			
		})
		$(".vedio_img_tabs .swiper-pagination .swiper-pagination-bullet:nth-child("+index+")").css("background-image","url('./img/vm_nav_bg"+index+".png')");
		if(index==2){
			$("#yingyin").load();
			yingyin.currentTime=0;
			yingyin.play();
		}else{
			yingyin.pause();
			yingyin.currentTime=0;
		}
	})
	mymouse();
	$(".meitu a").on("click",function(){
		var num=$(this).attr("data-index")-1;
		$(".mask").show();
		$(".big_meitu").show();
	})
	
	$(".cos a").on("click",function(){
		var num=$(this).attr("data-index")-1;
		$(".mask").show();
		$(".big_cos").show();
	})

	img_click("big_meitu",'6',"meitu");
	a_click("big_meitu",'6',"meitu");
	img_click("big_cos",'18',"cos");
	a_click("big_cos",'18',"cos");

	$(".mask").on("click",function(){
		if($(".big_meitu").css("display")!='none'||$(".big_cos").css("display")!='none'){
			$(".big_meitu").hide();
			$(".big_cos").hide();
			$(".mask").hide();
		}
	});

}

function img_click(cname,imgnum,div){
	$("."+cname+" img").on("click",function(){
		var index=$(this).attr("data-index");
		var num=imgnum;
		var src;
		if(index>=num){
			src=1;
		}else{
			src=index*1+1;
		}
		$(this).attr({"src":"./img/big/"+div+src+".png","data-index":src});

		 event.stopPropagation();
	});
	
}
function a_click(cname,imgnum,div){
	$("."+cname+" a").on("click",function(){
		var atype=$(this).attr("data-type");
		var img=$(this).parent().find("img");
		var index=img.attr("data-index");
		var num=imgnum;
		var src;

		switch(atype){
			case 'prev':
				if(index<=1){
					src=num;
				}else{
					src=index*1-1;
				}
				img.attr({"src":"./img/big/"+div+src+".png","data-index":src});
				console.log(src);
				break;
			case 'next':
				if(index>=num){
					src=1;
				}else{
					src=index*1+1;
				}
				img.attr({"src":"./img/big/"+div+src+".png","data-index":src});
				console.log(num);
				break;
		}
		 event.stopPropagation();
	})
	
}

// 底部合作伙伴左右无缝滚动
var company=function(){
	var html=$(".icons").html();
	$(".icons").html(html+html);
	var width=$(".icons li").width()*$(".icons li").length;
	$(".icons").css("width",width);
	
	move();

	var left=$(".company").scrollLeft();
	function move(){
		if(left>width/2-1){
			$(".company").scrollLeft(0);
			left=0;
		}else{
			left+=1.5;
			$(".company").scrollLeft(left);
		}
		
		var leftscroll=requestAnimationFrame(move);
	}
	function stopmove(){
		cancelAnimationFrame(leftscroll);
	}

}

// 弹框
// 
var video1=function(){
	
	$(".vedio_div .playbtn").on("click",function(){
		myvideo.play();
	})
	$(".myvideo_btn").on("click",function(){
		$("#myvideo").load()
		$(".mask").show();
		$(".vedio_div").show();
		myvideo.play();
		myvideo.currentTime=0;
	});
	$("#myvideo").on("click",function(){
		myvideo.pause();
	}) 
	
	myvideo.onended=function(){
		$(this).parent().addClass("ended");
	}
	myvideo.onpause=function(){
		$(this).parent().toggleClass("ended");
	}
	myvideo.onplay=function(){
		$(this).parent().removeClass("ended");
	}


}
var video2=function(){
	$(".yydiv .playbtn").on("click",function(){
		yingyin.play();
	})
	$("#yingyin").on("click",function(){
		yingyin.pause();
	}) 
	
	yingyin.onended=function(){
		$(this).parent().addClass("ended");
	}
	yingyin.onpause=function(){
		$(this).parent().toggleClass("ended");
	}
	yingyin.onplay=function(){
		$(this).parent().removeClass("ended");
	}
}

// 页面滚动
var myscroll=function(){
	
	 //ie?    
	    if (!!window.ActiveXObject || "ActiveXObject" in window){   
	        //是  
	        top2=top2-20;
	        top3=top3-20;
	        top4=top4-20;
	        top5=top5-20;
	        top6=top6-30;
	        top7=top7-20;
	        
	    }else{  
	        //不是   
	        console.log(222);  
	    }  
	var asideScroll=function(){
			var top=$(window).scrollTop();
			if(top<top2){
				$(".right_list li").removeClass("aside_active");
				$(".right_list li:eq(0)").addClass("aside_active");
				$(".right_list").hide();
			}else if(top<top3){
				$(".right_list li").removeClass("aside_active");
				$(".right_list li:eq(1)").addClass("aside_active");
				$(".right_list").show();
			}else if(top<top4){
				$(".right_list li").removeClass("aside_active");
				$(".right_list li:eq(2)").addClass("aside_active");
			}else if(top<top5){
				$(".right_list li").removeClass("aside_active");
				$(".right_list li:eq(3)").addClass("aside_active");
			}else if(top<top6){
				$(".right_list li").removeClass("aside_active");
				$(".right_list li:eq(4)").addClass("aside_active");
			}else if(top<top6+300){
				$(".right_list li").removeClass("aside_active");
				$(".right_list li:eq(5)").addClass("aside_active");
			}else{
				$(".right_list li").removeClass("aside_active");
				$(".right_list li:eq(6)").addClass("aside_active");
			}
		}
	// 侧边栏导航
	$(".right_list ul a").on("click",function(){
		//$(".right_list ul a li").removeClass("aside_active");
		//$(this).children("li").addClass("aside_active");
		var top_num=$(this).attr("data-index");
		
		$("html,body").stop(true).animate({
			scrollTop:arr[top_num-1]
		},300)
	});
	$(".a_link a").on("click",function(){
		if(!$(this).attr("data-index")){
			return;
		}
		var top_num=$(this).attr("data-index");

		$("html,body").stop(true).animate({
			scrollTop:arr[top_num-1]
		},300)
	})

	if($(window).scrollTop()<top2){
		$(".right_list").hide();
	}else if($(window).width()<1360){
		$(".right_list").hide();
	}else{
		//$(".right_list").show();
		asideScroll();
	}
	

	if($(window).width()<1360){
		$(".right_list").hide();
	}else{
		if($(window).scrollTop()<top2){
			$(".right_list").hide();
		}else{
			$(".right_list").show();
		}
		$(window).scroll(asideScroll);
	}
	
	
	// 公用
	$(" .close").on("click",function(){
			$(this).parent().hide();
			if(!$(this).parent().find("video").length){
				myvideo.pause();
			}
			$(".mask").hide();
	});

}

// 鼠标移入，遮罩层效果
var　mymouse=function(){
		$(".vm_ul li").each(function(){
		   $(this).on('mouseenter',function(e){
			   var e=e||window.event;
			   var angle=direct(e,this)
			   mouseEvent(angle,this,'in')
		   })
		   $(this).on('mouseleave',function(e){
			   var e=e||window.event;
			   var angle=direct(e,this)
			   mouseEvent(angle,this,'off')
		   })
   		})

		function direct(e,o){
			 var w=o.offsetWidth;
			 var h=o.offsetHeight;
			 var top=$(o).offset().top;                    //包含滚动条滚动的部分
	 		 var left= $(o).offset().left;
			 var scrollTOP=document.body.scrollTop||document.documentElement.scrollTop;
			 var scrollLeft=document.body.scrollLeft||document.documentElement.scrollLeft;
			 var offTop=top-  scrollTOP;
			 var offLeft= left- scrollLeft;

		 	 var ex= (e.pageX-scrollLeft)|| e.clientX;
			 var ey=(e.pageY-scrollTOP)|| e.clientY;
			 var x=(ex-offLeft-w/2)*(w>h?(h/w):1);
			 var y=(ey-offTop-h/2)*(h>w?(w/h):1);

			 var angle=(Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4//atan2返回的是弧度 atan2(y,x)
			 var directName=["上","右","下","左"]; 
			 return directName[angle];  //返回方向  0 1 2 3对应 上 右 下 左
		}
	   function mouseEvent(angle,o,d){ //方向  元素  鼠标进入/离开
		   var w=o.offsetWidth;
		   var h=o.offsetHeight;

		   if(d=='in'){
			   switch(angle){
				   case '上':
					   $(o).find("a").css({left:"10px",top:-h+"px"}).stop(true).animate({left:"10px",top:"10px"},300)
						
					   break;
				   case '右':
					   $(o).find("a").css({left:w+"px",top:"10px"}).stop(true).animate({left:"10px",top:"10px"},300)
					   
					   break;
				   case '下':
					   $(o).find("a").css({left:"10px",top:h+"px"}).stop(true).animate({left:"10px",top:"10px"},300)
					  
					   break;
				   case '左':
					   $(o).find("a").css({left:-w+"px",top:"10px"}).stop(true).animate({left:"10px",top:"10px"},300)
					  
					   break;
			   }
		   }else if(d=='off'){
			   switch(angle){
				   case '上':
						   $(o).find("a").stop(true).animate({left:"10px",top:-h+"px"},300)
					   break;
				   case '右':
						   $(o).find("a").stop(true).animate({left:w+"px",top:"10px"},300)
					   break;
				   case '下':
						   $(o).find("a").stop(true).animate({left:"10px",top:h+"px"},300)
					   break;
				   case '左':
						   $(o).find("a").stop(true).animate({left:-w+"px",top:"10px"},300)
					   break;
			   }
		   }
	   }
	
}
var wordTop,startTop;
var world=function(){
	wordTop=$(".word-over").scrollTop();
	$(".text_more").on("click",function(){
		$(".mask").show();
		$(".world").show();
		topscroll();
		wordHover();
	});

	function topscroll(){
		if(wordTop>=$("#word")[0].scrollHeight-1){
			$(".word-over").scrollTop(0);
			wordTop=0;
		}else{
			wordTop++;
			$(".word-over").scrollTop(wordTop);
		}
		startTop=requestAnimationFrame(topscroll);

	}
	function wordHover(){
		$(".word-over").hover(function(){
			cancelAnimationFrame(startTop);
			$(".word-over").attr("id","demo");
			//$(".mybox").addClass("box");
		},function(){
			startTop=requestAnimationFrame(topscroll);
			$(".word-over").attr("id","");
			//$(".mybox").removeClass("box");
		});
		
	}

}


