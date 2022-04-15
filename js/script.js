$(function(){
		$('.menu-btn').on('click', function(){
		  $('.menu').toggleClass('is-active');
		});
	  }());
	  
$(function() {
    $('#nav_toggle').click(function(){ // headerにclass名「open_nav」を追加及び削除
        $('header').toggleClass('open_nav');

    });

    $('nav a').on('click', function(){
        if (window.innerWidth <= 768) {
            $('#nav_toggle').click();
        }
    });
});

$("#page_link").click(function(){
	$('.menu').toggleClass('is-active');
});
$("#page_link1").click(function(){
	$('.menu').toggleClass('is-active');
});
//ここまでnav

particlesJS("particles-js",{
	"particles":{
		"number":{
			"value":38,//この数値を変更すると幾何学模様の数が増減できる
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#ffffff"//色
		},
		"shape":{
			"type":"polygon",//形状はpolygonを指定
			"stroke":{
				"width":0,
			},
	"polygon":{
		"nb_sides":3//多角形の角の数
	},
	"image":{
		"width":190,
		"height":100
	}
	},
		"opacity":{
		"value":0.664994832269074,
		"random":false,
		"anim":{
			"enable":true,
			"speed":2.2722661797524872,
			"opacity_min":0.08115236356258881,
			"sync":false
		}
		},
		"size":{
			"value":3,
			"random":true,
			"anim":{
				"enable":false,
				"speed":40,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":true,
			"distance":150,
			"color":"#ffffff",
			"opacity":0.6,
			"width":1
		},
		"move":{
			"enable":true,
			"speed":6,//この数値を小さくするとゆっくりな動きになる
			"direction":"none",//方向指定なし
			"random":false,//動きはランダムにしない
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":961.4383117143238
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
				"mode":"repulse"
			},
	"onclick":{
		"enable":false
	},
	"resize":true
		}
	},
	"retina_detect":true
});

$(window).on('load',function(){
	$("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
	
	//=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
	$("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
	
	$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
	
	});
	//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
	
	//=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
	$('.splashbg1').on('animationend', function() { 
	//この中に動かしたいJSを記載
	});
	//=====ここまで背景が伸びた後に動かしたいJSをまとめる
	
	});
