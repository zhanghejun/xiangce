$(function(){
	//换一批图片
	var arr=[
	{img:"9.jpg",link:"http://baidu.com"},
	{img:"10.jpg",link:"http://sina.com"},
	{img:"11.jpg",link:"http://10086.com"},
	{img:"12.jpg",link:"http://12306.com"},
	{img:"13.jpg",link:"http://qq.com"},
	{img:"14.jpg",link:"http://sb.com"},
	{img:"15.jpg",link:"http://2b.com"},
	{img:"16.png",link:"http://len.com"}
	];
	$("input").on("click",function(){
        $('body').css({background:'url(99.jpg)'});
		$('.dade img').attr('src',function(i,oldsrc){
			return arr[i].img;
		})
		$('.dade link').attr('link',function(i,oldsrc){
			return arr[i].link;
		})
	})
//搜索框选中全选
   $('#checkall').on('click',function(){
   	$('table tbody input:checkbox').prop('checked',$(this).prop('checked'));
   })
   $('table tbody input:checkbox').on('click',function(){
   	var len=$('table tbody input').length;
   	if($('table tbody input:checked').length===len){
   		$('#checkall').prop('checked',true);
   	}else{
   		$('#checkall').prop('checked',false);
   	}
   })

//搜索框删除
   $('.search').on('keyup',function(){
       var key=$(this).val();
       $("table tbody tr").removeClass("hide");
       if(key===""){
       	return;
       }
       $("table tbody tr").not(":contains("+key+")").addClass("hide");
   })

 //音频


   setInterval(function(){$('.test').height(function(){
   	return Math.floor(Math.random()*300+3);
   })},200)
 
//点击出现   
$('.dade li').on('click',function(e){
    e.preventDefault();
$('.cart').addClass('show');
var src=$(this).find('img').attr('src');
$('.rongqi img').attr('src',src);
 $('this').attr('index')
    //$('.cart').attr('date-id',$(this).index())
   })
$('.close').on('click',function(e){
  $('.cart').removeClass('show');
})
$('.cart').on('mousedown',function(){
  e.preventDefault();
})
$('.cart').attr('index',$(this).index());
$('.cart').on('click',function(e){
    $('.xianshi').css({opacity:0});
  var index=parseInt($(this).attr('index'))
  var imgs=$('.dade img');
  if(e.clientX>$('.rongqi').outerWidth(true)/2){
    index+=1;
  }else{
    index-=1;
  }
  if(index===imgs.length){
    $('.xianshi').css({opacity:0.8}).text('最后一张')
  }
   if(index===-1){
       $('.xianshi').css({opacity:0.8}).text('第一张')
  }
 $(this).attr('index',index);
  var src=imgs.eq(index).attr('src');
  $(this).find('img').attr('src',src);
})
//球球
for(var i=0;i<100;i++){
var w=Math.floor(Math.random()*50)
var r=Math.floor(Math.random()*256)
var g=Math.floor(Math.random()*256)
var b=Math.floor(Math.random()*256)
var div=$('<div>')
.addClass('circle').addClass(function(){
  if(Math.random()>0.5){
    return 'zuo'
  }else{
    return 'you'
  }
})
.width(w).height(w)
.css({top:Math.floor(Math.random()*600),left:Math.floor(Math.random()*800),background:'rgba('+r+','+g+','+b+',0.8)'})
$('.dom').append(div);
}

//球进
$('.dom .circle').on('click',function(){
 $(this).addClass('selected');
 $(this).css('background','red')
})
$(document).on('keydown',function(e){
  if(e.keyCode===13)
    {$('.dom .selected').appendTo('.dom .rongqi')}
  if(e.keyCode===37){
    $('.dom .zuo').wrap('<div class="wrap"></div>')
    $('.dom .wrap').each(function(){
      var weizhi=$(this).find('.zuo').position();
      $(this).find('.zuo').css({
        top:0,left:0
      });
      $(this).css({
        top:weizhi.top,left:weizhi.left
      })
    })
  }

})

})