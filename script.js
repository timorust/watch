// window.onload = () => {}

const timeWatch = document.getElementById('timer');
// console.log(TBD);
const counterNumber = document.getElementById('counter-number');
const getClicker = document.getElementById('clicker');
const getMessage = document.getElementById('message');


let clicksCnt = 0;

getClicker.addEventListener('click', () => {
    clicksCnt++;
    counterNumber.innerHTML = clicksCnt;
});

let timerCnt = 5;

const myTimerInterval = setInterval(() => {
	timerCnt--;
	timeWatch.innerHTML = timerCnt;

	if(timerCnt === 0) {

		clearInterval(myTimerInterval);

		if(clicksCnt >= 20) {

getMessage.classList.add('message--success');

} else{
	getMessage.classList.add('message--failed');
}		

	}
}, 1000);