<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>demo: current Time </h1>
	<p id="p1">time </p>
	<p id="p2">day tuesday </p>
	<script>
		var today=new Date();
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var Time=today.getHours()+ ":"+ today .getMinutes() +":"+ today.getSeconds();
		document.getElementById("p1").innerHTML= "Today = "+Time ;
		document.getElementById("p2").innerHTML= "Day = "+days[today.getDay()]

	</script>

</body>
</html>
