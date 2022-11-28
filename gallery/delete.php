<?
   session_start();
   @extract($_GET); 
   @extract($_POST); 
   @extract($_SESSION); 
   
   $table = "concert";

   include "../lib/dbconn.php";

   $sql = "select * from $table where num = $num";
   $result = mysql_query($sql, $connect);

   $row = mysql_fetch_array($result);

   $copied_name[0] = $row[file_copied_0];
   $copied_name[1] = $row[file_copied_1];
   $copied_name[2] = $row[file_copied_2];

   for ($i=0; $i<3; $i++)
   {
		if ($copied_name[$i]) //첨부된 파일이 있으면
	   {
			$image_name = "./data/".$copied_name[$i]; //첨부된 파일의 이름
			unlink($image_name); //서버에 있는 파일을 삭제하는 함수
	   }
   }

   $sql = "delete from $table where num = $num";
   mysql_query($sql, $connect);

   $sql ="delete from ripple where parent = $num"; //댓글삭제
   mysql_query($sql, $connect);

   mysql_close();

   echo "
	   <script>
	    location.href = 'list.php?table=$table';
	   </script>
	";
?>

