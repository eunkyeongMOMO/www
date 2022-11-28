<?
      include "../lib/dbconn.php";
      @extract($_GET); 
      @extract($_POST); 
      @extract($_SESSION); 
      /*
      table
      num 부모의 => view.php에서 필요한 변수
      ripple_num
      */
    
      $sql = "delete from ripple where num=$ripple_num";
      mysql_query($sql, $connect);
      mysql_close();

      echo "
	   <script>
	    location.href = 'view.php?table=$table&num=$num';
	   </script>
	  ";
?>
