<?
    session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>코오롱글로벌 - 회원정보수정</title>
    <link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/member_modify.css">
    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/jquery-migrate-1.4.1.min.js"></script>
	
<script>
$(document).ready(function() {
    //닉네임 중복검사
     $("#nick").keyup(function() {    
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
        }

 //다시 작성
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
    <?
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);

    $hp = explode("-", $row[hp]);
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>
<div id="wrap">
  <div id="content">
        <form  name="member_form" method="post" action="modify.php"> 
		<div id="title">
            <a class="logo" href="../index.html"><img src="../common/images/logocolor.png" alt=""></a> 
            <h2>회원정보 수정</h2>
        </div>
        <table>
            <caption class="hidden">회원정보 수정</caption>
                <tr class="id">
                    <th>아이디</th>
                   <td>
                     <?= $row[id] ?></td>
                    </tr>
                <tr><th>비밀번호<span>*</span></th>
                    <td><input type="password" name="pass" value=""></td>
                </tr>
                <tr>
                    <th>비밀번호 확인<span>*</span></th>
                <td><input type="password" name="pass_confirm" value="">
                    <div class="notice_txt" id="loadtext_pass_confirm"></div>
                </td>
                </tr>
                <tr><th>이름 <span>*</span></th>
                <td> <input type="text" name="name" value="<?= $row[name] ?>"></td>
                </tr>
                <tr>
                    <th>닉네임 <span>*</span></th>   
                    <td> 
                        <input type="text" name="nick"id="nick" value="<?= $row[nick] ?>">
                        <div class="notice_txt" id="loadtext2"></div>
                    </td>
                </tr>
                <tr>
                    <th>핸드폰번호 <span>*</span></th>
                    <td class="phone">
                    <select class="hp" name="hp1"> 
                        <option value='010'<?if($hp1=='010') echo 'selected';?>>010</option>
                        <option value='011'<?if($hp1=='011') echo 'selected';?>>011</option>
                        <option value='016' <?if($hp1=='016') echo 'selected';?>>016</option>
                        <option value='017'<?if($hp1=='017') echo 'selected';?>>017</option>
                        <option value='018'<?if($hp1=='018') echo 'selected';?>>018</option>
                        <option value='019'<?if($hp1=='019') echo 'selected';?>>019</option>
                </select>
                - <input type="text" class="hp" name="hp2" value="<?= $hp2 ?>"> - 
                <input type="text" class="hp" name="hp3" value="<?= $hp3 ?>">
</td></tr>
                <tr>
                    <th>이메일<span>*</span></th>
                    <td class="email">
                    <input type="text" id="email1" name="email1" value="<?= $email1 ?>"> @ 
                    <input type="text" name="email2" 
                        value="<?= $email2 ?>">
                    </td>
                </tr>
			</table>
		<div id="button">
            <a href="#" onclick="check_input()">저장하기</a>
		    <a href="#" onclick="reset_form()">다시쓰기</a>
		</div>
	    </form>
  </div>
</div>

</body>
</html>
