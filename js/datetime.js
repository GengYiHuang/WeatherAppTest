setInterval(function() {
	var Today = new Date();
	var Year = Today.getFullYear();
	var Month = Today.getMonth()+1;
	var Day = Today.getDate();
	var Hours = Today.getHours();
	var Minutes = Today.getMinutes();
	var Seconds = Today.getSeconds();

	if (Month<10) {
		Month = "0"+Month
	};
	if (Day<10) {
		Day = "0"+Day
	};
	if (Hours<10) {
		Hours = "0"+Hours
	};
	if (Minutes<10) {
		Minutes = "0"+Minutes
	};
	if (Seconds<10) {
		Seconds = "0"+Seconds
	};


	document.getElementById('date').innerHTML = Year+" / "+Month+" / "+Day;
	document.getElementById('time').innerHTML = Hours+" : "+Minutes+" : "+Seconds;
},500);







