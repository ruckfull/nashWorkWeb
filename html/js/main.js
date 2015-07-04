//项目对象
/*业务服务JS*/
var service = [
		{ "project":"德胜凯旋项目" ,"img":"img/desheng/zhouhui.jpg" , "office":"投资经理" , "name":"周慧" , "tel":"13552916069" },
		{ "project":"金澳国际项目" ,"img":"img/jinao/guanjibao.jpg" , "office":"投资经理" , "name":"管继宝" , "tel":"13811114645" },
		{ "project":"永利国际项目" ,"img":"http://s.nashspace.com/r/i/rw.jpg" , "office":"投资经理" , "name":"谢兴" , "tel":"18500386629" },
		{ "project":"东方银座项目" ,"img":"img/yinzuo/songyang.jpg" , "office":"投资经理" , "name":"宋阳" , "tel":"13901317342" },
		{ "project":"宇飞大厦项目" ,"img":"img/yinzuo/songyang.jpg" , "office":"投资经理" , "name":"宋阳" , "tel":"13901317342" },
		{ "project":"金贸大厦项目" ,"img":"img/jinmao/zhangxiaolei.jpg" , "office":"投资经理" , "name":"张小蕾" , "tel":"13439487318" },
		{ "project":"首城国际项目" ,"img":"http://s.nashspace.com/r/i/rw.jpg" , "office":"投资经理" , "name":"李芳" , "tel":"18046557441" }
	];

$(function(){
	function serviceHTML(project,img,office,name,tel){
		var $card = $('.service-card');
		$card.find('img').attr('src',img);
		$card.find('h4').text(project);
		$card.find('small').text(office);
		$card.find('h5').text(name);
		$card.find('h6').text(tel);
	}
	$('.service-img-join a').on('click',function(e){
		e.preventDefault();
		var id = this.getAttribute('_data');
		if(id){
			serviceHTML(service[id].project,service[id].img,service[id].office,service[id].name,service[id].tel);
			$('.modal').show();
		}
	});
	$('.modal').on('click',function(e){
		e.preventDefault();
		$(this).hide();
	});
/*项目背景大图轮播*/
	if($('.imgFocus').length > 0){
		var imgList = $('.imgFocus ul'),
			WIDTH = $('.imgFocus img').width(),
			imgLeft = -WIDTH,
			totalWidth = $('.imgFocus li').length * WIDTH + WIDTH*2,
			firstLi = $('.imgFocus li:first').html(),
			lastLi = $('.imgFocus li:last').html();
		imgList.append('<li>'+firstLi+'</li>');
		imgList.prepend('<li>'+lastLi+'</li>');
		imgList.css({'left':imgLeft,'width':totalWidth});
		$('.imgFocus .next').on('click',function(e){
			e.preventDefault();
			imgList.stop();
			if(-imgLeft >= totalWidth-WIDTH*2){
				imgLeft = -WIDTH;
			}else{
				imgLeft = imgLeft - WIDTH;
			}
			imgList.animate({'left': imgLeft}, 500);
		});
		$('.imgFocus .prev').on('click',function(e){
			e.preventDefault();
			imgList.stop();
			if(imgLeft >= -WIDTH){
				imgLeft = -totalWidth + WIDTH*2;
			}else{
				imgLeft = imgLeft + WIDTH;
			}
			imgList.animate({'left': imgLeft}, 500);
		});
	}

	if($('.picFocus').length > 0){
		var picList = $('.picFocus ul'),
			picWidth = $('.picFocus ul li').width(),
			picNum = $('.picFocus ul li').length,
			picLeft = 0,
			picTotalWidth = picWidth * picNum + 1;
		picList.width(picTotalWidth);
		$('.picFocus').on('click','a.next',function(e){
			e.preventDefault();
			if(picLeft > -picTotalWidth+picWidth+1){
				picLeft = picLeft - picWidth;
			}else{
				picLeft = 0;
			}
			picList.animate({'left':picLeft},300);

		}).on('click','a.prev',function(e){
			e.preventDefault();
			if(picLeft > -picWidth){
				picLeft = -picTotalWidth + picWidth;
			}else{
				picLeft = picLeft + picWidth;
			}
			picList.animate({'left':picLeft},300);
		});
	}



	if($('body').width() < $('.contact').find('iframe').width()){
		var url = $('.contact').find('iframe').attr('src');
		var newUrl = url.split('700')[0] + $('body').width() + url.split('700')[1]
		$('.contact').find('iframe').attr('width',$('body').width())
		.attr('src',newUrl);
	}
});




/*地图传值*/
function openmap(projectname){
	if(projectname==""){
		alert("项目名不能为空");
		return false;
		}
		var time=new Date().getTime();

     $('.mapfont a').attr('href','http://www.amap.com/#!poi!!q='+projectname+'&_t='+time+'&qcity=110000&ac=false');
	 $('.mapfont a').attr('target','_blank');

}
/*项目周边环境轮播*/
function lunbo()
{
	document.getElementById("around").style.display="block";
	document.getElementById("bannerbox").style.display="block";
    var sWidth = $("#luobo").width();
    var len = $("#luobo ul li").length;
    var index = 0;
    var picTimer;
    var btn = "<div class='btnBg'></div><div class='btn'>";
    for (var i = 0; i < len; i++) {
        btn += "<span></span>";
    }
    btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
    $("#luobo").append(btn);
    $("#luobo .btnBg").css("opacity", 0);
    $("#luobo .btn span").css("opacity", 0.4).mouseenter(function () {
        index = $("#luobo .btn span").index(this);
        showPics(index);
    }).eq(0).trigger("mouseenter");
    $("#luobo .preNext").css("opacity", 0.0).hover(function () {
        $(this).stop(true, false).animate({ "opacity": "0.5" }, 300);
    }, function () {
        $(this).stop(true, false).animate({ "opacity": "0" }, 300);
    });
    $("#luobo .pre").click(function () {
        index -= 1;
        if (index == -1) { index = len - 1; }
        showPics(index);
		
    });
    $("#luobo .next").click(function () {
        index += 1;
        if (index == len) { index = 0; }
        showPics(index);
    });
    $("#luobo ul").css("width", sWidth * (len));
    $("#luobo").hover(function () {
        clearInterval(picTimer);
    }, function () {
        picTimer = setInterval(function () {
            showPics(index);
            index++;
            if (index == len) { index = 0; }
        }, 2800);
    }).trigger("mouseleave");
	
    function showPics(index) {
        var nowLeft = -index * sWidth;
        $("#luobo ul").stop(true, false).animate({ "left": nowLeft }, 300);
        $("#luobo .btn span").stop(true, false).animate({ "opacity": "0.4" }, 300).eq(index).stop(true, false).animate({ "opacity": "1" }, 300);
    }

}

$('#around').on('click',function(e){
		e.preventDefault();
		$(this).hide();
		$('#bannerbox').hide();
	});