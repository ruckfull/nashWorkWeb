//项目对象
var service = [
		{ "project":"德胜凯旋项目" ,"img":"http://s.nashspace.com/r/i/rw.jpg" , "office":"投资经理" , "name":"陈乐佛" , "tel":"13522934165" },
		{ "project":"金澳国际项目" ,"img":"http://s.nashspace.com/r/i/rw.jpg" , "office":"投资经理" , "name":"沈艳蕊" , "tel":"15201587217" },
		{ "project":"永利国际项目" ,"img":"http://s.nashspace.com/r/i/rw.jpg" , "office":"投资经理" , "name":"朱雅渲" , "tel":"18610695177" },
		{ "project":"东方银座项目" ,"img":"http://s.nashspace.com/r/i/rw.jpg" , "office":"投资经理" , "name":"宋阳" , "tel":"13901317342" },
		{ "project":"宇飞大厦项目" ,"img":"http://s.nashspace.com/r/i/rw.jpg" , "office":"投资经理" , "name":"宋阳" , "tel":"13901317342" },
		{ "project":"金贸大厦项目" ,"img":"http://s.nashspace.com/r/i/rw.jpg" , "office":"投资经理" , "name":"刘中森" , "tel":"13911800041" },
		{ "project":"首城国际项目" ,"img":"http://s.nashspace.com/r/i/rw.jpg" , "office":"投资经理" , "name":"王鹏" , "tel":"15201334623" }
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


function openmap(projectname){
	if(projectname==""){
		alert("项目名不能为空");
		return false;
		}
		var time=new Date().getTime();

     $('.mapfont a').attr('href','http://www.amap.com/#!poi!!q='+projectname+'&_t='+time+'&qcity=110000&ac=false');
	 $('.mapfont a').attr('target','_blank');

}