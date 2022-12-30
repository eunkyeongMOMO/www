<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>코오롱글로벌 - 회원가입</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/member_form.css">
    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/jquery-migrate-1.4.1.min.js"></script>
	<script>
	 $(document).ready(function() {
 //id 중복검사
 $("#id").keyup(function() {    // id입력 상자에 id값 입력시
    var id = $('#id').val(); //aaa

    $.ajax({
        type: "POST",
        url: "check_id.php",
        data: "id="+ id,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext").html(data);
        }
    });
});
		 
//nick 중복검사		 
$("#nick").keyup(function() {    // id입력 상자에 id값 입력시
    var nick = $('#nick').val();

    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,  
        cache: false, 
        success: function(data)
        {
             $("#loadtext2").html(data);
        }
    });
});		 

//pass_confirm
$("#pass_confirm").keyup(function(){
            
            if($('#pass').val() == $('#pass_confirm').val()){
                $('#loadtext_pass_confirm').html('<span class="success">비밀번호가 일치합니다.</span>');
                $('#pass_confirm').parent().parent('tr').removeClass('fail');
                $('#pass_confirm').parent().parent('tr').addClass('success');
            } else {
                $('#loadtext_pass_confirm').html('<span class="fail">비밀번호가 일치하지 않습니다.</span>');
                $('#pass_confirm').parent().parent('tr').removeClass('success');
                $('#pass_confirm').parent().parent('tr').addClass('fail');
            }
        });

});
	
	</script>
	<script>
   

   function check_input()
        {
           
            if (!document.member_form.id.value)
            {
                alert("아이디를 입력하세요");
                document.member_form.id.focus();
                return;
            } else if(document.member_form.id.value.indexOf(' ') > -1){
                alert("공백을 포함하지 않는 아이디를 입력하세요.");
                document.member_form.id.focus();
                return;
            }

            if (!document.member_form.pass.value)
            {
                alert("비밀번호를 입력하세요");    
                document.member_form.pass.focus();
                return;
            }

            if (!document.member_form.pass_confirm.value)
            {
                alert("비밀번호확인을 입력하세요");    
                document.member_form.pass_confirm.focus();
                return;
            }

            if (!document.member_form.name.value)
            {
                alert("이름을 입력하세요");
                document.member_form.name.focus();
                return;
            }

            if (!document.member_form.nick.value)
            {
                alert("닉네임을 입력하세요");    
                document.member_form.nick.focus();
                return;
            } else if(document.member_form.nick.value.indexOf(' ') > -1)
            {
                alert("공백을 포함하지 않는 닉네임을 입력하세요");    
                document.member_form.nick.focus();
                return;
            }


            if (!document.member_form.hp2.value || !document.member_form.hp3.value )
            {
                alert("휴대폰 번호를 입력하세요");    
                document.member_form.nick.focus();
                return;
            }

            if (document.member_form.pass.value != 
                document.member_form.pass_confirm.value)
            {
                alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
                document.member_form.pass.focus();
                document.member_form.pass.select();
                return;
            }


            document.member_form.submit();
                // insert.php 로 변수 전송
        }
   

   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>
</head>
<body>
	 <? include "../common/subhead.html" ?>
     <header>
    <a class="logo" href="../index.html"><img src="../common/images/logocolor.png" alt=""></a> 
    </header>    
	<article id="content">  
	  
	  <h2>회원가입</h2>
	  <form  name="member_form" method="post" action="insert.php"> 
		
     <table>
      <caption class="hidden">회원가입</caption>
     	<tr>
     		<th scope="col"><label for="id">아이디<span>*</span></label></th>
     		<td>
     			 <input class="text_box"  type="text" name="id" id="id" placeholder="아이디를 입력하세요."required>
			     <div  class="notice_txt" id="loadtext"></div>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass">비밀번호<span>*</span> </label></th>
     		<td>
     			 <input class="text_box"  type="password" name="pass"  placeholder="비밀번호를 입력하세요."  id="pass"required>
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="pass_confirm">비밀번호확인 <span>*</span></label></th>
     		<td>
     			<input class="text_box"  type="password" name="pass_confirm" id="pass_confirm" placeholder="비밀번호를 한번더 입력하세요." required>
                 <div class="notice_txt" id="loadtext_pass_confirm"></div>
            </td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="name">이름 <span>*</span></label></th>
     		<td>
     			<input class="text_box"  type="text" name="name" id="name" placeholder="이름을 입력하세요." required> 
     		</td>
     	</tr>
     	<tr>
     		<th scope="col"><label for="nick">닉네임<span>*</span></label></th>
     		<td>
     			 <input class="text_box" type="text" name="nick" id="nick" placeholder="닉네임을 입력하세요." required>
                  <div class="notice_txt" id="loadtext2"></div>
     		</td>
     	</tr>
     	<tr class="phone">
     		<th scope="col">휴대폰<span>*</span></th>
     		<td>
     			<label class="hidden" for="hp1">전화번호앞3자리</label>
     			<select class="hp" name="hp1" id="hp1"> 
              <option value='010'>010</option>
              <option value='011'>011</option>
              <option value='016'>016</option>
              <option value='017'>017</option>
              <option value='018'>018</option>
              <option value='019'>019</option>
          </select>  - 
          <label class="hidden" for="hp2">전화번호중간4자리</label>
          <input type="text" class="hp" name="hp2" id="hp2"  required> - 
          <label class="hidden" for="hp3">전화번호끝4자리</label>
          <input type="text" class="hp" name="hp3" id="hp3"  required>
     			
     		</td>
     	</tr>
     	<tr class="email">
     		<th scope="col">이메일<span>*</span></th>
     		<td>
     		  <label class="hidden" for="email1">이메일아이디</label>
     			<input class="email_box" type="text" id="email1" name="email1" required> @ 
     			<label class="hidden" for="email2">이메일주소</label>
     			<input  class="email_box" type="text" name="email2" id="email2" required>
     		</td>
     	</tr>
     	<tr>
     		<td colspan="2">
     			<a href="#"onclick="check_input()">가입하기</a>&nbsp;&nbsp;
				 <a href="#"onclick="reset_form()">다시 작성하기</a>
     		</td>
     	</tr>
     </table>

	 </form>
	  
	</article>
	 <? include "../common/subfoot.html" ?>
</body>
</html>


