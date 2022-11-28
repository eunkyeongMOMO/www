<? 
	session_start(); 
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	$table = "concert";

	include "../lib/dbconn.php";

	if ($mode=="modify")  //수정 글쓰기
	//$table $num $mode 
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>코오롱글로벌-코오롱뉴스</title>
	<link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/sub_5common.css">
    <link rel="stylesheet" href="./common/write_form.css">
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
      if (!document.board_form.subject.value)
      {
          alert("제목을 입력하세요!");    
          document.board_form.subject.focus();
          return;
      }

      if (!document.board_form.content.value)
      {
          alert("내용을 입력하세요!");    
          document.board_form.content.focus();
          return;
      }
      document.board_form.submit();
   }
</script>
</head>

<body>
<? include "../common/sub_header.html"?>
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
<div id="content">
<?
	if($mode=="modify")
	{
?>
		<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>&scale<?=$scale?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data"> 
<?
	}
	else
	{
?>
		<form  name="board_form" method="post" action="insert.php?table=<?=$table?>&page=<?=$page?>&scale<?=$scale?>&liststyle=<?=$liststyle?>" enctype="multipart/form-data">
		<!-- enctype 첨부할 파일이 있을때 무조건 써줘야한다.  -->
<?
	}
?>
<div id="form_title">
<p> 코오롱뉴스 작성하기 </p>
</div>
		<div id="write_form">
	<?
	if( $userid && ($mode == "modify") )
	{
	?>
			<div class="write_row1">
				<span> 닉네임 </span>
				<span><?=$usernick?></span>
			</div>
<?
	}
?>
<?
	if( $userid && ($mode != "modify") )
	{
?>
	
	<div class="write_row1">
				<span> 닉네임 </span>
				<span><?=$usernick?></span>
				<input type="checkbox" name="html_ok" value="y"> HTML 쓰기</div>
					<!-- checked가 되었을때만 넘어감. -->

<?
	}
?>						

			<div id="write_row2">
				<p> 제목 </p>
			    <input type="text" name="subject" value="<?=$item_subject?>" >
			</div>
			<div id="write_row3">
				<p> 내용</p>
			    <textarea rows="15" cols="79" name="content"><?=$item_content?></textarea>
			</div>
			<div class="file_form">
				<p> 이미지파일1</p>
				<input type="file" name="upfile[]">
			</div>
<? 	if ($mode=="modify" && $item_file_0)
	{
?>
			<div class="delete_ok">
				<p><span><?=$item_file_0?></span> 파일이 등록되어 있습니다. </p>
			<input type="checkbox" name="del_file[]" value="0"> <span>삭제</span>
			</div>
<?
	} 
?>
			<div class="file_form">
				<p> 이미지파일2  </p>
			    <input type="file" name="upfile[]">
			</div>
<? 	if ($mode=="modify" && $item_file_1)
	{
?>
			<div class="delete_ok"> 
				<p><span><?=$item_file_1?></span> 파일이 등록되어 있습니다. </p>
			<input type="checkbox" name="del_file[]" value="1"> <span>삭제</span> 
			</div>
<?
	}
?>
			<div class="file_form">
				<p> 이미지파일3</p>
			    <input type="file" name="upfile[]">
			</div>
<? 	if ($mode=="modify" && $item_file_2){
	
?>
			<div class="delete_ok">
			<p>	<span><?=$item_file_2?></span>  파일이 등록되어 있습니다. </p>
			<input type="checkbox" name="del_file[]" value="2"> <span>삭제</span> 
			</div>
<?
}
?>
	</div>
		<div id="button">
			<a href="#" onclick="check_input()">저장하기</a>
			<a href="list.php?table=<?=$table?>&page=<?=$page?>&scale=<?=$scale?>&liststyle=<?=$liststyle?>">목록</a>
		</div>

		</form>

  </div> <!-- end of content -->
</div> <!-- end of wrap -->
<? include "../common/sub_footer.html"?>
</body>
</html>
