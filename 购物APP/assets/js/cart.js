		var user=localStorage.getItem('username');
			$.ajax({
				type:"get",
				url:'http://datainfo.duapp.com/shopdata/getCar.php',
				dataType:'jsonp',
				data:{userID:user},
				success:function(data){
					var list=document.getElementsByClassName('carList');
					var str='';
					for(var i=0;i<data.length;i++){
					 	str+='<div data-am-widget="intro" class="good am-intro am-cf am-intro-default">\
					 		<div class="am-intro-hd">\
					 			<h2 class="am-intro-title">'+data[i].goodsName+'</h2>\
								<input type="checkbox" class="choice am-intro-more am-intro-more-top">\
							</div>\
							<div class="am-intro-bd">\
								<div class="am-intro-left am-u-sm-5">\
      								<img src="'+data[i].goodsListImg+'" />\
      							</div>\
      							<div class="am-intro-right am-u-sm-7">\
      								<h1 class="goodPrice">¥'+data[i].price+'</h1>\
      							</div>\
							</div>\
						<div class="count">\
							 <button id="del" goodsId="'+data[i].goodsID+'">-</button>\
	                         <span class="number">'+data[i].number+'</span>\
	                         <button id="add" goodsId="'+data[i].goodsID+'">+</button>\
						</div>\
						<button id="shopdel" class="am-icon-close am-btn" goodsId="'+data[i].goodsID+'"></button><hr data-am-widget="divider" class="am-divider am-divider-default" />\
						</div>\
					    </div>';
					    
					}
					
					$(list).html(str);
					$("input[class='choice']").change(function(){ 
						var allchoice=$('#allchoice')[0];
						var flag=0;
			                var choice = $('.choice');
							for(var i=0;i<choice.length;i++){
								if(!choice[i].checked){
									//console.log(i+':'+choice[i].checked);
									allchoice.checked=false;
									//console.log('all:'+allchoice.checked);
								flag=1;
								}
							}
							if(flag==0){
								allchoice.checked=true;
							}
					});  
					//全选
					    $("#allchoice").click(function(){  
					    	var choice = $('.choice');
						    if($(this).is(":checked")){  
								for(var i=0;i<choice.length;i++){
									choice[i].checked = true;
								}
						    }else{    
						        for(var i=0;i<choice.length;i++){
									choice[i].checked = false;
								}
						    }  
				      });
						//删除商品
							$('#shopdel').click(function(){
								var goodsId=$(this).attr('goodsId');
								var that = this;
								$.ajax({
									type:"get",
									url:'http://datainfo.duapp.com/shopdata/updatecar.php',
									data:{userID:user,goodsID:goodsId,number:0},
									success:function(data){
										$(this).parents('.good').remove();
										window.location.reload();
									},		
								});
							});
					    //+++++++++++++
						$('.count > #add').each(function(){
							$(this).click(function(){
								var val=parseInt($(this).prev().html());
								val++;
								$(this).prev().html(val);
							});
						});
						//--------------
						$('.count > #del').each(function(){
							$(this).click(function(){
								var val=parseInt($(this).next().html());
								if(val>1)
								val--;
								else{
								val=1;
									
								}
							$(this).next().html(val);
							
							});
						});
					},
				});

