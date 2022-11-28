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
    
      $sql = "delete from free_ripple where num=$ripple_num";
      mysql_query($sql, $connect);
      mysql_close();

      echo "
	   <script>
         //경고창 띄워도 됨
	    location.href = 'view.php?table=$table&num=$num';
	   </script>
	  ";
?>
