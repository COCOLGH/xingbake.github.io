// ////////////////////////// <!--实时获取窗口大小，方便调整布局样式-->
var Width = $(window).width();
$(window).resize(function() {
    Width = $(window).width();
    // 实时监听屏幕的变化，若屏幕宽度小于640时，隐藏左侧头部菜单；否则显示该菜单
    if (Width < 640) {
        topnav.style.display = 'none';
    } else {
        topnav.style.display = 'block';
    }
})


////////////////////////// <!-- 轮播图代码 -->
// 获取轮播图对象
var carousel = document.getElementsByClassName('carousel')[0];
var num = 1;
var timer;

// 轮播图自动轮播图片的函数定义
function run() {
   timer = setInterval(function () {
        num++;
        if(num == 7){
            num = 1;
        }  
        if (Width > 623) {
            carousel.src = "./images/carousel/home-" + num + ".jpg";
        }else {
            carousel.src = "./images/carousel/home-" + num + "-mobile.jpg";
        }
    },3000);
}

// 判断此时的可视屏幕大小是否小于622px，若是换封面图
 if (Width <= 623) {
    carousel.src = './images/carousel/home-'+ num + '-mobile.jpg';
}

// 调用轮播图函数
run();
carousel.onmouseenter = function() {
    clearInterval(timer);
}
carousel.onmouseleave = function() {
    run();
}

// 点击span标签切换下一张图片
var toRight = document.getElementsByClassName('toRight')[0];
toRight.onclick = function () {
	num++;
	if(num == 7){
		num = 1;
	}

	if (Width > 623) {
        carousel.src = "./images/carousel/home-" + num + ".jpg";
    }else {
        carousel.src = "./images/carousel/home-" + num + "-mobile.jpg";
    }
}


////////////////////////// <!-- 点击移动图片  !!!为解决-->
var myLeft = document.getElementsByClassName('glyphicon-chevron-left')[0];
var myRight = document.getElementsByClassName('glyphicon-chevron-right')[0];
var ul = document.getElementsByClassName('fiveContent')[0];
var move = 100;

function clickLeft() {
    if(Width > 1500) {
        ul.style.transform = 'translateX(20%)';
    }else if (Width <= 1500 && Width >= 1025) {
        ul.style.transform = 'translateX(15%)'
    }else {
        ul.style.transform = 'translateX(2%)';
    }
    myRight.style.opacity = '1';
    myLeft.style.opacity = '0';
}

function clickRight() {
    if(Width > 1500) {
        ul.style.transform = 'translateX(10%)';
    }else if (Width <= 1500 && Width >= 1025) {
        ul.style.transform = 'translateX(-15%)'
    }else if (Width <= 1024 && Width >= 641) {
        ul.style.transform = 'translateX(-20%)';
    } else {
       ul.style.transform = 'translateX(-30%)';
    }
    myRight.style.opacity = '0';
    myLeft.style.opacity = '1';
}