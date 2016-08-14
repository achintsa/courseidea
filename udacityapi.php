<html>
<title> Udacity API call</title>

<head> CAlling REST API Udacity </head>
<body>
This is body

<?php
  $resp = file_get_contents("https://www.udacity.com/public-api/v0/courses");
  $json_response = json_decode($resp, true);
  foreach ($json_response["courses"] as $course) {
    echo $course["title"], "<br>";
    echo $course["homepage"], "<br>";
  }
?>


</body>
</html>