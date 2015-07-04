//项目对象
/*业务服务JS*/
var service = [
		{ "project":"德胜凯旋项目" ,"img":"img/project/kaixuan/zhouhui.jpg" , "office":"投资经理" , "name":"周慧" , "tel":"13552916069" },
		{ "project":"金澳国际项目" ,"img":"img/project/jinao/guanjibao.jpg" , "office":"投资经理" , "name":"管继宝" , "tel":"13811114645" },
		{ "project":"永利国际项目" ,"img":"img/rw.jpg" , "office":"投资经理" , "name":"谢兴" , "tel":"18500386629" },
		{ "project":"东方银座项目" ,"img":"img/project/yinzuo/songyang.jpg" , "office":"投资经理" , "name":"宋阳" , "tel":"13901317342" },
		{ "project":"宇飞大厦项目" ,"img":"img/project/yinzuo/songyang.jpg" , "office":"投资经理" , "name":"宋阳" , "tel":"13901317342" },
		{ "project":"金贸大厦项目" ,"img":"img/project/jinmao/zhangxiaolei.jpg" , "office":"投资经理" , "name":"张小蕾" , "tel":"13439487318" },
		{ "project":"首城国际项目" ,"img":"img/rw.jpg" , "office":"投资经理" , "name":"李芳" , "tel":"18046557441" }
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
	$('.business a').on('click',function(e){
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
