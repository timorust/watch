// window.onload = () => {}
// elements
const $container = document.getElementById('container');
const $timer = document.getElementById('timer');
const $counterNumber = document.getElementById('counter-number');
const $clicker = document.getElementById('clicker');
const $message = document.getElementById('message');
const $timerScore = document.getElementById('timer-score');
const $reloadButt = document.getElementById('reload');
const $startButt = document.getElementById('start');

// game rules
const winScore = 10;
const maxTime = 5;

// timers
let clicksCnt;
let timerCnt;
let timerInterval;

// function
const init = ($event) => {
	const fromBuutId = $event.target.id;
	clicksCnt = 0;
	timerCnt = maxTime;
	$timer.innerHTML = timerCnt;
	$counterNumber.innerHTML = clicksCnt;
	$message.classList.remove('message--failed');
	$message.classList.remove('message--success');

	if(fromBuutId === 'start') {
		timerInterval = setInterval(cntDounTimeAndLose, 1000);
		$container.classList.add('started');
	}
	
}





const cntDounTimeAndLose = () => {
	timerCnt--;
	$timer.innerHTML = timerCnt;
	checkGameStatus();
}

const cntUpClicksAndWin = () => {
	clicksCnt++;  
	$counterNumber.innerHTML = clicksCnt; 
   checkGameStatus();
}

const stopGame = () => {
	clearInterval(timerInterval);
	$container.classList.remove('started');
}

const checkGameStatus = () => {
	//lose
	if(timerCnt === 0) {
		stopGame();
		if(clicksCnt < winScore) {
			 $message.classList.add('message--failed');
			}		
	}
	//clicks
	if(clicksCnt >= winScore){
		stopGame();
		$message.classList.add('message--success'); 
		$timerScore.innerHTML = 'You time:' + (maxTime - timerCnt) + ' seconds';
	}

}




// listener
$clicker.addEventListener('click',cntUpClicksAndWin);
$reloadButt.addEventListener('click', init);
$startButt.addEventListener('click', init);


// init();