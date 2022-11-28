<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>코오롱글로벌-로그인</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="css/login.css">
    <script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
</head>
<body>
<div class="login_wrap">
<h2><a href="../index.html" ait="코오롱글로벌로 메인 페이지로 이동"><img src="../common/images/logocolor.png" alt=""></a></h2>
<form  name="member_form" method="post" action="login.php"> 


    <div id="id_pw_input">
        <ul>
            <li>
                <label for="id">ID</label>
                <input type="text" name="id" class="login_input" required>
            </li>
            <li>
                <label for="pass">PASSWORD</label>
                <input type="password" name="pass" class="login_input" required>
            </li>
        </ul>						
	</div>
    <div class="login_button">
        <div id="login_button">
            <button type="submit">로그인</button>
        </div>
        <div id="join_button">
            <a href="../member/join.html">회원가입</a>
        </div>
    </div>

    <ul class="find">
        <li>
           <a href="id_find.php">아이디 찾기</a>
           <span>|</span>
           <a href="pw_find.php">비밀번호 찾기</a>
        </li>
	</ul>

</form>
</div>
</body>
</html>