//  	$.ajax({
//        	type:'get',
//        	url:'http://datainfo.duapp.com/shopdata/getGoods.php',
//        	dataType:'jsonp',
//        	success:function(data){
//        		for(var i=0;i<data.length;i++){
//        			$('#goodList').html($('#goodList').html()+'<li goodsID="'+data[i].goodsID +'"><div class="am-gallery-item"><img src="'+data[i].goodsListImg+'"  alt=""/><h3 class="am-gallery-title">'+data[i].goodsName+'</h3><h2 class="am-gallery-title">￥'+data[i].price+' <p>已售'+data[i].price+'  </p></h2></div></li>');
//        		}
//        		$('li').on('click',function(){
//      	  		var id=this.getAttribute('goodsID');
//        			window.location.href="shop.html#"+id;
//        		});
//        	}
//    	});
      	
//    	搜索
      	$('#search').click(function(){
       		var word=encodeURI($('#shopitem').val());
		 	$.ajax({
			type:"get",
			url:'http://datainfo.duapp.com/shopdata/selectGoodes.php',
			dataType:'jsonp',
			data:{selectText:word},
			success:function(data){
				for(var i=0;i<data.length;i++){
          			$('#goodList').html($('#goodList').html()+'<li goodsID="'+data[i].goodsID +'"><div class="am-gallery-item"><img src="'+data[i].goodsListImg+'"  alt=""/><h3 class="am-gallery-title">'+data[i].goodsName+'</h3><h2 class="am-gallery-title">￥'+data[i].price+' <p>已售'+data[i].price+'  </p></h2></div></li>');
          		}
				$('li').on('click',function(){
        	  		var id=this.getAttribute('goodsID');
          			window.location.href="shop.html#"+id;
          		});
			},
			
		  	});
       	});