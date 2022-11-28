<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<?php
 
 $name_01=$_POST['uname'];
 $mail_02=$_POST['email'];
 $phone_03=$_POST['phone'];
 $msg_04=$_POST['message'];

 
 $to='momogo10@naver.com'; //홈페이지 관리자 메일
 $subject='코오롱글로벌에서 관리자에게 보낸 메일'; // 제목
 $msg="보낸사람:$name_01\n". 
      "보낸사람메일주소:$mail_02\n".
      "보낸사람전화번호:$phone_03\n".
      "내용:$msg_04\n";
 
 mail($to,$subject,$msg,'보낸사람메일주소:'.$mail_02);   

echo "<script>
        alert('메일이 전송되었습니다. 감사합니다.');
        location.href='sub6_5.html' ;
</script>
"

?>