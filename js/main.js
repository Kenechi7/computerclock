// The function renderTime will give the time
function renderTime() {
	
	// My variables for my hours, minutes and seconds.
	var currentTime = new Date();
	var diem = 'AM';
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

	// This if and else if statement is needed so my 
	// clock doesn't read in military time.
	if (h == 0) {
		he = 12;
	} else if (h > 12) {
		h = h - 12;
		diem = 'PM';
	}
	// The if statements allow for my minutes, seconds, or hours
	// are in single didgits, it provides a 0 in front of the 
	// number to make it double digits, like a normal clock.
	if (h < 10) {
		h = '0' + h;
	}
	if (m < 10) {
		m = '0' + m;
	}
	if (s < 10) {
		s = '0' + s;
	}

	// This variable places the everything in my JavaScript
	// into my empty in my HTML
	var myClock = document.getElementById('clockDisplay');
	myClock.innerText = h + ':' + m + ':' + s + '' + diem;
	// This keeps the clock running!
	setTimeout('renderTime()', 1000);
}
// Let's render this baby!
renderTime();