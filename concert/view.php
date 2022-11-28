<? 
	session_start(); 
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	$table = "concert";

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];
//for문 사용을 위해 배열에 담아놓는다.

	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	//첨부된 이미지 가져오기
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i]) //첨부된 이미지가 있으면 
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			// GetImageSize[] 배열로 리턴 [이미지의 넓이, 이미지높이, 이미지타입]

			$image_width[$i] = $imageinfo[0]; //이미지의 넓이
			$image_height[$i] = $imageinfo[1]; //이미지의 높이
			$image_type[$i]  = $imageinfo[2]; //이미지의 타입

			if ($image_wid[$i] > 785) $image_width[$i] = 785; 
			// 첨부된 이미지가 max width 가 넘어가면 강제로 맞춰지게, 이미지 넓이를 제한
				
		}
		else //첨부된 이미지가 없으면
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>코오롱글로벌-코오롱뉴스</title>
	<link rel="stylesheet" href="../common/css/common.css" />
    <link rel="stylesheet" href="./common/sub_5common.css" />
    <link rel="stylesheet" href="./common/view.css" />
	<script
      src="https://kit.fontawesome.com/969baeb221.js"
      crossorigin="anonymous"
    ></script>
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
    ></script>
    <script src="../common/js/prefixfree.min.js"></script>
	<script>

	function check_input()
	{
		if (!document.ripple_form.ripple_content.value)
		{
			alert("내용을 입력하세요!");    
			document.ripple_form.ripple_content.focus();
			return;
		}
		document.ripple_form.submit();
    }
    function del(href) 
    {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
    }
</script>
</head>
<? include "../common/sub_header.html"?>

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
	  <li><a href="../greet/list.php">공지사항</a></li>
		  <li class="current"><a href="./list.php">코오롱뉴스</a></li>
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
            <strong>코오롱뉴스</strong>
          </div>
          <h2>코오롱뉴스</h2>
        </div>
		<div class="content_area">
		<div class="summary">
			<p>코오롱글로벌 최신 소식들을 알려드립니다.</p>
        	<span>차별화된 기술력 으로 미래를 선도하는 기업코오롱글로벌,여러분과 함께합니다.</span>
         </div>
		 <ul id="view_title">

			<li><?= $item_subject ?></li>
			<li> <?= $item_nick ?> </li> 
			<li>조회 : <?= $item_hit ?></li> 
			<li><?= $item_date ?> </li>
		</ul>
		<div id="view_content">
<?
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i]) 
		{
			$img_name = $image_copied[$i];
			$img_name = "./data/".$img_name;
			$img_width = $image_width[$i];
			echo "<img class='view_img' src='$img_name' width='$img_width' style='display: block; margin: 10px auto'>";
		}
	}
?>
			<?= $item_content ?>
		</div>

	<!-- 댓글 처리코드 -->
	<div id="ripple">
<?
	    $sql = "select * from free_ripple where parent='$item_num'";
	    $ripple_result = mysql_query($sql);

		while ($row_ripple = mysql_fetch_array($ripple_result))
		{
			$ripple_num     = $row_ripple[num];  //댓글번호//변수 이름 중복되지 않게 
			$ripple_id      = $row_ripple[id];
			$ripple_nick    = $row_ripple[nick];
			$ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
			$ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
			$ripple_date    = $row_ripple[regist_day];
?>
			<div class="ripple_writer_title">
			<ul class="ripple_top">
			<li><?=$ripple_nick?></li>
			<li><?=$ripple_date?></li>
			</ul>
			

			<div class="ripple_content">
				<?=$ripple_content?>
			 <? 
					if($userid=="admin" || $userid==$ripple_id)
			          echo "<a href='delete_ripple.php?table=$table&num=$item_num&ripple_num=$ripple_num'>삭제</a>"; 
			  ?>
			  </div>
			</div>

<?
		}
?>			<div class="ripple_box">
			<form  name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>">  
			<!-- 부모 table, num 넘긴다 -->
				<label for="ripple_text">댓글작성</label>
				<textarea id="ripple_text" rows="5" cols="65" name="ripple_content"></textarea>
				<a href="#" onclick="check_input()"> 작성</a></div>
			</form>
		</div> <!-- end of ripple -->

		<div id="button">
				<a href="list.php?table=<?=$table?>&page=<?=$page?>&scale<?=$scale?>&liststyle=<?=$liststyle?>">목록</a>
<? 
	if($userid==$item_id || $userid=="admin" || $userlevel==1 )
	{
?>
				<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>&scale<?=$scale?>&liststyle=<?=$liststyle?>">글수정</a>
				<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">글삭제</a>
<?
	}
?>
<? 
	if($userid)
	{
?>
				<a href="write_form.php?table=<?=$table?>&page=<?=$page?>&scale<?=$scale?>&liststyle=<?=$liststyle?>">새글쓰기</a>
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
