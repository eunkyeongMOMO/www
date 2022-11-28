<? 
	session_start(); 
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>코오롱글로벌-뉴스및 공지</title>
	<link rel="stylesheet" href="../common/css/common.css" />
    <link rel="stylesheet" href="./common/sub_5common.css" />
    <link rel="stylesheet" href="./css/list.css" />
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
<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION); 
	include "../lib/dbconn.php";

	if(!$scale)$scale=10;			// 한 화면에 표시되는 글 수

    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from greet where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from greet order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      

	$number = $total_record - $start;
?>
<body>
	<div class="visual">
        <img src="./images/sub_visual05.jpg"alt="서브 비주얼 이미지 - 홍보센터" />
        <h3>홍보센터</h3>
      </div> 
	  <!-- visual end -->
      <div class="subnav">
	  <ul>
          <li class="current"><a href="./list.php">공지사항</a></li>
		  <li><a href="../concert/list.php">코오롱뉴스</a></li>
		  <li><a href="../gallery/list.php">코오롱갤러리</a></li>
        </ul>
      </div>
	<!-- sub nav end -->
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
		<div class="list_top">
			<p>총 <span> <?= $total_record ?> </span>개의 게시물이 있습니다.  </p>
		<select id="scale" name="scale" onchange="location.href='list.php?scale='+this.value">
					<option value=' '>선택</option>
					<option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='30'>30</option>
		</select>
		</div>

		<div id="list_top_title">
			<ul>
				<li class="list_item">글번호</li>
				<li class="list_item">제목</li>
				<li class="list_item">글쓴이</li>
				<li class="list_item">등록일</li>
				<li class="list_item">조회</li>
			</ul>		
		</div>

		<div id="list_content">
<?		
   for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
   {
      mysql_data_seek($result, $i);       
      // 가져올 레코드로 위치(포인터) 이동  
      $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	  $item_num     = $row[num];
	  $item_id      = $row[id];
	  $item_name    = $row[name];
  	  $item_nick    = $row[nick];
	  $item_hit     = $row[hit];

      $item_date    = $row[regist_day];
	  $item_date = substr($item_date, 0, 10);  

	  $item_subject = str_replace(" ", "&nbsp;", $row[subject]);
	  //공백문자의 경우 그냥 쓰면안된다.
	  

?>
			<ul id="list_item">
				<li><?= $number ?></li>
				<li><a href="view.php?num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>"><?= $item_subject ?></a></li>
				<li><?= $item_nick ?></li>
				<li><?= $item_date ?></li>
				<li><?= $item_hit ?></li>
   			</ul>
<?
   	   $number--;
   }
?>
			<div id="page_button">
				<div id="page_num"> 
					<span>이전</span>
			<?
			// 게시판 목록 하단에 페이지 링크 번호 출력
			for ($i=1; $i<=$total_page; $i++)
			{
					if ($page == $i)     // 현재 페이지 번호 링크 안함
					{
						echo "<p class='active'> $i </p>";
					}
					else
					{ 
						echo "<a href='list.php?page=$i &scale=$scale'> $i </a>";
					}      
			}
			//scale값을 같이 넘겨줘야한다.
			?>			
			<span>다음</span> 
				</div>
				<div id="button">
					<a href="list.php?page=<?=$page?>&scale=<?=$scale?>">목록</a>
				<? 
					if($userid)
					{
				?>
						<a href="write_form.php?page=<?=$page?>&scale=<?=$scale?>">글쓰기</a>
				<?
					}
				?>
				</div>
			</div> <!-- end of page_button -->
		
        </div> <!-- end of list content -->
		<form id="list_search"  name="board_form" method="post" action="list.php?mode=search">
				<select name="find">
                    <option value='subject'>제목</option>
                    <option value='content'>내용</option>
                    <option value='nick'>닉네임</option>
                    <option value='name'>이름</option>
				</select>
			<input type="text" name="search"placeholder="검색어를 입력하세요">
			<button type="submit">검색</button>
		</form>

  </div> <!-- end of content area-->
</article>
<? include "../common/sub_footer.html"?>
</body>
</html>
