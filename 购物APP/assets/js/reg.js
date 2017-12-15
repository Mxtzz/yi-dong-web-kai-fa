$('#btn').on('click',function(){
			var name=document.getElementById('username').value;
		    var pwd=document.getElementById('password').value;
		    var pwd2=document.getElementById('password2').value;
		    if(name==''){
				alert('用户名不能为空');
			}
			else if(pwd==''){
				alert('密码不能为空');
			}
			else{
				$.ajax({
					type:"get",
					url:'http://datainfo.duapp.com/shopdata/userinfo.php',
					data:{status:'register',userID:name,password:pwd},
					success:function(data){
						console.log(data);
						if(data==0){
							alert('用户名重复');
						}
						else if(data==2){
							alert('密码错误');	
						}else{
							alert('注册成功！');
							window.location.href='login.html';
						}
					}
					
				});
			}
		});