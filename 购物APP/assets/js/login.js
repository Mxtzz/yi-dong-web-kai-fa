$('#btn').on('click',function(){
			var name=document.getElementById('username').value;
		    var pwd=document.getElementById('password').value;
		    if(name==''){
		    	alert('请输入用户名');
		    }else if(pwd == ''){
		    	alert('请输入密码');
		    }else{
		    $.ajax({
				type:"get",
				url:'http://datainfo.duapp.com/shopdata/userinfo.php',
				dataType:'json',
				data:{status:'login',userID:name,password:pwd},
				success:function(data){
					if(data==0){
						alert('用户不存在');
					}
					else if(data==2){
						alert('密码错误');
					}else{
						localStorage.setItem("username",name);
						window.location.href='index-1.html';			
					}
				},
				
			});}
		});