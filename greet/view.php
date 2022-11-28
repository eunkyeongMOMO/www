<? 
	session_start(); 

	/*
	$num //db에저장된 글번호
	$page
	$scale

	*/
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		//공백문자를 엔티티로 바꿔줘야한다. -> 안그러면 오류남
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
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
    <link rel="stylesheet" href="./css/view.css" />
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
<script>
    function del(href) 
    {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
    }
</script>
</head>

<body>

<div id="wrap">
<div class="visual">
        <img
          src="./images/sub_visual05.jpg"
           alt="서브 비주얼 이미지 - 홍보센터" />
        <h3>홍보센터</h3>
</div>
      <div class="subnav">
      <ul>
		  <li class="current"><a href="./list.php">공지사항</a></li>
		  <li ><a href="../concert/list.php">코오롱뉴스</a></li>
		  <li><a href="../gallery/list.php">코오롱갤러리</a></li>
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
		<div class="summary">
                    <p>코오롱글로벌 공지사항을 알려드립니다.</p>
                    <span>차별화된 기술력 으로 미래를 선도하는 기업코오롱글로벌,여러분과 함께합니다.</span>
         </div>

	<ul id="view_title">

		<li><?= $item_subject ?></li>
		<li> <?= $item_nick ?> </li> 
		<li>조회 : <?= $item_hit ?></li> 
		<li><?= $item_date ?> </li>
		</ul>

		<div id="view_content">
			<?= $item_content ?>
		</div>

			<div id="button">
					<a href="list.php?page=<?=$page?>&scale<?=$scale?>">목록</a>
			<? 
				if($userid==$item_id || $userlevel==1 || $userid=="admin")
				{
			?>
					<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>&scale<?=$scale?>">글수정</a>
					<a href="javascript:del('delete.php?num=<?=$num?>')">글삭제</a>
			<?
				}
			?>
			<? 
				if($userid )
				{
			?>
							<a href="write_form.php?page=<?=$page?>&scale<?=$scale?>">새글쓰기</a>
			<?
				}
			?>
			</div>

			</div> <!-- end of content_area -->
		</article>
</div> <!-- end of wrap -->
<? include "../common/sub_footer.html"?>
</body>
</html>
