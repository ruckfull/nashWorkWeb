//项目对象
var service = [
		{ "project":"德胜凯旋项目" ,"img":"" , "office":"投资经理" , "name":"周慧" , "tel":"13701131133" },
		{ "project":"金澳国际项目" ,"img":"" , "office":"投资经理" , "name":"周一" , "tel":"13701131133" },
		{ "project":"永利国际项目" ,"img":"" , "office":"投资经理" , "name":"周二" , "tel":"13701131133" },
		{ "project":"东方银座项目" ,"img":"" , "office":"投资经理" , "name":"周三" , "tel":"13701131133" },
		{ "project":"宇飞大厦项目" ,"img":"" , "office":"投资经理" , "name":"周四" , "tel":"13701131133" },
		{ "project":"金贸大厦项目" ,"img":"" , "office":"投资经理" , "name":"周五" , "tel":"13701131133" },
		{ "project":"首城国际项目" ,"img":"" , "office":"投资经理" , "name":"周六" , "tel":"13701131133" }
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
	$('.service-img a').on('click',function(e){
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
			WIDTH = $('.imgFocus li img').width(),
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

});