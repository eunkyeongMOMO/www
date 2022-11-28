<? 
	session_start(); 
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	/*$num $page $scale*/
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);       	
	$item_subject = $row[subject];
	$item_content = $row[content];
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>코오롱글로벌-공지사항</title>
	<link rel="stylesheet" href="../common/css/common.css" />
    <link rel="stylesheet" href="./common/sub_5common.css" />
    <link rel="stylesheet" href="./css/wirte_form.css" />
	<script
      src="https://kit.fontawesome.com/969baeb221.js"
      crossorigin="anonymous"
    ></script>
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
    ></script>
    <script src="../common/js/prefixfree.min.js"></script>
</head>
<? include "../common/sub_header.html"?>

<body>
<div id="wrap">
  <div class="visual">
        <img
          src="./images/sub_visual05.jpg"
           alt="서브 비주얼 이미지 - 홍보센터"/>
        <h3>홍보센터</h3>
      </div>
      <div class="subnav">
        <ul>
          <li class="current"><a href="./list.php">공지사항</a></li>
          <li><a href="#">뉴스 갤러리</a></li>
        </ul>
      </div>
      <article id="content">
        <div class="title_area">
          <div class="line_map">
            <span>홈</span>
            &gt;
            <span>홍보센터</span>
            &gt;
            <strong>공지사항</strong>
          </div>
          <h2>공지사항</h2>
        </div>
			<div class="content_area">   
					<div id="form_title">
						<p> 공지사항 수정하기 </p>
					</div>
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>"> 
					<div id="write_form">
						<div id="write_row1">
							<span> 닉네임 </span>
							<span><?=$usernick?></span>
						</div>
						<div id="write_row2">
						<p> 제목</p>
						<input type="text" name="subject" value="<?=$item_subject?>" >
						</div>
						<div id="write_row3">
						<p> 내용</p>
						<textarea rows="15" cols="79" name="content"><?=$item_content?></textarea>
						</div>
					</div>

					<div id="button">
						<button type="submit">저장하기</button>
						<a href="list.php?page=<?=$page?>&scale=<?=$scale?>">목록보기</a>
					</div>
					</form>

				</div> <!-- end of col2 -->
			</div> 

		</article>
		</div>
		<? include "../common/sub_footer.html"?>
</body>
</html>